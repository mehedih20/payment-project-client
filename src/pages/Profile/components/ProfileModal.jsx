import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const ProfileModal = ({ handleEdit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  const postProfile = async () => {
    const response = await fetch("http://localhost:3001/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        contact: contact,
        address: address,
      }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center">
      <div className=" gap-3 flex flex-col">
        <button onClick={handleEdit} className="place-self-end">
          <IoCloseSharp size={"3.5rem"} />
        </button>

        <div className="min-h-[40rem] min-w-[60rem] bg-gray-100 border-transparent rounded-[5rem] shadow-2xl flex flex-col items-center">
          <div className="pb-10">
            <h2 className="text-3xl font-semibold pt-10">Edit Profile Info</h2>
          </div>

          <form action="post">
            <div className="pb-7">
              <input
                onChange={(e) => setName(e.target.value)}
                className="p-3 w-[25rem] rounded-xl border-transparent shadow-md"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              ></input>
            </div>

            <div className="pb-7">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 w-[25rem] rounded-xl border-transparent shadow-md"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              ></input>
            </div>
            <div className="pb-7">
              <input
                onChange={(e) => setContact(e.target.value)}
                className="p-3 w-[25rem]  rounded-xl border-transparent shadow-md"
                type="text"
                name="contact"
                id="contact"
                placeholder="contact"
              ></input>
            </div>
            <div>
              <input
                onChange={(e) => setAddress(e.target.value)}
                className="p-3 w-[25rem] rounded-xl border-transparent shadow-md"
                type="text"
                name="address"
                id="address"
                placeholder="address"
              ></input>
            </div>

            <div className="pt-10 ml-32">
              <button
                onClick={postProfile}
                className="bg-blue-400 hover:bg-blue-600 hover:text-white px-8 p-3 rounded-xl shadow-md text-xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
