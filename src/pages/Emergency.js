import React from "react";
import { EmergencyAndTravelSafeTemplate } from "../components";
import { emergencyData } from "../_mock/emergency";

const Emergency = () => {
  return (
    <EmergencyAndTravelSafeTemplate
      data={emergencyData}
      pageName="Emergency"
      title="Help is needed!"
      pageType="Emergency"
    />
  );
};

export default Emergency;
