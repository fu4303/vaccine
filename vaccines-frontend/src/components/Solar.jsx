import React from "react";

const Solar = ({ vaccines }) => {
  const solar = vaccines.filter(
    (vaccine) => vaccine.vaccine === "SolarBuddhica"
  ).length;

  return (
    <div>
      <h1>SolarBuddhica</h1>
      <div>
        <div>SolarBuddhica: {solar}</div>
      </div>
    </div>
  );
};

export default Solar;
