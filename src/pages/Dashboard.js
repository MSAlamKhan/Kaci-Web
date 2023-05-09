import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../store/slices/userSlice";
import { BsBellFill } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi";
import CountrySelector from "../components/CountrySelector";
import { FaUser, FaUserEdit, FaUserLock } from "react-icons/fa";
import { DropdownContainer } from "../components/helpers";
import { notifications } from "../_mock/dashboard";
import { BiLogOut } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className="w-full font-poppins">
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl text-[#44403C]">Dashboard</h1>

        <div className="flex items-center">
          <CountrySelector />
          <Notifications />
          <Account />
        </div>
      </div>
    </div>
  );
};

const Notifications = () => {
  const theme = {
    red: "text-red-600 bg-red-600/10",
    yellow: "text-yellow-600 bg-yellow-600/10",
    purple: "text-purple-600 bg-purple-600/10",
    green: "text-green-600 bg-green-600/10",
  };

  const [toggle, setToggle] = useState(false);

  return (
    <button
      onClick={() => setToggle(!toggle)}
      className="relative bg-[#EFCED0] text-[#E14146] p-2 rounded-xl ml-5"
    >
      <BsBellFill />

      {toggle && (
        <DropdownContainer>
          {notifications.map((data, idx) => (
            <div
              className={`group flex p-1 items-center ${
                idx !== data.length ? "border-b" : ""
              }`}
            >
              <div
                className={`p-1.5 text-[10px] ${
                  theme[data.theme]
                } rounded-full`}
              >
                {data.icon}
              </div>
              <span className="ml-3 text-[10px] text-[#8F8D8D] group-hover:text-black">
                {data.title}
              </span>
            </div>
          ))}
        </DropdownContainer>
      )}
    </button>
  );
};

const Account = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className="relative flex items-center bg-[#F7F7F7] ml-5 p-1 px-2 rounded-[6px] cursor-pointer"
    >
      <div className="flex flex-col justify-center text-xs mr-1.5">
        <span className="text-[10px] font-semibold">Your Name</span>
        <span className="text-[8px] font-medium">Admin</span>
      </div>
      <div className="flex items-center justify-center w-4 h-4 p-1 mx-1.5 rounded-full border border-gray-400 overflow-hidden">
        <FaUser />
      </div>
      <HiChevronDown />

      {toggle && (
        <DropdownContainer>
          <div
            className={`group flex p-1 items-center border-b text-[#8F8D8D]`}
          >
            <div className={`p-1.5 text-[16px] rounded-full`}>
              <FaUserLock />
            </div>
            <span className="ml-2 text-[10px] group-hover:text-black">
              Change password
            </span>
          </div>
          <div
            className={`group flex p-1 items-center border-b text-[#8F8D8D]`}
          >
            <div className={`p-1.5 text-[16px] rounded-full`}>
              <FaUserEdit />
            </div>
            <span className="ml-2 text-[10px] group-hover:text-black">
              Edit Profile
            </span>
          </div>
          <div className={`group flex p-1 items-center text-[#E14146]`}>
            <div className={`p-1.5 text-[16px] rounded-full`}>
              <BiLogOut className=" rotate-[360deg]" />
            </div>
            <span
              onClick={() => dispatch(signOut())}
              className="ml-3 text-[10px]"
            >
              Log out
            </span>
          </div>
        </DropdownContainer>
      )}
    </div>
  );
};

export default Dashboard;
