import React from "react";
import Vaccination from "./Vaccination";

const VaccinationList = ({ vaccinations }) => {
  return (
    <div>
      <div>
        {vaccinations.map((vaccination) => (
          <Vaccination
            key={vaccination["vaccination-id"]}
            vaccination={vaccination}
          />
        ))}
      </div>
    </div>
  );
};

export default VaccinationList;
