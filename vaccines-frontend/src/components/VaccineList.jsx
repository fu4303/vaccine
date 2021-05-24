import React from "react";
import VaccineListPagination from "./VaccineListPagination";

const VaccineList = ({ vaccines, vaccinations }) => {
  return (
    <div>
      <VaccineListPagination rows={vaccines} vaccinations={vaccinations} />
    </div>
  );
};

export default VaccineList;
