import React, { useEffect, useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { MdBlock, MdDelete } from "react-icons/md";
import { VscClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { CgUnblock } from "react-icons/cg";
import { FaChevronUp } from "react-icons/fa";
import { DropdownContainer } from "../helpers";
import CountrySelector from "../CountrySelector";
import { locations } from "../../constants/data";

const UsersTable = ({ data }) => {
  const tableStructure = Object.keys(data[0]);
  const [users, setUsers] = useState([]);
  const [curFilter, setCurFilter] = useState({
    filter: "Country",
    value: "Nigeria",
  });
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [addUser, setAddUser] = useState({ isVisible: false, data: {} });
  const [searchInput, setSearchInput] = useState("");

  const filterUsersBySearch = (e) => {
    const value = e.target.value.trim();
    setSearchInput(value);

    if (value === "") {
      setFilteredUsers([]);
    } else if (value) {
      console.log(users);
      setFilteredUsers(
        users?.filter(
          (user) =>
            user.fullName.includes(value) ||
            user["Email Address"].includes(value)
        )
      );
    }
  };

  const handleCheckChange = (e) => {
    e.target.checked
      ? setSelectedUsers(
          filteredUsers.length
            ? filteredUsers.map((user) => user.id)
            : users.map((user) => user.id)
        )
      : setSelectedUsers([]);
  };

  useEffect(() => {
    // fetch data
    setUsers(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) => user[curFilter.filter] === curFilter.value)
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curFilter]);

  return (
    <>
      <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
        {/* Search bar start */}
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BiSearch />
          </div>
          <input
            type="text"
            id="table-search-users"
            value={searchInput}
            onChange={filterUsersBySearch}
            className="block p-2 pl-10 text-xs text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
          />
        </div>
        {/* Search bar end */}
        {/* Dropdown Filters Start */}
        <div className="flex">
          <CountrySelector
            handleClick={(data) =>
              setCurFilter({ filter: "Country", value: data.title })
            }
          />

          <DropdownFilter
            arr={locations}
            title={"Location"}
            handleClick={(elem) =>
              setCurFilter({ filter: "Location", value: elem })
            }
          />

          <DropdownFilter
            arr={["Verified", "Unverified"]}
            title={"Status"}
            handleClick={(elem) =>
              setCurFilter({ filter: "Status", value: elem })
            }
          />
          <button
            onClick={() => setAddUser((prev) => ({ ...prev, isVisible: true }))}
            className="text-white bg-[#DE4347] hover:bg-[#c92b30] focus:ring-4 focus:outline-none focus:ring-[#ffb3b5] font-semibold rounded-lg text-xs px-4 py-1.5 ml-2 text-center dark:bg-[#DE4347] dark:hover:bg-[#c4282d] dark:focus:ring-[#ff666b]"
          >
            Add User
          </button>
        </div>
        {/* Dropdown Filters End */}
      </div>
      <span className="text-xs font-medium text-gray-700">
        {filteredUsers.length ? filteredUsers.length : users.length} results
      </span>
      <div className="relative overflow-x-auto rounded-lg mx-auto md:max-w-lg lg:max-w-[725px] xl:max-w-5xl">
        <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    onChange={handleCheckChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              {tableStructure.map(
                (key) =>
                  key !== "id" &&
                  key !== "moreDetails" && (
                    <th scope="col" className="px-6 py-3">
                      {key}
                    </th>
                  )
              )}
              <th scope="col" className="px-6 py-3">
                Details
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
              <th scope="col" className="px-6 py-3">
                Block
              </th>
            </tr>
          </thead>
          <tbody className="text-xs">
            <Users
              {...{
                tableStructure,
                arr: filteredUsers.length ? filteredUsers : users,
                selectedUsers,
                setSelectedUsers,
                filteredUsers,
                setFilteredUsers,
                setUsers,
              }}
            />
          </tbody>
        </table>
        {/* Edit user modal */}
        {addUser.isVisible && <AddUserModal {...{ addUser, setAddUser }} />}
      </div>
    </>
  );
};

const Users = ({
  tableStructure,
  arr,
  selectedUsers,
  setSelectedUsers,
  filteredUsers,
  setFilteredUsers,
  setUsers,
}) => {
  return arr.map((user) => (
    <SingleUser
      key={user.fullName + user.id}
      {...{
        tableStructure,
        data: user,
        id: user.id,
        selectedUsers,
        setSelectedUsers,
        filteredUsers,
        setFilteredUsers,
        setUsers,
      }}
    />
  ));
};

const SingleUser = ({
  tableStructure,
  data,
  id,
  selectedUsers,
  setSelectedUsers,
  filteredUsers,
  setFilteredUsers,
  setUsers,
}) => {
  const navigate = useNavigate();
  const [blockUser, setBlockUser] = useState(false);

  const remove = () => {
    if (filteredUsers.length) {
      setUsers((prev) => prev.filter((user) => user.id !== id));
      setFilteredUsers((prev) => prev.filter((user) => user.id !== id));
    } else {
      setUsers((prev) => prev.filter((user) => user.id !== id));
    }
  };

  const redirect = () => navigate("/user-management/user-details/" + id);

  const handleCheckChange = (e) => {
    selectedUsers.includes(id)
      ? setSelectedUsers((prev) => prev.filter((e) => e !== id))
      : setSelectedUsers((prev) => [...prev, id]);
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id={"checkbox-table-search-" + id}
            type="checkbox"
            checked={selectedUsers.includes(id)}
            onChange={handleCheckChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
          />
          <label htmlFor={"checkbox-table-search-" + id} className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      {tableStructure.map(
        (key) =>
          key !== "id" &&
          key !== "moreDetails" && (
            <td key={key + id} className="px-6 py-4 text-center">
              {data[key]}
            </td>
          )
      )}
      <td className="text-center text-base px-6 py-4">
        <button
          onClick={redirect}
          className="font-medium text-gray-600 dark:text-gray-500"
        >
          <BsBoxArrowUpRight />
        </button>
      </td>
      <td className="text-center text-base px-6 py-4">
        <button
          onClick={remove}
          className="font-medium text-gray-600 dark:text-gray-500"
        >
          <MdDelete />
        </button>
      </td>
      <td className="text-center text-base px-6 py-4">
        <button
          onClick={() => setBlockUser(!blockUser)}
          className="font-medium text-red-600 dark:text-red-500"
          title={blockUser ? "Unblock user" : "Block user"}
        >
          {blockUser ? <CgUnblock /> : <MdBlock />}
        </button>
      </td>
    </tr>
  );
};

const AddUserModal = ({ addUser, setAddUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setAddUser({
      isVisible: false,
      data: {},
    });
  };

  const close = () => setAddUser((prev) => ({ ...prev, isVisible: false }));

  return (
    <>
      <div
        className={`${
          addUser.isVisible ? "" : "hidden"
        } fixed inset-0 flex justify-center items-center z-20 bg-black/50`}
      />
      <div
        tabIndex="-1"
        className={`${
          addUser.isVisible ? "" : "hidden"
        } fixed z-20 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative w-full max-w-2xl max-h-full">
          {/* Modal content */}
          <form
            action="#"
            onSubmit={handleSubmit}
            className="relative bg-white rounded-lg shadow dark:bg-gray-700"
          >
            {/* Modal header */}
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add new user
              </h3>
              <button
                onClick={close}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-base p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="editUserModal"
              >
                <VscClose />
              </button>
            </div>
            {/* Modal body */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Bonnie"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Green"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="example@company.com"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="phone-number"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phone-number"
                    id="phone-number"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="e.g. +(12)3456 789"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="department"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                  >
                    Department
                  </label>
                  <input
                    type="text"
                    name="department"
                    id="department"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Development"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="company"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                  >
                    Company
                  </label>
                  <input
                    type="number"
                    name="company"
                    id="company"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="123456"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="current-password"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="current-password"
                    id="current-password"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="new-password"
                    className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    name="new-password"
                    id="new-password"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••"
                    required=""
                  />
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="submit"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Save all
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const DropdownFilter = ({ title, arr, handleClick }) => {
  const [state, setState] = useState(false);

  return (
    <button
      onClick={() => setState(!state)}
      className="relative flex items-center text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-[#dddddd] font-semibold rounded-lg text-xs px-4 py-1.5 ml-3 text-center dark:bg-[#DE4347] dark:hover:bg-[#c4282d] dark:focus:ring-[#ff666b]"
    >
      {title}
      <FaChevronUp className={`${state ? "" : "rotate-180"} ml-1`} />
      {state && (
        <DropdownContainer extraStyles="text-black font-medium text-xs text-left">
          {arr.map((elem, indx) => (
            <div
              key={elem + indx}
              onClick={() => handleClick(elem)}
              role="option"
              className={`${
                indx !== arr.length - 1 ? "border-b" : ""
              } p-1 hover:text-gray-600 cursor-pointer`}
            >
              {elem}
            </div>
          ))}
        </DropdownContainer>
      )}
    </button>
  );
};

export default UsersTable;
