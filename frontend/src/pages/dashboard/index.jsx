import React from "react";
import DashboardLayout from "../../layouts/dashboard/index";
import CarsTable from "../../components/carstable/index";

const index = () => {
  return (
    <div>
      <DashboardLayout>
        <CarsTable />
      </DashboardLayout>
    </div>
  );
};

export default index;
