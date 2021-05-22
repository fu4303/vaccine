import React from "react";

const Vaccination = ({ vaccination, vaccines }) => {
  const vaccine = vaccines.filter(
    (vaccine) => vaccine.id === vaccination.sourceBottle
  );
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "5px",
        width: "350px",
        padding: "5px",
      }}
    >
      <p>{vaccination.sourceBottle}</p>
      <p>{vaccination.gender}</p>
      <p>{new Date(vaccination.vaccinationDate).toLocaleDateString()}</p>
      <p>{vaccine[0].vaccine}</p>
      <p>Responsible Person: {vaccine[0].responsiblePerson}</p>
      <p>Area: {vaccine[0].healthCareDistrict}</p>
    </div>
  );
};
export default Vaccination;
