/* eslint-disable react/prop-types */
import { GiReceiveMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const MinCard = ({ text, cardNo }) => {
  return (
    <div
      // onClick={modalHandler}
      className="p-5 cursor-pointer rounded-xl border-transparent shadow-md m-3"
    >
      <div className="flex justify-center">
        <div>
          {cardNo === 1 ? (
            <div className="bg-green-500 h-14 w-14 rounded-full flex items-center justify-center">
              <GiReceiveMoney size={"36px"} />
            </div>
          ) : cardNo === 2 ? (
            <div className="bg-red-500 h-14 w-14 rounded-full flex items-center justify-center">
              <GiTakeMyMoney size={"36px"} />
            </div>
          ) : cardNo === 3 ? (
            <div className="bg-blue-500 h-14 w-14 rounded-full flex items-center justify-center">
              <FaMoneyBill1Wave size={"36px"} />
            </div>
          ) : (
            <div className="bg-yellow-500 h-14 w-14 rounded-full flex items-center justify-center">
              <FaMoneyBillTrendUp size={"36px"} />
            </div>
          )}
        </div>
      </div>

      <div className="pt-4 flex justify-center">
        <div className="text-xl font-semibold">{text}</div>
      </div>
    </div>
  );
};

export default MinCard;
