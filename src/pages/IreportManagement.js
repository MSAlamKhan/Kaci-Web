import React, { useState } from "react";
import { Page } from "../components";
import Paginatation from "../components/Pagintation";
import CommonTable from "../components/Tables/CommonTable";
import { petitions } from "../constants/data";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";

const IreportManagement = ({ title }) => {
  const [data, setData] = useState({ items: petitions, curItems: [] });

  return (
    <Page title={title}>
      <main className="mx-auto md:max-w-lg lg:max-w-[725px] xl:max-w-5xl mt-3 md:mt-5">
        <Paginatation {...{ itemsPerPage: 10, data, setData }}>
          <CommonTable {...{ data, Actions }} />
        </Paginatation>
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

export default IreportManagement;
