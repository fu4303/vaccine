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
            <Solar vaccines={vaccines} />
          </Route>
          <Route path="/antiqua">
            <Antiqua vaccines={vaccines} />
          </Route>
          <Route path="/zerpfy">
            <Zerpfy vaccines={vaccines} />
          </Route>
          <Route path="/vaccinelist">
            <VaccineList vaccines={vaccines} />
          </Route>
          <Route path="/">
            <Info vaccines={vaccines} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
