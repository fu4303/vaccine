import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const Vaccination = ({ vaccination, vaccines }) => {
  const vaccine = vaccines.filter(
    (vaccine) => vaccine.id === vaccination.sourceBottle
  );
  return (
    <TableRow key={vaccination["vaccination-id"]}>
      <TableCell>{vaccination.sourceBottle}</TableCell>
      <TableCell align="right">{vaccination.gender}</TableCell>
      <TableCell align="right">
        {new Date(vaccination.vaccinationDate).toLocaleDateString()}
      </TableCell>
      <TableCell align="right">{vaccine[0].vaccine}</TableCell>
      <TableCell align="right">{vaccine[0].responsiblePerson}</TableCell>
      <TableCell align="right">{vaccine[0].healthCareDistrict}</TableCell>
    </TableRow>
  );
};
export default Vaccination;
