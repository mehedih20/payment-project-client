/* eslint-disable react/prop-types */
import { MdEdit } from "react-icons/md";

const ProfileImageSection = ({ profileImage, handleEdit }) => {
  return (
    <div className="pt-20 pr-14 border-r-4 relative">
      <div>
        <img
          src={profileImage}
          alt="profile"
          className="rounded-full w-[18rem] h-[18rem] border-8 border-gray-300 shadow-lg p-5"
        />
      </div>

      <div
        onClick={handleEdit}
        className="absolute top-[20rem] left-[16rem] cursor-pointer"
      >
        <MdEdit className="text-[3rem] text-gray-500" />
      </div>
    </div>
  );
};

export default ProfileImageSection;
