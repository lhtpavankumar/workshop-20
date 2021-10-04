import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  Avatar,
  Card,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  topSection: {
    backgroundColor: "#F7F7F7",
    width: "100%",
    height: "40%",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "20px",
    borderBottom: "0.25px solid #C0C0C0",
  },
  headerInfo: {
    width: "100%",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentBasic: {
    fontWeight: "500",
    fontFamily: "Roboto",
    fontSize: "18px",
    color: "#323f4b",
  },
  lastUpdated: {
    display: "flex",
  },
  paper: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  eachCardContent: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontSize: "12px",
    fontWeight: "400",
    width: "200px",
    justifyContent: "space-between",
  },
  eachCardActive: {
    width: "280px",
  },
  detailsA: {
    fontSize: "11px",
    fontWeight: "600",
    textAlign: "left",
    width: "100px",
  },
  detailsContent: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  downCardContent: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "50px",
  },
  downCardHeader: {
    display: "flex",
  },
  downCardEachShowTab: {
    width: "120px",
    height: "70px",
    padding: "5px",
    textAlign: "center",
    fontSize: "14px",
    fontFamily: "Roboto",
    fontWeight: "500",
  },
  logo: {
    width: "55px",
    height: "55px",
  },
  name: {
    color: "#323f4b",
    fontSize: "20px",
    fontWeight: "500",
  },
  paperActive: {
    marginTop: "30px",
  },
  clear: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  eachShowActive: {
    border: "1px solid #C0C0C0",
    borderTop: "none",
    borderRight: "none",
    borderBottom: "none",
  },
  ActiveStageCard: {
    border: "1px solid #C0C0C0",
    borderBottom: "none",
  },
  yesBtn: {
    color: "white",
    backgroundColor: "green",
    borderRadius: "70px",
    width: "40px",
  },
}));

function Topsection() {
  const classes = useStyles();
  return (
    <Grid container className={classes.topSection}>
      <Box component="nav" className={classes.headerInfo}>
        <Typography variant="h7" className={classes.contentBasic}>
          Patient Information
        </Typography>
        <Typography
          variant="h7"
          className={`${classes.contentBasic} ${classes.lastUpdated}`}
        >
          Last updated:
          <Typography className={classes.contentBasic}>
            10:25 AM, today
          </Typography>
        </Typography>
      </Box>
      <Grid container className={classes.detailsContent}>
        {/* Box 1 */}
        <Avatar
          alt="logo"
          className={classes.logo}
          src="https://res.cloudinary.com/dltxupvq4/image/upload/c_crop/v1633087371/largesara_2_d4abxc.png"
        />
        <Box>
          <Typography variant="h6" className={classes.name}>
            Sara Smith
          </Typography>
          <Paper elevation={0} className={classes.paper}>
            <Typography className={classes.eachCardContent}>
              Phone:
              <Typography className={classes.detailsA}>320-857-9685</Typography>
            </Typography>

            <Typography className={classes.eachCardContent}>
              Email:{" "}
              <Typography className={classes.detailsA}>
                sarasmith@gmail.com
              </Typography>
            </Typography>

            <Typography className={classes.eachCardContent}>
              Gender:{" "}
              <Typography className={classes.detailsA}>Female</Typography>
            </Typography>

            <Typography className={classes.eachCardContent}>
              Age: <Typography className={classes.detailsA}>45</Typography>
            </Typography>
          </Paper>
        </Box>

        {/* Box2 */}

        <Box>
          <Paper
            elevation={0}
            className={`${classes.paper} ${classes.paperActive}`}
          >
            <Typography className={classes.eachCardContent}>
              Surgery Type:
              <Typography className={classes.detailsA}>
                Rotator Cuff Repair
              </Typography>
            </Typography>

            <Typography className={classes.eachCardContent}>
              Surgery Date:{" "}
              <Typography className={classes.detailsA}>15 Aug 2020</Typography>
            </Typography>

            <Typography className={classes.eachCardContent}>
              Height (cm):{" "}
              <Typography className={classes.detailsA}>163</Typography>
            </Typography>

            <Typography className={classes.eachCardContent}>
              Weight (Ib):{" "}
              <Typography className={classes.detailsA}>110</Typography>
            </Typography>

            <Typography className={classes.eachCardContent}>
              BMI: <Typography className={classes.detailsA}>19</Typography>
            </Typography>
          </Paper>
        </Box>

        {/* Box3 */}
        <Box>
          <Paper
            elevation={0}
            className={`${classes.paper} ${classes.paperActive} ${classes.paperActiveSet}`}
          >
            <Typography
              className={`${classes.eachCardContent} ${classes.eachCardActive}`}
            >
              Anesthesiologist:
              <Typography className={classes.detailsA}>
                Dr.Christina Hardaway
              </Typography>
            </Typography>

            <Typography
              className={`${classes.eachCardContent} ${classes.eachCardActive}`}
            >
              Anesthesiologist Phone:
              <Typography className={classes.detailsA}>301-896-8745</Typography>
            </Typography>

            <Typography
              className={`${classes.eachCardContent} ${classes.eachCardActive}`}
            >
              Anesthesiologist Email:
              <Typography className={classes.detailsA}>
                christina@h3a.com
              </Typography>
            </Typography>
          </Paper>
        </Box>
        {/* Box4*/}
        <Box>
          <Paper elevation={0} className={classes.clear}>
            <Typography>Surgery Clearance</Typography>
            <Button className={classes.yesBtn}>Yes</Button>
          </Paper>
        </Box>

        <Grid container className={classes.downCardContent}>
          <Box className={classes.downCardHeader}>
            <Paper elevation={5} className={classes.ActiveStageCard} square>
              <Typography className={classes.downCardEachShowTab}>
                List of prior Surgeries
              </Typography>
            </Paper>
            <Paper elevation={0}>
              <Typography
                className={`${classes.downCardEachShowTab} ${classes.eachShowActive}`}
              >
                List of Medical Diagnosis
              </Typography>
            </Paper>
            <Paper elevation={0}>
              <Typography
                className={`${classes.downCardEachShowTab} ${classes.eachShowActive}`}
              >
                List of Medication
              </Typography>
            </Paper>
            <Paper elevation={0}>
              <Typography
                className={`${classes.downCardEachShowTab} ${classes.eachShowActive}`}
              >
                Airway Evaluation
              </Typography>
            </Paper>
            <Paper elevation={0}>
              <Typography
                className={`${classes.downCardEachShowTab} ${classes.eachShowActive}`}
              >
                Anesthesia Clearance and Recommendation
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Topsection;
