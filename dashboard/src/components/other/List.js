import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import StopIcon from "@material-ui/icons/Stop";
import { Container } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const ListComponent = ({ data }) => {
  let dataPoints = [];
  var result = Object.keys(data).map((key) => [key, data[key]]);
  const filterData = () => {
    return result.map((res) => {
      dataPoints.push(res[1]);
    });
  };
  filterData();

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {!dataPoints
          ? null
          : dataPoints.map((item, index) => (
              <ListItem button>
                <ListItemIcon>
                  <StopIcon />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
      </List>
    </Container>
  );
};

export default ListComponent;
