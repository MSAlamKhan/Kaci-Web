import React, { useEffect, useState } from "react";
import AdvancedTable from "../components/Tables/AdvancedTable";
import { iReports } from "../constants/data";
import { Page } from "../components";
import Paginatation from "../components/Pagintation";
import CountryFilter from "../components/CountryFilter";
import { BiSearch } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { FaChevronUp, FaReplyAll } from "react-icons/fa";
import { DropdownContainer } from "../components/helpers";
import Image from "../components/Image-with-loader/Image";
import { AiFillFolderOpen } from "react-icons/ai";

const IReportManagement = () => {
  const initial_filters = {
    searchInput: "",
    toggleCountry: false,
    toggleStatus: false,
  };
  const [paginatedData, setPaginatedData] = useState({
    items: [],
    curItems: [],
  });
  const [curFilter, setCurFilter] = useState({
    filter: null,
    value: null,
  });
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(initial_filters);
  const { searchInput, toggleCountry, toggleStatus } = filters;

  const setSingleFilter = (key, value) => {
    setFilters({ ...initial_filters, [key]: value });
  };

  const filterUsersBySearch = (e) => {
    const value = e.target.value.trim();
    setSingleFilter("searchInput", value);
    setCurFilter({ filter: "searchInput", value });

    if (value === "") {
      setPaginatedData((prev) => ({ ...prev, items: data }));
    } else if (value) {
      setPaginatedData((prev) => ({
        ...prev,
        items: data.filter((user) =>
          user["Full Name"].toLowerCase().includes(value.toLowerCase())
        ),
      }));
    }
  };

  useEffect(() => {
    if (curFilter.filter && curFilter.filter !== "searchInput") {
      setPaginatedData((prev) => ({
        ...prev,
        items: data.filter(
          (user) => user[curFilter.filter] === curFilter.value
        ),
      }));
    } else if (curFilter.filter !== "searchInput") {
      setPaginatedData((prev) => ({
        ...prev,
        items: data,
      }));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curFilter]);

  useEffect(() => {
    // fetch data
    setTimeout(() => {
      setPaginatedData({ items: iReports, curItems: [] });
      setData(iReports);
    }, 2000);
  }, []);

  return (
    <Page title={"iReport Management"}>
      <main>
        <Paginatation {...{ itemsPerPage: 2, paginatedData, setPaginatedData }}>
          <AdvancedTable
            {...{
              data,
              paginatedData,
              setPaginatedData,
              Actions,
              actionCols: ["Media", "Reply", "Edit", "Delete"],
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-4 bg-white dark:bg-gray-800">
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
                  className="block w-full md:w-80 p-2 pl-10 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for users"
                />
              </div>
              {/* Search bar end */}
              {/* Dropdown Filters Start */}
              <div className="flex justify-between items-center w-full self-end lg:self-auto lg:w-auto mt-3 lg:mt-0">
                <div className="hidden xs:block lg:hidden text-xs font-medium text-gray-700">
                  {paginatedData.curItems.length || paginatedData.items.length}{" "}
                  results
                </div>

                <div className="w-full flex justify-between xs:w-auto xs:justify-normal">
                  <CountryFilter
                    {...{
                      toggle: toggleCountry,
                      curFilter,
                      setToggle: () =>
                        setSingleFilter("toggleCountry", !toggleCountry),
                      handleClick: (data) =>
                        setCurFilter({
                          filter: data === null ? null : "Country",
                          value: data === null ? null : data.title,
                        }),
                    }}
                  />

                  <DropdownFilter
                    arr={["Pending", "Resolved"]}
                    title={"Status"}
                    curFilter={curFilter}
                    toggle={toggleStatus}
                    setToggle={() =>
                      setSingleFilter("toggleStatus", !toggleStatus)
                    }
                    handleClick={(elem) =>
                      setCurFilter({ filter: "Status", value: elem })
                    }
                  />
                </div>
              </div>
            </div>
          </AdvancedTable>
        </Paginatation>
      </main>
    </Page>
  );
};

const EditModal = ({ editModal, setEditModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setEditModal({
      isVisible: false,
      data: {},
    });
  };

  const close = () => setEditModal((prev) => ({ ...prev, isVisible: false }));

  return (
    <>
      <div
        className={`${
          editModal.isVisible ? "" : "hidden"
        } fixed inset-0 flex justify-center items-center z-20 bg-black/50`}
      />
      <div
        tabIndex="-1"
        className={`${
          editModal.isVisible ? "" : "hidden"
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
                Edit
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

const MediaModal = ({ mediaModal, setMediaModal }) => {
  const close = () => setMediaModal((prev) => ({ ...prev, isVisible: false }));

  return (
    <>
      <div
        className={`fixed inset-0 flex justify-center items-center z-20 bg-black/50`}
      />
      <div
        tabIndex="-1"
        className={`fixed z-20 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative w-full max-w-2xl max-h-full bg-gray-100 rounded-lg">
          {/* Modal header */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Media
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
          {/* Modal content */}
          <div className="overflow-y-scroll h-[50vh] p-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {mediaModal.media.map((url, indx) => (
                <div
                  key={"media" + indx}
                  className="flex justify-center items-center min-w-[50px] min-h-[125px] relative object-cover object-center bg-gray-300"
                >
                  <Image classes={"w-full h-full"} url={url} alt={"media"} />
                </div>
              ))}
            </div>
          </div>

          {/* Modal footer */}
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={close}
              className="justify-self-end text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const ReplyModal = ({ setReplyModal }) => {
  const close = () => setReplyModal(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setReplyModal(false);
  };

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 flex justify-center items-center z-20 bg-black/50`}
      />
      <div
        tabIndex="-1"
        className={`fixed z-20 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-md max-h-full bg-gray-100 rounded-lg"
        >
          {/* Modal header */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Reply
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
          {/* Modal content */}
          <div className="grid grid-cols-1 gap-4 overflow-y-scroll p-5">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <input
                type="text"
                name="message"
                id="message"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
          </div>

          {/* Modal footer */}
          <div className="flex items-center p-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="submit"
              className="w-full text-sm text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

const Actions = ({
  tableStructure,
  data,
  SN,
  selectedUsers,
  setSelectedUsers,
  paginatedData,
  setPaginatedData,
}) => {
  const [replyModal, setReplyModal] = useState(false);
  const [editModal, setEditModal] = useState({ isVisible: false, data });
  const [mediaModal, setMediaModal] = useState({
    isVisible: false,
    media: data.media,
  });

  const remove = () => {
    setPaginatedData((prev) => ({
      ...prev,
      items: prev.items.filter((user) => user["S/N"] !== SN),
    }));
  };

  return (
    <>
      {/* Edit user modal */}
      {editModal.isVisible && <EditModal {...{ editModal, setEditModal }} />}

      {/* Media modal */}
      {mediaModal.isVisible && (
        <MediaModal {...{ mediaModal, setMediaModal }} />
      )}

      {/* Reply modal */}
      {replyModal && <ReplyModal {...{ setReplyModal }} />}

      <td className="text-center text-base px-6 py-4">
        <button
          onClick={() =>
            setMediaModal((prev) => ({ ...prev, isVisible: true }))
          }
          className="hover:text-gray-800 hover:underline font-medium text-gray-600 dark:text-gray-500"
        >
          <AiFillFolderOpen />
        </button>
      </td>
      <td className="text-center text-base px-6 py-4">
        <button
          onClick={() => setReplyModal(true)}
          className="hover:text-gray-800 hover:underline font-medium text-gray-600 dark:text-gray-500"
        >
          <FaReplyAll />
        </button>
      </td>
      <td className="text-center text-lg px-6 py-4">
        <button
          onClick={() => setEditModal((prev) => ({ ...prev, isVisible: true }))}
          className="hover:text-gray-800 font-medium text-gray-600 dark:text-gray-500"
        >
          <MdModeEdit />
        </button>
      </td>
      <td className="text-center text-lg px-6 py-4">
        <button
          onClick={remove}
          className="hover:text-gray-800 font-medium text-gray-600 dark:text-gray-500"
        >
          <MdDelete />
        </button>
      </td>
    </>
  );
};

const DropdownFilter = ({
  toggle,
  setToggle,
  curFilter,
  title,
  arr,
  handleClick,
}) => {
  return (
    <button
      onClick={setToggle}
      className={`relative flex items-center text-black ${
        curFilter.filter === title
          ? "bg-red-100 hover:bg-red-200 dark:bg-red-200 dark:hover:bg-red-300"
          : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-500 dark:hover:bg-gray-600"
      } focus:ring-4 focus:outline-none font-medium rounded-lg text-xs px-4 py-1.5 ml-3 text-center`}
    >
      {curFilter.filter === title ? curFilter.value : title}
      <FaChevronUp className={`${toggle ? "" : "rotate-180"} ml-1`} />
      {toggle && (
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

export default IReportManagement;
