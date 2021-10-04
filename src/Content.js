import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Topsection from "./Topsection";
import Downsection from "./Downsection";

const useStyles = makeStyles((theme) => ({
  content: {
    width: "100%",
    minHeight: "100%",
  },
}));

function Content() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Grid container>
        <Topsection />
        <Downsection />
      </Grid>
    </div>
  );
}

export default Content;
