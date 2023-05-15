import React, { useState } from "react";
import { petitions } from "../constants/data";
import CommonTable from "../components/Tables/CommonTable";
import Paginatation from "../components/Pagintation";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { Page } from "../components";

const PetitionManagement = () => {
  const [data, setData] = useState({ items: petitions, curItems: [] });

  return (
    <Page>
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

export default PetitionManagement;
