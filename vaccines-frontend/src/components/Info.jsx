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

  return (
    <div>
      <h1>Vaccines Statistics</h1>
      <div>
        <Link to="/solar">SolarBuddhica</Link>
        <div>
          <p>Bottles: {solarLength}</p>
          <p>Injections: {solarLength * 6}</p>
        </div>
        <Link to="/antiqua">Antiqua</Link>
        <div>
          <p>Bottles: {antiquaLength}</p>
          <p>Injections: {antiquaLength * 4}</p>
        </div>
        <Link to="/zerpfy">Zerpfy</Link>
        <div>
          <p>Bottles: {zerpfyLength}</p>
          <p>Injections: {zerpfyLength * 5}</p>
        </div>
        <Link to="/vaccinelist">Total</Link>
        <div>
          <p>Bottles: {vaccines.length}</p>
          <p>
            Injections: {solarLength * 6 + antiquaLength * 4 + zerpfyLength * 5}
          </p>
        </div>
      </div>
      <h2>Vaccine Arrivals by Month</h2>
      <Chart vaccines={vaccines} data={data} />
    </div>
  );
};

export default Info;
