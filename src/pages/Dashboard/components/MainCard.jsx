import { useSelector } from "react-redux";
import creditCard from "../../../assets/credit-card.svg";
import { FaDotCircle } from "react-icons/fa";
import { useGetBalanceQuery } from "../../../redux/features/user/userApi";
import { useGetTransactionsHistoryQuery } from "../../../redux/features/transaction/transactionApi";
import { useEffect, useState } from "react";

const MainCard = () => {
  const { userData } = useSelector((state) => state.user);
  const { accountNumber, fullName, email } = userData;
  const { data } = useGetBalanceQuery(email);
  const { data: transactionData } = useGetTransactionsHistoryQuery(
    userData.username
  );

  const [incoming, setIncoming] = useState(0);
  const [outcoming, setOutcoming] = useState(0);

  useEffect(() => {
    if (transactionData) {
      let totalIncoming = 0;
      let totalOutcoming = 0;
      transactionData.meta.forEach((item) => {
        if (item._id === "add-money") {
          totalIncoming += item.totalAmount;
        }
        if (item._id === "send-money" || item._id === "make-payment") {
          totalOutcoming += item.totalAmount;
        }
      });
      setIncoming(totalIncoming);
      setOutcoming(totalOutcoming);
    }
  }, [transactionData]);

  return (
    <div className="flex flex-col items-center bg-gray-100 shadow-2xl border-transparent rounded-[6rem] py-6">
      <div className="text-xl font-semibold">Cards</div>

      <div className="flex justify-center">
        <div className="p-7 pr-16 border-r-2 relative">
          <p className="absolute flex mt-24 ml-14 font-bold text-cyan-50 text-xl">
            {accountNumber}{" "}
            <span className="ml-1 text-xs text-green-400">
              {<FaDotCircle />}
            </span>
          </p>
          <p className="absolute mt-60 ml-14 text-cyan-50">{fullName}</p>
          <p className="absolute mt-60 text-cyan-50 right-64 mr-3">30/6/2027</p>
          <img src={creditCard} alt="credit-card" className="w-[30rem]" />
        </div>

        <div className="pl-16 pt-8">
          <div className="pb-6">
            <h1 className=" text-blue-400 text-right">
              <span className="text-xl font-semibold mr-2">$</span>{" "}
              <span className="text-3xl font-semibold">
                {data?.result?.balance}
              </span>
            </h1>

            <p className="text-gray-400 text-right">Current balance</p>
          </div>

          <div className="pb-6">
            <h1 className=" text-teal-600 text-right">
              <span className="text-xl font-semibold mr-2">$</span>{" "}
              <span className="text-3xl font-semibold">{incoming}</span>
            </h1>

            <p className="text-gray-400 text-right">Income</p>
          </div>

          <div className="">
            <h1 className=" text-red-600 text-right">
              <span className="text-xl font-semibold mr-2">$</span>{" "}
              <span className="text-3xl font-semibold ">{outcoming}</span>
            </h1>

            <p className="text-gray-400 text-right">Outcome</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
