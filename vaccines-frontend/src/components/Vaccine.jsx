import React from "react";

const Vaccine = ({ vaccine }) => {
  return (
    <div style={{ border: "1px solid black", margin: "2px", width: "400px" }}>
      <strong>{vaccine.orderNumber}</strong> - {vaccine.responsiblePerson} -{" "}
      {vaccine.healthCareDistrict} -{" "}
      <p
        style={{
          display: "inline",
          color:
            vaccine.vaccine === "Antiqua"
              ? "blue"
              : vaccine.vaccine === "Zerpfy"
              ? "red"
              : "green",
        }}
      >
        {vaccine.vaccine}
      </p>
    </div>
  );
};
export default Vaccine;
