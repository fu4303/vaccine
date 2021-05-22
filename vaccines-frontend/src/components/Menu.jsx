import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <div style={{ display: "flex", gap: "15px" }}>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/vaccinelist">Vaccine List</Link>
        </p>
        <p>
          <Link to="/vaccinationlist">Vaccination List</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
      </div>
    </nav>
  );
};

export default Menu;
