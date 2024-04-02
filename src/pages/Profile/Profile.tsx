import React from "react";
import "./Profile.css";
import ProfileImageSection from "./components/ProfileImageSection";
import ProfileModal from "./components/ProfileModal";
import { CgProfile } from "react-icons/cg";
import ProfileDesc from "./components/ProfileDesc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const { userData } = useSelector((state) => state.user);
  const { accountNumber, fullName, email, photoUrl } = userData;

  const handleEdit = () => {
    setEdit(!edit);
  };

  const navigate = useNavigate();
  return (
    <div className="container mx-auto text-gray-700">
      <div className="flex items-center justify-between pt-10 px-5">
        <div
          className="cursor-pointer hover:text-gray-500"
          onClick={() => {
            navigate("/");
          }}
        >
          <p className="text-3xl font-semibold pl-3">Moneyfy</p>
        </div>

        <div className="flex items-center">
          <div>
            <CgProfile size={"3rem"} />
          </div>
          <div>
            <p className="text-3xl font-semibold pl-3">profile</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 border-transparent mt-10 px-8 pt-14 pb-20 bg-gray-100 rounded-[4rem] shadow-xl">
        <div className="flex items-center justify-center">
          <div className="">
            <ProfileImageSection
              profileImage={photoUrl}
              handleEdit={handleEdit}
            />
          </div>
        </div>

        <div className="col-span-2">
          <ProfileDesc
            name={fullName}
            mail={email}
            contact={accountNumber}
            address={"New York, USA"}
          />
        </div>
      </div>

      <div>{edit && <ProfileModal handleEdit={handleEdit} />}</div>
    </div>
  );
};

export default Profile;
