import React from "react";
import { Link } from "react-router-dom";
import { VictoryPie } from "victory";
import { FaUser, FaUserCheck } from "react-icons/fa";

export const DropdownContainer = ({ children, extraStyles = "" }) => {
  return (
    <div
      className={`absolute min-w-max top-[120%] right-0 border border-[#BBBBBB] bg-white/60 dropdownBackdrop shadow-sm px-2 rounded-md z-[1] ${extraStyles}`}
    >
      {children}
    </div>
  );
};

export const SmDashboardCard = ({ icon, colors, title, numbers }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-xs bg-white p-4 rounded-2xl">
      <Icon {...{ icon, colors, extraStyles: "mb-2" }} />
      <h4 className="mb-1 text-[10px]">{title}</h4>
      <span className="font-bold text-[16px]">{numbers}</span>
    </div>
  );
};

export const LgDashboardCard = ({ totalUsers, verifiedUsers }) => {
  return (
    <div className="flex flex-col justify-between col-span-2 xs:col-span-3 sm:col-span-2 row-span-2 text-center text-xs bg-white p-4 rounded-2xl">
      <h4 className="font-semibold self-start">Users</h4>

      <svg className="mx-auto" width={150} height={150}>
        <circle cx={150} cy={150} r={50} fill="#fff" />
        <VictoryPie
          standalone={false}
          width={150}
          height={150}
          labelRadius={65}
          innerRadius={55}
          data={[
            { x: "20%", y: 20 },
            { x: "80%", y: 80 },
          ]}
          colorScale={["#F9D8DA", "#E14146"]}
          style={{
            labels: {
              fontFamily: "Poppins",
              fontWeight: "medium",
              fontSize: 12,
            },
          }}
        />
      </svg>

      <div className="flex justify-around">
        <div className="flex items-start">
          <Icon
            colors="bg-[#E14146] text-white"
            icon={<FaUser />}
            extraStyles="!rounded-full !p-1 mr-2 !text-[10px]"
          />

          <div className="flex flex-col text-[10px] text-left">
            Total Users
            <span className="text-xs font-semibold">{totalUsers}</span>
          </div>
        </div>
        <div className="flex items-start">
          <Icon
            colors="bg-[#F8D8DA] text-[#E14146]"
            icon={<FaUserCheck />}
            extraStyles="!rounded-full !p-1 mr-2 !text-[10px]"
          />

          <div className="flex flex-col text-[10px] text-left">
            Verified Users
            <span className="text-xs font-semibold">{verifiedUsers}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Icon = ({ icon, colors, extraStyles }) => {
  return (
    <div className={`${colors} p-2 rounded-[10px] ${extraStyles}`}>{icon}</div>
  );
};

export const RequestsList = ({ title, icon, iconColors, link, requests }) => {
  return (
    <div className="col-span-2 xs:col-span-3 sm:col-span-2">
      <div className="rounded-[16px] bg-white overflow-hidden">
        <div className="flex justify-between items-center py-3 px-5 border-b border-[#E7E7E7]">
          <div className="flex items-center text-xs">
            <Icon icon={icon} colors={iconColors} />
            <h4 className="text-xs font-medium ml-3 text-[#7C7976]">{title}</h4>
          </div>
          <Link
            to={link}
            className="text-[10px] font-semibold text-[#7CA3FB] hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="overflow-y-auto max-h-[400px]">
          {requests.map((cardData, idx) => (
            <RequestCard
              key={cardData.name + idx}
              {...cardData}
              extraStyles={
                idx !== requests.length - 1 ? "border-b border-[#e7e7e7]" : ""
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const RequestCard = ({
  name,
  photoUrl,
  KSN,
  email,
  details,
  extraStyles = "",
}) => {
  return (
    <div className={`flex flex-col px-5 pt-3 pb-2 ${extraStyles}`}>
      <div className="flex items-center">
        <div className="flex justify-center items-center w-8 h-8 border border-[#E4E4E4] rounded-full overflow-hidden mr-2">
          {photoUrl ? <img src={photoUrl} alt="profile pic" /> : <FaUser />}
        </div>

        <div className="flex flex-col">
          <h5 className="font-semibold text-sm">{name}</h5>

          <div className="text-[6px]">
            KSN: <b>{KSN} &nbsp; |</b> &nbsp; Email: <b>{email}</b>
          </div>
        </div>
      </div>
      <div className="ml-10 mt-2 text-[8px]">
        {details.map(({ title, value }) => (
          <>
            <span className="mb-2 font-medium">
              {title}: &nbsp; <b>{value}</b>
            </span>
            <br />
          </>
        ))}
      </div>
    </div>
  );
};
