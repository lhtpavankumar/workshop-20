import React from "react";
import Nav from "./Nav";
import Sidecard from "./Sidecard";
import Content from "./Content";
import { Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: "rgba(226,226,226)",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    color: "#fff",
  },

  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    marginTop: "20px",
  },
  sidecard: {
    backgroundColor: "#E8F5FE",
    height: "100%",
    width: "25%",
    border: "1px solid black",
  },
  content: {
    backgroundColor: "#F7F7F7",
    width: "75%",
    height: "100%",
    border: "1px solid black",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.app}>
      <Nav />
      <div className={classes.container}>
        <Sidecard />
        <Content />
      </div>
    </Box>
  );
}

export default App;
