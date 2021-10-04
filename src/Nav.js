import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
  navbar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    marginRight: "1rem",
    marginLeft: ".5rem",
    width: "3rem",
  },
  icon: {
    padding: "0 1rem",
    fontSize: "12px",
    fontWeight: "500",
    height: "4rem",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      background: "#1a73e8",
      color: theme.palette.background.paper,
    },
  },
  navLeft: {
    flexGrow: 1,
  },
  active: {
    backgroundColor: "#1a73e8",
    color: "#fff",
  },
}));

function Nav() {
  const classes = useStyles();
  return (
    <>
      <AppBar
        className={classes.navbar}
        color="paper"
        position="static"
        justify-content="space-between"
      >
        <Toolbar className={classes.tool} position="right">
          <img
            className={`${classes.smallImage} ${classes.logo}`}
            src="https://res.cloudinary.com/dltxupvq4/image/upload/v1633087169/hImg_1_yaeyhe.png"
            alt=""
          />
          <Typography
            className={`${classes.icon} ${classes.active}`}
            variant="h7"
          >
            PATIENTS
          </Typography>
          <Typography className={classes.icon} variant="h7">
            CALENDAR
          </Typography>
          <Typography className={classes.icon} variant="h7">
            USERS
          </Typography>
          <Typography className={classes.icon} variant="h7">
            BILLING
          </Typography>
          <Typography className={classes.navLeft}></Typography>
          <NotificationsIcon />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Nav;
