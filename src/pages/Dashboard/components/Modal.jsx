import { IoCloseSharp } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMakeTransactionMutation } from "../../../redux/features/transaction/transactionApi";
import { toast } from "sonner";
import AuthModal from "../../../components/ui/AuthModal/AuthModal";
import { takeUserPhotoToggle } from "../../../redux/features/user/userSlice";

function convertToSlug(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

export const Modal = ({ modalHandler, heading, logo }) => {
  const [amount, setAmount] = useState("");
  const [transUser, setTransUser] = useState("");
  const { userData } = useSelector((state) => state.user);
  const { username } = userData;
  const [makeTransaction] = useMakeTransactionMutation();
  const dispatch = useDispatch();

  const receiverNotNeededTransactions = ["Add Money", "Request Loan"];

  const handleTransaction = async () => {
    let transObj;
    const transactionType = convertToSlug(heading);

    if (transactionType === "add-money") {
      transObj = {
        amount: Number(amount),
        transactionType,
        receiver: username,
        transactionMadeBy: username,
      };
    } else {
      transObj = {
        amount: Number(amount),
        transactionType,
        sender: username,
        receiver: transUser,
        transactionMadeBy: username,
      };
    }
    const loading = toast.loading("Transaction processing...");
    const transactionResult = await makeTransaction(transObj).unwrap();
    if (transactionResult?.success) {
      toast.success(transactionResult.message, { id: loading });
      modalHandler();
    } else {
      toast.error("Transaction failed", { id: loading });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(takeUserPhotoToggle());
  };

  return (
    <>
      <AuthModal authFunction={handleTransaction} />
      <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center">
        <div className=" gap-3 flex flex-col">
          <button onClick={modalHandler} className="place-self-end">
            <IoCloseSharp size={"3.5rem"} />
          </button>

          <div className="min-h-[40rem] min-w-[60rem] bg-gray-100 border-transparent rounded-[5rem] shadow-2xl flex flex-col items-center">
            <div>
              <h2 className="text-3xl font-semibold pt-10">{heading}</h2>
            </div>

            <div className="bg h-24 w-24 rounded-full bg-amber-400 flex items-center justify-center mt-10 mb-6">
              <div>
                <button className=" ">
                  {logo === 1 ? (
                    <GiReceiveMoney size={"4rem"} />
                  ) : logo === 2 ? (
                    <GiTakeMyMoney size={"4rem"} />
                  ) : logo === 3 ? (
                    <FaMoneyBill1Wave size={"4rem"} />
                  ) : (
                    <FaMoneyBillTrendUp size={"4rem"} />
                  )}
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="pt-5">
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="p-3 rounded-xl border-transparent shadow-md"
                />
              </div>

              {!receiverNotNeededTransactions.includes(heading) && (
                <div className="pt-5">
                  <input
                    type="text"
                    value={transUser}
                    onChange={(e) => setTransUser(e.target.value)}
                    placeholder="Enter receiver userid"
                    className="p-3 rounded-xl border-transparent shadow-md"
                  />
                </div>
              )}

              <div className="pt-5 flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-400 hover:bg-blue-600 hover:text-white px-8 p-3 rounded-xl shadow-md text-xl"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
