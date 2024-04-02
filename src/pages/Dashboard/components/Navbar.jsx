import { RiUser3Fill } from "react-icons/ri";
import NavPopup from "./ NavPopup";
import { useState } from "react";

const Navbar = () => {
  const [pop, setPop] = useState(false);

  const popHandler = () => {
    setPop(!pop);
  };

  return (
    <div className="relative px-5">
      <div className="flex items-center justify-between ">
        <div>
          <h1 className="text-3xl font-bold">Moneyfy</h1>
        </div>

        <div className="flex items-center">
          <div className="text-xl font-semibold mr-3">Manage</div>

          <div className="bg h-14 w-14 rounded-full bg-amber-400 flex items-center justify-center mr-3">
            <div>
              <button onClick={popHandler}>
                <RiUser3Fill size={"36px"} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[85rem]">{pop && <NavPopup />}</div>
    </div>
  );
};

export default Navbar;
