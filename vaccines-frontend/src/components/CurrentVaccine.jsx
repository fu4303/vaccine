import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";

const CurrentVaccine = ({ vaccine }) => {
  if (!vaccine) {
    return null;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
      }}
    >
      <Paper elevation={3} style={{ maxWidth: "50%" }}>
        <List>
          <ListItem>
            <ListItemText primary={`Order number: ${vaccine.orderNumber}`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={`ID: ${vaccine.id}`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary={`Responsible person: ${vaccine.responsiblePerson}`}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={`Area: ${vaccine.healthCareDistrict}`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={`Type: ${vaccine.vaccine}`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={`Injections: ${vaccine.injections}`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary={`Arrived: ${new Date(vaccine.arrived).toLocaleString()}`}
            />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};

export default CurrentVaccine;
