import React, { useEffect, useState } from "react";
import AdvancedTable from "../components/Tables/AdvancedTable";
import { climates } from "../constants/data";
import { Page } from "../components";
import Paginatation from "../components/Pagintation";
import CountryFilter from "../components/CountryFilter";
import { BiSearch } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";
import { MdDelete } from "react-icons/md";

const ClimateManagement = () => {
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
  const { searchInput, toggleCountry } = filters;

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
      setPaginatedData({ items: climates, curItems: [] });
      setData(climates);
    }, 2000);
  }, []);

  return (
    <Page title={"Climate Management"}>
      <main>
        <Paginatation {...{ itemsPerPage: 2, paginatedData, setPaginatedData }}>
          <AdvancedTable
            {...{
              data,
              paginatedData,
              setPaginatedData,
              Actions,
              actionCols: ["Actions", "Delete"],
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
                </div>
              </div>
            </div>
          </AdvancedTable>
        </Paginatation>
      </main>
    </Page>
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
  const remove = () => {
    setPaginatedData((prev) => ({
      ...prev,
      items: prev.items.filter((user) => user["S/N"] !== SN),
    }));
  };

  return (
    <>
      <td className="flex text-center text-base px-6 py-4">
        <button className="text-xs mr-1 hover:text-blue-500 hover:underline font-medium text-gray-600 dark:text-gray-500">
          Yes
        </button>
        <span className="text-base text-gray-800"> | </span>
        <button className="text-xs mx-1 hover:text-blue-500 hover:underline font-medium text-gray-600 dark:text-gray-500">
          No
        </button>
        <span className="text-base text-gray-800"> | </span>
        <button className="text-xs ml-1 hover:text-blue-500 hover:underline font-medium text-gray-600 dark:text-gray-500">
          Maybe
        </button>
      </td>
      <td className="text-center hover:text-black text-base px-6 py-4">
        <button
          onClick={remove}
          className="font-medium text-gray-600 dark:text-gray-500"
        >
          <MdDelete />
        </button>
      </td>
    </>
  );
};

export default ClimateManagement;
