/* eslint-disable indent */
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";

const CurrentVaccination = ({ vaccination, vaccines }) => {
  if (!vaccination) {
    return null;
  }
  const vaccine = vaccines.filter(
    (vaccine) => vaccine.id === vaccination.sourceBottle
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
      }}
    >
      <Paper elevation={3} style={{ maxWidth: "40%" }}>
        <List>
          <ListItem>
            <ListItemText primary={`ID: ${vaccination["vaccination-id"]}`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary={`Source bottle: ${vaccination.sourceBottle}`}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={`Gender: ${vaccination.gender}`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary={`Vaccination date:
        ${new Date(vaccination.vaccinationDate).toLocaleString()}`}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={`Type: ${vaccine[0].vaccine}`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary={`Responsible person: ${vaccine[0].responsiblePerson}`}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={`Area: ${vaccine[0].healthCareDistrict}`} />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};

export default CurrentVaccination;
