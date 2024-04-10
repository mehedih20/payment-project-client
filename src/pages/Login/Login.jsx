import { useState } from "react";
import { useLoginMutation } from "../../redux/features/user/userApi";
import Loading from "../../components/ui/Loading";
import { useDispatch } from "react-redux";
import {
  setUser,
  takeUserPhotoToggle,
} from "../../redux/features/user/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import AuthModal from "../../components/ui/AuthModal/AuthModal";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [tempUser, setTempUser] = useState(null);

  const handleUser = async () => {
    const { userData, token } = tempUser;
    dispatch(setUser({ user: userData, token }));
    dispatch(takeUserPhotoToggle());
    navigate(from);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      username,
      password,
    };

    const result = await login(loginData).unwrap();
    if (result?.success) {
      setTempUser(result.result);
      dispatch(takeUserPhotoToggle());
    }
  };

  return (
    <>
      <AuthModal
        authFunction={handleUser}
        env="logging"
        photoUrl={tempUser?.userData?.photoUrl}
      />
      <div className="container mx-auto flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="w-96 p-4 pb-20">
          <h2 className="font-bold text-4xl text-blue-700 text-center">
            Login
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    name="username"
                    id="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="eg. janesmith"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900  focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="********"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="submit"
              className="flex rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading && <Loading />}
              Submit
            </button>
          </div>
          <div className="border-t pt-5 mt-6 flex items-center justify-center gap-x-6">
            <p>Not yet registered?</p>
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="flex rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
