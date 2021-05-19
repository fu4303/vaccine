import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import VaccineList from "./components/VaccineList";
import Info from "./components/Info";

const App = () => {
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
          <Route path="/vaccinelist">
            <VaccineList />
          </Route>
          <Route path="/">
            <Info />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
