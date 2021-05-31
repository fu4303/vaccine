import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import graph from "../images/graph.webp";
import stats from "../images/stats.svg";

const Info = ({ vaccines, vaccinations }) => {
  const vaccineAmount = (type) =>
    vaccines.filter((vaccine) => vaccine.vaccine === type).length;

  const vaccinationsByMonth = (month) =>
    vaccinations.filter((vaccination) =>
      vaccination.vaccinationDate.includes(`2021-${month}`)
    ).length;

  const ids = vaccines.map((vaccine) => vaccine.id);
  const bottles = vaccinations.map((vaccination) => vaccination.sourceBottle);
  const intersection = ids.filter((vaccine) =>
    bottles.includes(vaccine)
  ).length;

  const intersectionByType = (type) =>
    vaccines
      .filter((vaccine) => vaccine.vaccine === type)
      .map((vaccine) => vaccine.id)
      .filter((vaccine) => bottles.includes(vaccine)).length;

  const totalInjections =
    vaccineAmount("SolarBuddhica") * 6 +
    vaccineAmount("Antiqua") * 4 +
    vaccineAmount("Zerpfy") * 5;

  return (
    <div className="infoWrapper">
      <h1 className="infoHeader">
        <img src={stats} height="50" /> Vaccines & Vaccinations Statistics
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
                <p>Bottles: {vaccineAmount("SolarBuddhica")}</p>
                <p>Injections: {vaccineAmount("SolarBuddhica") * 6}</p>
              </div>
            </div>
            <div className="vaccineContainer">
              <Link component={RouterLink} to="/antiqua">
                Antiqua
              </Link>
              <div style={{ marginBottom: "5px" }}>
                <p>Bottles: {vaccineAmount("Antiqua")}</p>
                <p>Injections: {vaccineAmount("Antiqua") * 4}</p>
              </div>
            </div>
            <div className="vaccineContainer">
              <Link component={RouterLink} to="/zerpfy">
                Zerpfy
              </Link>
              <div style={{ marginBottom: "5px" }}>
                <p>Bottles: {vaccineAmount("Zerpfy")}</p>
                <p>Injections: {vaccineAmount("Zerpfy") * 5}</p>
              </div>
            </div>
            <div className="vaccineContainer">
              <Link component={RouterLink} to="/vaccinelist">
                Total
              </Link>
              <div>
                <p>Bottles: {vaccines.length}</p>
                <p>Injections: {totalInjections}</p>
              </div>
            </div>
          </div>
        </Paper>

        <Paper className="infoBasicContainer" elevation={3}>
          <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
            Vaccinations By Month
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            <div className="vaccineContainer" style={{ padding: "10px" }}>
              <p>January: {vaccinationsByMonth("01")}</p>
              <p>{`${((vaccinationsByMonth("01") / vaccinations.length) * 100)
                .toString()
                .substr(0, 4)}%`}</p>
            </div>
            <div className="vaccineContainer" style={{ padding: "10px" }}>
              <p>February: {vaccinationsByMonth("02")}</p>
              <p>{`${((vaccinationsByMonth("02") / vaccinations.length) * 100)
                .toString()
                .substr(0, 4)}%`}</p>
            </div>
            <div className="vaccineContainer" style={{ padding: "10px" }}>
              <p>March: {vaccinationsByMonth("03")}</p>
              <p>{`${((vaccinationsByMonth("03") / vaccinations.length) * 100)
                .toString()
                .substr(0, 4)}%`}</p>
            </div>
            <div className="vaccineContainer" style={{ padding: "10px" }}>
              <p>April: {vaccinationsByMonth("04")}</p>
              <p>{`${((vaccinationsByMonth("04") / vaccinations.length) * 100)
                .toString()
                .substr(0, 4)}%`}</p>
            </div>
            <div className="vaccineContainer" style={{ padding: "10px" }}>
              <Link component={RouterLink} to="/vaccinationlist">
                Total
              </Link>
              : {vaccinations.length}
            </div>
          </div>
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
          <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
            Vaccines Usage
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            <div className="vaccineContainer" style={{ padding: "8px" }}>
              Bottles Used: {intersection}/{vaccines.length}
              <p>{`${((intersection / vaccines.length) * 100)
                .toString()
                .substr(0, 4)}%`}</p>
            </div>
            <div className="vaccineContainer" style={{ padding: "7px" }}>
              Injections Used: {bottles.length}/{totalInjections}
              <p>{`${((bottles.length / totalInjections) * 100)
                .toString()
                .substr(0, 4)}%`}</p>
            </div>
            <div className="vaccineContainer" style={{ padding: "9px" }}>
              <Link component={RouterLink} to="/solar">
                SolarBuddhica:
              </Link>
              <p>
                {intersectionByType("SolarBuddhica")}/
                {vaccineAmount("SolarBuddhica")}
              </p>
              <p>{`${((1442 / vaccineAmount("SolarBuddhica")) * 100)
                .toString()
                .substr(0, 4)}%`}</p>
            </div>
            <div className="vaccineContainer" style={{ padding: "9px" }}>
              <Link component={RouterLink} to="/antiqua">
                Antiqua:
              </Link>
              <p>
                {intersectionByType("Antiqua")}/{vaccineAmount("Antiqua")}
              </p>
              <p>{`${((1242 / vaccineAmount("Antiqua")) * 100)
                .toString()
                .substr(0, 4)}%`}</p>
            </div>
            <div className="vaccineContainer" style={{ padding: "9px" }}>
              <Link component={RouterLink} to="/zerpfy">
                Zerpfy:
              </Link>
              <p>
                {intersectionByType("Zerpfy")}/{vaccineAmount("Zerpfy")}
              </p>
              <p>{`${((1321 / vaccineAmount("Zerpfy")) * 100)
                .toString()
                .substr(0, 4)}%`}</p>
            </div>
          </div>
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

Info.propTypes = {
  vaccines: PropTypes.array.isRequired,
};

export default Info;
