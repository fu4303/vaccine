import React from "react";
import { Link } from "react-router-dom";
import Chart from "./Chart";

const Info = ({ vaccines, data }) => {
  const solar = vaccines.filter(
    (vaccine) => vaccine.vaccine === "SolarBuddhica"
  ).length;
  const antiqua = vaccines.filter(
    (vaccine) => vaccine.vaccine === "Antiqua"
  ).length;
  const zerpfy = vaccines.filter(
    (vaccine) => vaccine.vaccine === "Zerpfy"
  ).length;

  console.log(
    vaccines
      .filter((vaccine) => vaccine.vaccine === "Antiqua")
      .filter((vaccine) => vaccine.arrived.includes("2021-02"))
  );

  return (
    <div>
      <h1>Vaccines Statistics</h1>
      <div>
        <Link to="/solar">
          <div>SolarBuddhica: {solar}</div>
        </Link>
        <Link to="/antiqua">
          <div>Antiqua: {antiqua}</div>
        </Link>
        <Link to="/zerpfy">
          <div>Zerpfy: {zerpfy}</div>
        </Link>
        <Link to="/vaccinelist">
          <div>Total: {vaccines.length}</div>
        </Link>
      </div>
      <h2>Vaccine Arrivals by Month</h2>
      <Chart vaccines={vaccines} data={data} />
    </div>
  );
};

export default Info;
