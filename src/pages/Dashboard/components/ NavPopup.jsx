import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/features/user/userSlice";

const NavPopup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-100 py-3 px-5 border-transparent rounded-3xl shadow-2xl mt-2">
      <div className="flex flex-col items-center">
        <div>
          <button
            onClick={() => {
              navigate("/profile");
            }}
            className="bg-blue-400 hover:bg-blue-600 hover:text-white py-2 px-3 rounded-xl shadow-md mb-2"
          >
            profile
          </button>
        </div>

        <div>
          <button
            onClick={() => dispatch(logout())}
            className="bg-blue-400 hover:bg-blue-600 hover:text-white py-2 px-3  rounded-xl shadow-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavPopup;
