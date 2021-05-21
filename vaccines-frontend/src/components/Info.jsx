import React from "react";
import { Link } from "react-router-dom";
import Chart from "./Chart";

const Info = ({ vaccines, data }) => {
  const solarLength = vaccines.filter(
    (vaccine) => vaccine.vaccine === "SolarBuddhica"
  ).length;
  const antiquaLength = vaccines.filter(
    (vaccine) => vaccine.vaccine === "Antiqua"
  ).length;
  const zerpfyLength = vaccines.filter(
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
          <div>SolarBuddhica: {solarLength}</div>
        </Link>
        <Link to="/antiqua">
          <div>Antiqua: {antiquaLength}</div>
        </Link>
        <Link to="/zerpfy">
          <div>Zerpfy: {zerpfyLength}</div>
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
