import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { users } from "../constants/data";
import { AiFillEdit } from "react-icons/ai";

const UserDetails = () => {
  const { id } = useParams();
  const userData = users.find((e) => e.id == id);
  const keys = Object.keys(userData).filter(
    (e) => e !== "moreDetails" && e !== "id"
  );
  const dependantA = Object.keys(userData.moreDetails["Dependant A"]);
  const dependantB = Object.keys(userData.moreDetails["Dependant B"]);
  const locationHistory = Object.keys(userData.moreDetails["Location History"]);

  const [edit, setEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setEdit(!edit);
  };

  return (
    <div className="font-poppins p-3 pt-12 md:pt-9 md:px-5">
      <header className="flex justify-between">
        <h1 className="font-semibold text-xl text-[#44403C]">Users Details</h1>
        {!edit && (
          <button
            onClick={() => setEdit(!edit)}
            className="flex text-white bg-[#DE4347] hover:bg-[#c92b30] focus:ring-4 focus:outline-none focus:ring-[#ffb3b5] font-semibold rounded-lg text-xs px-4 py-1.5 ml-2 text-center dark:bg-[#DE4347] dark:hover:bg-[#c4282d] dark:focus:ring-[#ff666b]"
          >
            <AiFillEdit className="text-sm mr-1.5" />
            Edit
          </button>
        )}
      </header>
      <main>
        <form onSubmit={handleSubmit} className="pt-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 ">
            {keys.map((elem, indx) => (
              <Feild
                key={elem + indx}
                {...{ edit, elem, value: userData[elem] }}
              />
            ))}
          </div>

          {/* Dependants */}
          <Dependant
            {...{ title: "Dependant A", edit, arr: dependantA, userData }}
          />
          <Dependant
            {...{ title: "Dependant B", edit, arr: dependantB, userData }}
          />

          {/* Medications */}
          <Medications {...{ edit, userData }} />

          {/* Location History */}
          <LocationHistory {...{ arr: locationHistory, edit, userData }} />

          {/* Kaci Code */}
          <KaciCode {...{ edit, userData }} />

          {edit && (
            <button
              type="submit"
              className="flex text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-[#ffb3b5] font-semibold rounded-lg text-xs px-4 py-1.5 ml-2 text-center dark:bg-[#DE4347] dark:hover:bg-[#c4282d] dark:focus:ring-[#ff666b]"
            >
              Save All
            </button>
          )}
        </form>
      </main>
    </div>
  );
};

const Feild = ({ edit, elem, value, type }) => {
  const feildType = elem.includes("Email")
    ? "email"
    : elem.includes("Phone")
    ? "tel"
    : elem.includes("Date")
    ? "date"
    : elem.includes("Password")
    ? "password"
    : elem.includes("Blood Group")
    ? "text"
    : typeof value === "number"
    ? "number"
    : "text";

  return (
    <div className={edit ? "mb-6" : "mb-6 p-3 bg-gray-200 rounded-md"}>
      <label className="block text-[13px] font-medium text-gray-900 dark:text-white">
        {elem}
        <input
          className={`${
            edit
              ? "bg-gray-50 border border-gray-300 p-2.5"
              : "font-semibold !bg-transparent"
          } mt-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          type={type ? type : feildType}
          name={elem}
          value={value}
          disabled={!edit}
        />
      </label>
    </div>
  );
};

const Dependant = ({ arr, edit, title, userData }) => {
  return (
    <>
      <p className="mt-4 font-semibold text-base">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 mt-2">
        {arr.map((elem, indx) => (
          <Feild
            key={elem + indx}
            {...{ edit, elem, value: userData.moreDetails[title][elem] }}
          />
        ))}
      </div>
    </>
  );
};

const Medications = ({ edit, userData }) => {
  const Medications = userData.moreDetails.Medications;
  const medicationA = Object.keys(userData.moreDetails.Medications.A);
  const medicationB = Object.keys(userData.moreDetails.Medications.B);
  const medicationC = Object.keys(userData.moreDetails.Medications.C);
  const medicationD = Object.keys(userData.moreDetails.Medications.D);

  return (
    <>
      <p className="mt-4 font-semibold text-base">Medications</p>

      {/* Medication A */}
      <p className="font-semibold text-base">A</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 mt-2">
        {medicationA.map((elem, indx) => (
          <Feild
            key={elem + indx}
            {...{ edit, elem, value: Medications.A[elem] }}
          />
        ))}
      </div>

      {/* Medication B */}
      <p className="font-semibold text-base">B</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 mt-2">
        {medicationB.map((elem, indx) => (
          <Feild
            key={elem + indx}
            {...{ edit, elem, value: Medications.B[elem] }}
          />
        ))}
      </div>

      {/* Medication C */}
      <p className="font-semibold text-base">C</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 mt-2">
        {medicationC.map((elem, indx) => (
          <Feild
            key={elem + indx}
            {...{ edit, elem, value: Medications.C[elem] }}
          />
        ))}
      </div>

      {/* Medication D */}
      <p className="font-semibold text-base">D</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 mt-2">
        {medicationD.map((elem, indx) => (
          <Feild
            key={elem + indx}
            {...{ edit, elem, value: Medications.D[elem] }}
          />
        ))}
      </div>
    </>
  );
};

const LocationHistory = ({ arr, edit, userData }) => {
  return (
    <>
      <p className="font-semibold text-base">Location History</p>
      {arr.map((elem, indx) => {
        const data = userData.moreDetails["Location History"][elem];
        return (
          <>
            <p key={elem} className="font-[600] text-gray-600 text-sm mt-3">
              {elem}
            </p>
            <div
              key={elem + indx}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 mt-1"
            >
              <Feild {...{ edit, elem: "Date", value: data.Date }} />
              <Feild {...{ edit, elem: "Location", value: data.Location }} />
            </div>
          </>
        );
      })}
    </>
  );
};

const KaciCode = ({ edit, userData }) => {
  const data = userData.moreDetails["Kaci Code"];

  return (
    <>
      <p className="font-semibold text-base">Kaci Code</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 mt-1">
        <Feild {...{ edit, elem: "Amount", value: data.amount }} />
        <Feild {...{ edit, elem: "Expiry Date", value: data.expiryDate }} />
      </div>
    </>
  );
};

export default UserDetails;
