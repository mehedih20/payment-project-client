const TransactionData = ({ receiver, type, date, amount }) => {
  let typeColor = "";
  if (type === "add-money") {
    typeColor = "text-green-500";
  } else if (type === "send-money") {
    typeColor = "text-red-500";
  } else if (type === "make-payment") {
    typeColor = "text-blue-500";
  } else {
    typeColor = "text-yellow-500";
  }

  return (
    <div className="grid grid-cols-4 pl-16 pt-4 border-b-2">
      <div>
        <p className="text-black text-lg text-left pb-2">{receiver}</p>
      </div>
      <div>
        <p className={`${typeColor} text-gray-400 text-lg text-left pb-2 pl-2`}>
          {type}
        </p>
      </div>
      <div>
        <p className="text-gray-400 text-lg pb-2">{date}</p>
      </div>
      <div>
        <p className="text-black text-lg pb-2 pl-10">{amount}</p>
      </div>
    </div>
  );
};

export default TransactionData;
