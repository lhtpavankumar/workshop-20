import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  downSection: {
    backgroundColor: "#fff",
    backgroundSize: "cover",
    width: "100%",
    minHeight: "500px",
    paddingTop: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingLeft: "25px",
  },
  paperQ: {
    padding: theme.spacing(1),
    textAlign: "left",
    backgroundColor: "#E8F5FE",
    color: "#323f4b",
    fontWeight: "500",
    width: "500px",
  },
  paperQL: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  paperA: {
    padding: theme.spacing(1),
    textAlign: "left",
    backgroundColor: "#F7F7F7",
    color: "#323f4b",
    fontWeight: "500",
    width: "500px",
  },
  paperAL: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  List: {
    display: "flex",
    flexDirection: "column",
  },
  detailsOfPreviousSurgeries: {
    width: "120px",
    fontSize: "13px",
    alignSelf: "center",
    fontWeight: "500",
  },
  previousDetails: {
    fontSize: "13px",
    fontWeight: "500",
  },
}));

function Downsection() {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.downSection}>
        <Grid container className={classes.List} spacing={3}>
          <Grid item>
            <Paper elevation={0} className={classes.paperQ}>
              First Time Surgery
            </Paper>
            <Paper elevation={0} className={classes.paperA}>
              No
            </Paper>
          </Grid>
          {/* Q2 */}
          <Grid item>
            <Paper elevation={0} className={classes.paperQ}>
              Family History Of Surgical Complications?
            </Paper>
            <Paper elevation={0} className={classes.paperA}>
              Yes
            </Paper>
          </Grid>

          {/* Q3 */}

          <Grid item>
            <Paper elevation={0} className={classes.paperQ}>
              If Yes, please provide more details
            </Paper>
            <Paper elevation={0} className={classes.paperA}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              dolore quibusdam nesciunt inventore, similique soluta optio at in
              amet, voluptates laudantium consequatur ipsum? Corporis nemo
              quaerat suscipit fuga magni beatae sapiente, odio nisi quibusdam
              officia tempore, odit unde quisquam!
            </Paper>
          </Grid>

          {/* Q4 */}

          <Grid item>
            <Typography className={classes.previousDetails} variant="h7">
              Previous Surgeries
            </Typography>
            <Paper
              elevation={0}
              className={`${classes.paperQ} ${classes.paperQL}`}
            >
              <Typography className={classes.detailsOfPreviousSurgeries}>
                Surgery Type
              </Typography>
              <Typography className={classes.detailsOfPreviousSurgeries}>
                Date
              </Typography>
              <Typography className={classes.detailsOfPreviousSurgeries}>
                Anesthesia Type
              </Typography>
              <Typography className={classes.detailsOfPreviousSurgeries}>
                Surgrical Complications
              </Typography>
              <Typography className={classes.detailsOfPreviousSurgeries}>
                Anesthetic Complications (nausea, vomiting, difficult
                intubation)
              </Typography>
              <Typography className={classes.detailsOfPreviousSurgeries}>
                {" "}
              </Typography>
            </Paper>
            <Paper
              elevation={0}
              className={`${classes.paperA} ${classes.paperAL}`}
            >
              <Typography className={classes.detailsOfPreviousSurgeries}>
                Shoulder reconstruction
              </Typography>
              <Typography className={classes.detailsOfPreviousSurgeries}>
                January 2008
              </Typography>
              <Typography className={classes.detailsOfPreviousSurgeries}>
                General 'Breathing Tube'
              </Typography>
              <Typography className={classes.detailsOfPreviousSurgeries}>
                No
              </Typography>
              <Typography className={classes.detailsOfPreviousSurgeries}>
                No
              </Typography>
              <Typography className={classes.detailsOfPreviousSurgeries}>
                No
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Downsection;
