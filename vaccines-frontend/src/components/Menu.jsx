import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menuContainer">
      <p className="menuLink">
        <NavLink activeClassName="active" exact={true} to="/">
          Home
        </NavLink>
      </p>
      <p className="menuLink">
        <NavLink activeClassName="active" to="/graphs">
          Graphs
        </NavLink>
      </p>
      <p className="menuLink">
        <NavLink activeClassName="active" to="/vaccinelist">
          Vaccine List
        </NavLink>
      </p>
      <p className="menuLink">
        <NavLink activeClassName="active" to="/vaccinationlist">
          Vaccination List
        </NavLink>
      </p>
      <p className="menuLink">
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </p>
    </div>
  );
};

export default Menu;
