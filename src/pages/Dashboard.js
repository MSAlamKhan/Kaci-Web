import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../store/slices/userSlice";
import { BsBellFill } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi";
import CountrySelector from "../components/CountrySelector";
import { FaAmbulance, FaUser, FaUserEdit, FaUserLock } from "react-icons/fa";
import {
  DropdownContainer,
  LgDashboardCard,
  RequestsList,
  SmDashboardCard,
} from "../components/helpers";
import {
  ambulanceRequests,
  dashboardCards,
  emergencyRequests,
  notifications,
} from "../_mock/dashboard";
import { BiLogOut } from "react-icons/bi";
import { theme, usersBreakdown } from "../constants/data";
import { MdSos } from "react-icons/md";

const Dashboard = () => {
  return (
    <main className="w-full font-poppins bg-[#F2F2F2] pt-9 p-3 md:px-5">
      {/* Header */}
      <header className="flex flex-col xs:flex-row justify-between">
        <h1 className="font-semibold text-xl text-[#44403C] ">Dashboard</h1>
        <div className="flex self-end items-center mt-2 xs:m-0">
          <CountrySelector />
          <Notifications />
          <Account />
        </div>
      </header>

      {/* Dashboard Cards */}
      <section className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-3 mt-3">
        {/* Users Breakdown Card */}
        <LgDashboardCard
          {...{
            totalUsers: usersBreakdown[0].value,
            verifiedUsers: usersBreakdown[1].value,
          }}
        />

        {/* other cards */}
        {dashboardCards.map((card, idx) => (
          <SmDashboardCard key={card.title + idx} {...card} />
        ))}
      </section>

      {/* Emergency && Ambulance Request Lists */}
      <section className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-3 mt-3">
        <RequestsList
          title="Emergency Requests"
          icon={
            <div className="text-[8px] rounded-full p-0.5 text-white bg-red-600">
              <MdSos />
            </div>
          }
          iconColors={theme.red}
          link="/dashboard"
          requests={emergencyRequests}
        />
        <RequestsList
          title="Ambulance Requests"
          icon={<FaAmbulance />}
          iconColors={theme.blue}
          link="/dashboard"
          requests={ambulanceRequests}
        />
      </section>
    </main>
  );
};

const Notifications = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <button
      onClick={() => setToggle(!toggle)}
      className="relative bg-[#EFCED0] text-[#E14146] p-2 rounded-[10px] ml-5"
    >
      <BsBellFill className="text-xs" />

      {toggle && (
        <DropdownContainer>
          {notifications.map((data, idx) => (
            <div
              key={data.title + idx}
              className={`group flex p-1 items-center ${
                idx !== data.length ? "border-b border-[#F2F2F2]" : ""
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
    <button
      onClick={() => setToggle(!toggle)}
      className="relative flex items-center bg-[#F7F7F7] ml-5 p-1 px-2 rounded-[6px] cursor-pointer"
    >
      <span className="relative text-[9px] font-semibold pb-2 mr-1.5">
        Your Name
        <span className="absolute bottom-0 left-0 text-[7px] font-semibold">
          Admin
        </span>
      </span>
      <div className="flex items-center justify-center w-5 h-5 p-1 mx-1.5 rounded-full border border-gray-400 overflow-hidden">
        <FaUser />
      </div>
      <HiChevronDown className={`${toggle ? "rotate-180" : ""}`} />

      {toggle && (
        <DropdownContainer>
          <div
            className={`group flex p-1 items-center border-b border-[#F2F2F2] text-[#8F8D8D]`}
          >
            <div className={`p-1.5 text-[16px] rounded-full`}>
              <FaUserLock />
            </div>
            <span className="ml-2 text-[10px] group-hover:text-black">
              Change password
            </span>
          </div>
          <div
            className={`group flex p-1 items-center border-b border-[#F2F2F2] text-[#8F8D8D]`}
          >
            <div className={`p-1.5 text-[16px] rounded-full`}>
              <FaUserEdit />
            </div>
            <span className="ml-2 text-[10px] group-hover:text-black">
              Edit Profile
            </span>
          </div>
          <div
            onClick={() => dispatch(signOut())}
            className={`group flex p-1 items-center text-[#E14146]`}
          >
            <div className={`p-1.5 text-[16px] rounded-full`}>
              <BiLogOut className=" rotate-[360deg]" />
            </div>
            <span className="ml-3 text-[10px]">Log out</span>
          </div>
        </DropdownContainer>
      )}
    </button>
  );
};

export default Dashboard;
