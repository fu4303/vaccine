import React from "react";

const Vaccine = ({ vaccine }) => {
  return (
    <div style={{ border: "1px solid black", margin: "1px" }}>
      {vaccine.orderNumber}
      {vaccine.responsiblePerson}
      {vaccine.healthCareDistrict}
    </div>
  );
};
export default Vaccine;
