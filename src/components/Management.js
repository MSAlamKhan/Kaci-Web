import React, { useState } from "react";
import { Page } from ".";
import Paginatation from "./Pagintation";
import CommonTable from "./Tables/CommonTable";
import { petitions } from "../constants/data";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";

const ManagementPage = ({ title }) => {
  const data = petitions;
  const [paginatedData, setPaginatedData] = useState({
    items: data,
    curItems: [],
  });
  const handleChange = (e) => {
    const value = e.target.value.trim().toLowerCase();

    if (value) {
      setPaginatedData((prev) => ({
        ...prev,
        items: data.filter(
          (e) =>
            e.firstName.toLowerCase().includes(value) ||
            e.lastName.toLowerCase().includes(value)
        ),
      }));
    } else {
      setPaginatedData((prev) => ({ ...prev, items: data }));
    }
  };

  return (
    <Page title={title}>
      <main className="mt-3 md:mt-5">
        <div className="text-sm font-medium mb-2">
          Search:{" "}
          <input
            className="w-full max-w-xs h-8 px-2 py-1 ml-2 rounded-sm border"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="mx-auto md:max-w-lg lg:max-w-[725px] xl:max-w-5xl">
          <Paginatation
            {...{ itemsPerPage: 10, paginatedData, setPaginatedData }}
          >
            <CommonTable {...{ template: data[0], paginatedData, Actions }} />
          </Paginatation>
        </div>
      </main>
    </Page>
  );
};

const Actions = ({ item }) => {
  return (
    <div className="flex justify-around">
      <MdModeEdit
        onClick={() => alert("Edit btn clicked")}
        className="text-gray-700 cursor-pointer"
      />
      <RiDeleteBinFill
        onClick={() => alert("Delete btn clicked")}
        className="text-red-700 cursor-pointer"
      />
    </div>
  );
};

export default ManagementPage;
