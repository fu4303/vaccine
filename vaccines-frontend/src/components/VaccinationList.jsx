import React from "react";
import CustomPaginationActionsTable from "./Pagination";

const VaccinationList = ({ vaccinations, vaccines }) => {
  return (
    <div>
      <CustomPaginationActionsTable rows={vaccinations} vaccines={vaccines} />
    </div>
  );
};

export default VaccinationList;
