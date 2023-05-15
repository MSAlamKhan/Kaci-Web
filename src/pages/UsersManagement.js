import React from "react";
import UsersTable from "../components/Tables/UsersTable";
import { users } from "../constants/data";
import { Page } from "../components";

const UsersManagement = () => {
  return (
    <Page title={"Users Management"}>
      <main>
        <UsersTable data={users} />
      </main>
    </Page>
  );
};

export default UsersManagement;
