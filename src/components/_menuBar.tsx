import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() =>
  createStyles({
    menuItem: {
      color: "white",
      textDecoration: "none",
      padding: "14px 5px",
      fontWeight: 300,
      display: "block",
      textTransform: "uppercase",
      "&:hover": {
        color: "#4eb69d"
      }
    }
  })
);

export default () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} alignItems="center">
      <Link className={classes.menuItem} to="/">
        Instructions
      </Link>
      |
      <Link className={classes.menuItem} to="/exercise">
        Exercise
      </Link>
    </Grid>
  );
};
