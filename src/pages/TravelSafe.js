import React from "react";
import { EmergencyAndTravelSafeTemplate } from "../components";
import { travelSafeData } from "../_mock/travelsafe";

const TravelSafe = () => {
  return (
    <EmergencyAndTravelSafeTemplate
      data={travelSafeData}
      pageName="Travel Safe"
      title="Check on your dependant!"
      pageType="Trip"
    />
  );
};

export default TravelSafe;
