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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 mt-4">
            <p className="font-semibold text-base">Dependant A</p>
            {dependantA.map((elem, indx) => (
              <Feild
                key={elem + indx}
                {...{ edit, elem, value: userData[elem] }}
              />
            ))}

            <p className="font-semibold text-base">Dependant B</p>
            {dependantB.map((elem, indx) => (
              <Feild key={elem + indx} {...{ edit, elem, value: elem }} />
            ))}
          </div>

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
    <div className="mb-6">
      <label
        htmlFor={elem}
        className="block mb-2 text-[13px] font-medium text-gray-900 dark:text-white"
      >
        {elem}
      </label>
      <input
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        type={type ? type : feildType}
        id={elem}
        name={elem}
        value={value}
        disabled={!edit}
      />
    </div>
  );
};

export default UserDetails;
