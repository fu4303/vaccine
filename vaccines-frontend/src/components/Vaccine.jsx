/* eslint-disable indent */
import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";

const Vaccine = ({ vaccine, vaccinations }) => {
  const vaccination = vaccinations.filter(
    (vaccination) => vaccination.sourceBottle === vaccine.id
  );

  return (
    <TableRow key={vaccine.orderNumber}>
      <TableCell>{vaccine.orderNumber}</TableCell>
      <TableCell>
        <Link to={`/vaccines/${vaccine.id}`}>{vaccine.id}</Link>
      </TableCell>
      <TableCell>{vaccine.responsiblePerson}</TableCell>
      <TableCell>{vaccine.healthCareDistrict}</TableCell>
      <TableCell
        style={{
          color:
            vaccine.vaccine === "Antiqua"
              ? "#82ca9d"
              : vaccine.vaccine === "Zerpfy"
              ? "#d84a26"
              : "#8884d8",
        }}
      >
        {vaccine.vaccine}
      </TableCell>
      <TableCell>{new Date(vaccine.arrived).toLocaleDateString()}</TableCell>
      <TableCell>
        Used: {vaccination.length}/{vaccine.injections}
      </TableCell>
    </TableRow>
  );
};
export default Vaccine;
