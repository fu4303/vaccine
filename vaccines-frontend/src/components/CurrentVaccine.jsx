import React from "react";

const CurrentVaccine = ({ vaccine }) => {
  if (!vaccine) {
    return null;
  }
  return (
    <div
      style={{
        margin: "20px 0 0 20px",
      }}
    >
      <p>Order number: {vaccine.orderNumber}</p>
      <p>ID: {vaccine.id}</p>
      <p>Responsible person: {vaccine.responsiblePerson}</p>
      <p>Area: {vaccine.healthCareDistrict}</p>
      <p>Type: {vaccine.vaccine}</p>
      <p>Injections total: {vaccine.injections}</p>
      <p>Arrived: {new Date(vaccine.arrived).toLocaleString()}</p>
    </div>
  );
};

export default CurrentVaccine;
