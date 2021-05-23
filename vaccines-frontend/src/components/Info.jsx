import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import graph from "../images/graph.webp";

const Info = ({ vaccines }) => {
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <h1>Vaccines Statistics</h1>
      <div style={{ display: "flex", gap: "15px" }}>
        <Paper style={{ width: "300px", padding: "10px" }} elevation={3}>
          <Link component={RouterLink} to="/solar">
            SolarBuddhica
          </Link>
          <div style={{ marginBottom: "5px" }}>
            <p>Bottles: {solarLength}</p>
            <p>Injections: {solarLength * 6}</p>
          </div>

          <Link component={RouterLink} to="/antiqua">
            Antiqua
          </Link>
          <div style={{ marginBottom: "5px" }}>
            <p>Bottles: {antiquaLength}</p>
            <p>Injections: {antiquaLength * 4}</p>
          </div>
          <Link component={RouterLink} to="/zerpfy">
            Zerpfy
          </Link>
          <div style={{ marginBottom: "5px" }}>
            <p>Bottles: {zerpfyLength}</p>
            <p>Injections: {zerpfyLength * 5}</p>
          </div>
          <Link component={RouterLink} to="/vaccinelist">
            Total
          </Link>
          <div>
            <p>Bottles: {vaccines.length}</p>
            <p>
              Injections:{" "}
              {solarLength * 6 + antiquaLength * 4 + zerpfyLength * 5}
            </p>
          </div>
        </Paper>
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "15px",
            width: "300px",
            padding: "10px",
          }}
          elevation={3}
        >
          <img src={graph} alt="graphs picture" />

          <Button variant="contained" color="primary">
            <Link
              component={RouterLink}
              to="/graphs"
              style={{ color: "white", textDecorationLine: "none" }}
            >
              Graphs
            </Link>
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default Info;
