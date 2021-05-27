/* eslint-disable indent */
import React from "react";

const CurrentVaccination = ({ vaccination, vaccines }) => {
  if (!vaccination) {
    return null;
  }
  const vaccine = vaccines.filter(
    (vaccine) => vaccine.id === vaccination.sourceBottle
  );
  return (
    <div
      style={{
        margin: "20px 0 0 20px",
      }}
    >
      <p>ID: {vaccination["vaccination-id"]}</p>
      <p>Source bottle: {vaccination.sourceBottle}</p>
      <p>Gender: {vaccination.gender}</p>
      <p>
        Vaccination date:{" "}
        {new Date(vaccination.vaccinationDate).toLocaleString()}
      </p>
      <p>Type: {vaccine[0].vaccine} </p>
      <p>Responsible person: {vaccine[0].responsiblePerson}</p>
      <p>Area: {vaccine[0].healthCareDistrict}</p>
    </div>
  );
};

export default CurrentVaccination;
