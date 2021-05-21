import React from "react";

const Vaccination = ({ vaccination }) => {
  return (
    <div style={{ border: "1px solid black", margin: "2px", width: "550px" }}>
      {vaccination.gender} - {vaccination.sourceBottle} -{" "}
      {new Date(vaccination.vaccinationDate).toLocaleDateString()}
    </div>
  );
};
export default Vaccination;
