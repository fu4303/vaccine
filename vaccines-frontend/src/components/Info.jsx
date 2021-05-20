import React from "react";
import { Link } from "react-router-dom";

const Info = ({ vaccines }) => {
  const solar = vaccines.filter(
    (vaccine) => vaccine.vaccine === "SolarBuddhica"
  ).length;
  const antiqua = vaccines.filter(
    (vaccine) => vaccine.vaccine === "Antiqua"
  ).length;
  const zerpfy = vaccines.filter(
    (vaccine) => vaccine.vaccine === "Zerpfy"
  ).length;

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
        <div>Total: {vaccines.length}</div>
      </div>
    </div>
  );
};

export default Info;
