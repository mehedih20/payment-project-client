import creditCard from "../../../assets/credit-card.svg";

const MainCard = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 shadow-2xl border-transparent rounded-[6rem] py-6">
      <div className="text-xl font-semibold">Cards</div>

      <div className="flex justify-center">
        <div className="p-7 pr-16 border-r-2">
          <img src={creditCard} alt="credit-card" className="w-[30rem]" />
        </div>

        <div className="pl-16 pt-8">
          <div className="pb-6">
            <h1 className=" text-blue-400 text-right">
              <span className="text-xl font-semibold mr-2">$</span>{" "}
              <span className="text-3xl font-semibold">2850.75</span>
            </h1>

            <p className="text-gray-400 text-right">Current balance</p>
          </div>

          <div className="pb-6">
            <h1 className=" text-teal-600 text-right">
              <span className="text-xl font-semibold mr-2">$</span>{" "}
              <span className="text-3xl font-semibold">1500.50</span>
            </h1>

            <p className="text-gray-400 text-right">Income</p>
          </div>

          <div className="">
            <h1 className=" text-red-600 text-right">
              <span className="text-xl font-semibold mr-2">$</span>{" "}
              <span className="text-3xl font-semibold ">350.60</span>
            </h1>

            <p className="text-gray-400 text-right">Outcome</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
