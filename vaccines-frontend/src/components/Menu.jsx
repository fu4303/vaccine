import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="menu">
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "15px",
        }}
      >
        <p className="menuLink">
          <Link to="/">Home</Link>
        </p>
        <p className="menuLink">
          <Link to="/graphs">Graphs</Link>
        </p>
        <p className="menuLink">
          <Link to="/vaccinelist">Vaccine List</Link>
        </p>
        <p className="menuLink">
          <Link to="/vaccinationlist">Vaccination List</Link>
        </p>
        <p className="menuLink">
          <Link to="/about">About</Link>
        </p>
      </div>
    </nav>
  );
};

export default Menu;
