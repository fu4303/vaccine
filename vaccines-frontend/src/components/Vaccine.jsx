import React from "react";

const Vaccine = ({ vaccine, vaccinations }) => {
  const vaccination = vaccinations.filter(
    (vaccination) => vaccination.sourceBottle === vaccine.id
  );

  return (
    <div style={{ border: "1px solid black", margin: "2px", width: "600px" }}>
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
      </p>{" "}
      - {new Date(vaccine.arrived).toLocaleDateString()} - Used:{" "}
      {vaccination.length}/{vaccine.injections}
    </div>
  );
};
export default Vaccine;
