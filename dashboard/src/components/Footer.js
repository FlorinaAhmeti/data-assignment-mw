import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="primary" href="#">
        Master Wizr
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -10,
    top: -10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "19px 16px",
    borderRadius: "50%",
    fontSize: "1rem",
  },
}))(Badge);

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;
  const [value, setValue] = React.useState(0);

  return (
    <>
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
