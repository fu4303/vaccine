import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import VaccineList from "./components/VaccineList";
import Info from "./components/Info";
import Solar from "./components/Solar";
import Antiqua from "./components/Antiqua";
import Zerpfy from "./components/Zerpfy";
import vaccineService from "./services/vaccine";

const App = () => {
  const [vaccines, setVaccines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const initialVaccines = await vaccineService.getAll();
      setVaccines(initialVaccines);
    };
    fetchData();
  }, []);

  const data = [
    {
      name: "January",
      SolarBhuddica: `${
        vaccines
          .filter((vaccine) => vaccine.vaccine === "SolarBuddhica")
          .filter((vaccine) => vaccine.arrived.includes("2021-01")).length
      }`,
      Antiqua: `${
        vaccines
          .filter((vaccine) => vaccine.vaccine === "Antiqua")
          .filter((vaccine) => vaccine.arrived.includes("2021-01")).length
      }`,
      Zerphy: `${
        vaccines
          .filter((vaccine) => vaccine.vaccine === "Zerpfy")
          .filter((vaccine) => vaccine.arrived.includes("2021-01")).length
      }`,
    },
    {
      name: "February",
      SolarBhuddica: `${
        vaccines
          .filter((vaccine) => vaccine.vaccine === "SolarBuddhica")
          .filter((vaccine) => vaccine.arrived.includes("2021-02")).length
      }`,
      Antiqua: `${
        vaccines
          .filter((vaccine) => vaccine.vaccine === "Antiqua")
          .filter((vaccine) => vaccine.arrived.includes("2021-02")).length
      }`,
      Zerphy: `${
        vaccines
          .filter((vaccine) => vaccine.vaccine === "Zerpfy")
          .filter((vaccine) => vaccine.arrived.includes("2021-02")).length
      }`,
    },
    {
      name: "March",
      SolarBhuddica: `${
        vaccines
          .filter((vaccine) => vaccine.vaccine === "SolarBuddhica")
          .filter((vaccine) => vaccine.arrived.includes("2021-03")).length
      }`,
      Antiqua: `${
        vaccines
          .filter((vaccine) => vaccine.vaccine === "Antiqua")
          .filter((vaccine) => vaccine.arrived.includes("2021-03")).length
      }`,
      Zerphy: `${
        vaccines
          .filter((vaccine) => vaccine.vaccine === "Zerpfy")
          .filter((vaccine) => vaccine.arrived.includes("2021-03")).length
      }`,
    },
    {
      name: "April",
      SolarBhuddica: `${
        vaccines
          .filter((vaccine) => vaccine.vaccine === "SolarBuddhica")
          .filter((vaccine) => vaccine.arrived.includes("2021-04")).length
      }`,
      Antiqua: `${
        vaccines
          .filter((vaccine) => vaccine.vaccine === "Antiqua")
          .filter((vaccine) => vaccine.arrived.includes("2021-04")).length
      }`,
      Zerphy: `${
        vaccines
          .filter((vaccine) => vaccine.vaccine === "Zerpfy")
          .filter((vaccine) => vaccine.arrived.includes("2021-04")).length
      }`,
    },
  ];

  return (
    <Router>
      <div>
        <nav>
          <div style={{ display: "flex", gap: "15px" }}>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/vaccinelist">Vaccine List</Link>
            </p>
            <p>
              <Link to="/about">About</Link>
            </p>
          </div>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/solar">
            <Solar vaccines={vaccines} data={data} />
          </Route>
          <Route path="/antiqua">
            <Antiqua vaccines={vaccines} data={data} />
          </Route>
          <Route path="/zerpfy">
            <Zerpfy vaccines={vaccines} data={data} />
          </Route>
          <Route path="/vaccinelist">
            <VaccineList vaccines={vaccines} />
          </Route>
          <Route path="/">
            <Info vaccines={vaccines} data={data} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
