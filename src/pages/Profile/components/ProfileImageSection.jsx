import { MdEdit } from "react-icons/md";

const ProfileImageSection = ({ ProfileImage, handleEdit }) => {
  return (
    <div className="pt-20 pr-14 border-r-4 relative">
      <div>
        <img
          src={ProfileImage}
          alt="profile"
          className="rounded-full w-[18rem] h-[18rem] border-8 border-gray-300 shadow-lg "
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
