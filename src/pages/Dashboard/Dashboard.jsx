import "./Dashboard.css"
import Card from "./components/Card";
import MainCard from "./components/MainCard";
import { Modal } from "./components/Modal";
import Navbar from "./components/Navbar";
import TransactionHistory from "./components/TransactionHistory";
import { useState } from "react";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [heading, setHeading] = useState("");
  const [logo, setLogo] = useState("");

  const modalHandler = () => {
    setModal(!modal);
  };

  return (
    <div className="container mx-auto grid grid-cols-2 grid-rows-7 px-7 pt-6 pb-10 min-h-screen">
      <div className="col-span-2 row-span-1">
        <Navbar />
      </div>

      <div className="col-span-2 row-span-3">
        <MainCard />
      </div>

      <div className="row-span-3">
        <TransactionHistory />
      </div>

      <div className="row-span-3">
        <Card
          modalHandler={modalHandler}
          setHeading={setHeading}
          setLogo={setLogo}
        />
      </div>

      <div>
        {modal && (
          <Modal heading={heading} logo={logo} modalHandler={modalHandler} />
        )}
      </div>
    </div>
  );
};

export default Dashboard