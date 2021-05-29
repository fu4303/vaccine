import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import graph from "../images/graph.webp";
import stats from "../images/stats.svg";

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
    <div className="infoWrapper">
      <h1 className="infoHeader">
        <img src={stats} height="50" /> Vaccines Statistics
      </h1>
      <div className="infoGrid">
        <Paper className="infoBasicContainer" elevation={3}>
          <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
            Vaccine Type Stats
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            <div className="vaccineContainer">
              <Link component={RouterLink} to="/solar">
                SolarBuddhica
              </Link>
              <div style={{ marginBottom: "5px" }}>
                <p>Bottles: {solarLength}</p>
                <p>Injections: {solarLength * 6}</p>
              </div>
            </div>
            <div className="vaccineContainer">
              <Link component={RouterLink} to="/antiqua">
                Antiqua
              </Link>
              <div style={{ marginBottom: "5px" }}>
                <p>Bottles: {antiquaLength}</p>
                <p>Injections: {antiquaLength * 4}</p>
              </div>
            </div>
            <div className="vaccineContainer">
              <Link component={RouterLink} to="/zerpfy">
                Zerpfy
              </Link>
              <div style={{ marginBottom: "5px" }}>
                <p>Bottles: {zerpfyLength}</p>
                <p>Injections: {zerpfyLength * 5}</p>
              </div>
            </div>
            <div className="vaccineContainer">
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
            </div>
          </div>
        </Paper>

        <Paper className="infoBasicContainer" elevation={3}>
          <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
            Vaccinations Stats
          </h3>
        </Paper>

        <Paper className="infoGraphContainer" elevation={3}>
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

        <Paper className="infoBasicContainer" elevation={3}>
          How many of the vaccinations have been used?
        </Paper>
        <Paper className="infoBasicContainer" elevation={3}>
          How many bottles have expired on the given day (remember a bottle
          expires 30 days after arrival)
        </Paper>
        <Paper className="infoBasicContainer" elevation={3}>
          How many vaccines expired before the usage
        </Paper>
        <Paper className="infoBasicContainer" elevation={3}>
          How many vaccines are left to use?
        </Paper>

        <Paper
          className="infoBasicContainer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
          }}
          elevation={3}
        >
          <h3>RAW Data</h3> <h3>@</h3>{" "}
          <Link
            href="https://github.com/solita/vaccine-exercise-2021/tree/master/resources"
            style={{ fontSize: "2rem" }}
          >
            GitHub
          </Link>
        </Paper>
      </div>
    </div>
  );
};

export default Info;
