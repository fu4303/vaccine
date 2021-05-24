import React from "react";
import VaccinationListPagination from "./VaccinationListPagination";

const VaccinationList = ({ vaccinations, vaccines }) => {
  return (
    <div>
      <VaccinationListPagination rows={vaccinations} vaccines={vaccines} />
    </div>
  );
};

export default VaccinationList;
