import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Typography,
  InputBase,
  Card,
  Button,
} from "@material-ui/core";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";

const useStyles = makeStyles((theme) => ({
  sidecard: {
    backgroundColor: "#E8F5FE",
    height: "100%",
    width: "22%",

    padding: "10px",
  },
  title: {
    color: "#111",
    fontSize: "17px",
    fontWeight: "500",
    marginTop: "10px",
    marginBottom: "10px",
  },
  searchBar: {
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    alignItems: "center",
    border: "1px solid #fff",
    borderRadius: "5px",
    outline: "none",
    cursor: "pointer",
    marginTop: "10px",
    marginBottom: "10px",
  },
  input: {
    backgorundColor: "#fff",
    width: "100%",
    color: "black",
    fontSize: "12px",
    fontWeight: "500",
    fontFamily: "Roboto",
    padding: "8px",
  },
  searchIcon: {
    color: "#959595",
  },
  card: {
    width: "100%",
    padding: "6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "10px",
    color: "#323f4b",
  },
  img: {
    width: "20px",
    height: "20px",
  },
  profileName: {
    color: "black",
  },
  basic: {
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#323f4b",
  },
  active: {
    backgroundColor: "#00A0F0",
  },
  date: {
    fontSize: "13px",
    fontWeight: "400",
  },
  redDot: {
    width: "10px",
    height: "10px",
  },
  btn: {
    width: "20px",
    height: "20px",
  },

  activeTypo: {
    color: "#fff",
  },
}));

function Sidecard() {
  const classes = useStyles();
  return (
    <div className={classes.sidecard}>
      <CssBaseline />
      <Typography className={classes.title}>Patients</Typography>

      {/* Search Bar */}
      <Card className={classes.searchBar}>
        <InputBase className={classes.input} placeholder="Search Patients" />
        <SearchSharpIcon className={classes.searchIcon} />
      </Card>

      {/* Card 1 */}
      <Card className={`${classes.card} ${classes.active}`}>
        <img
          className={classes.img}
          alt="profile"
          src="https://res.cloudinary.com/dltxupvq4/image/upload/v1633087371/largesara_2_d4abxc.png"
        />
        <div>
          <Typography className={`${classes.basic} ${classes.activeTypo}`}>
            Sara Smith
          </Typography>
          <Typography
            className={`${classes.basic} ${classes.date} ${classes.activeTypo}`}
          >
            15 Aug 2020
          </Typography>
        </div>
        <Button className={classes.btn}>
          <img
            alt="red dot"
            className={classes.redDot}
            src="https://res.cloudinary.com/dltxupvq4/image/upload/v1633329761/greendot_cjbiaf.png"
          />
        </Button>
      </Card>

      {/* Card 2  */}
      <Card className={`${classes.card}`}>
        <img
          className={classes.img}
          alt="profile"
          src="https://res.cloudinary.com/dltxupvq4/image/upload/v1633087201/sara_1_h45s2x.png"
        />
        <div>
          <Typography variant="h7" className={`${classes.basic} `}>
            James Johnson
          </Typography>
          <Typography className={`${classes.basic} ${classes.date}`}>
            No clearance
          </Typography>
        </div>
        <Button className={classes.btn}>
          <img
            alt="red dot"
            className={classes.redDot}
            src="https://res.cloudinary.com/dltxupvq4/image/upload/v1633328128/reddot_c5zhgi.jpg"
          />
        </Button>
      </Card>

      {/* card 3 */}

      <Card className={`${classes.card}`}>
        <img
          className={classes.img}
          alt="profile"
          src="https://res.cloudinary.com/dltxupvq4/image/upload/v1633087217/patrice_vysy3g.png"
        />
        <div>
          <Typography variant="h7" className={`${classes.basic} `}>
            Patrick Page
          </Typography>
          <Typography className={`${classes.basic} ${classes.date}`}>
            19 Aug 2020
          </Typography>
        </div>
        <Button className={classes.btn}>
          <img
            alt="red dot"
            className={classes.redDot}
            src="https://res.cloudinary.com/dltxupvq4/image/upload/v1633329761/greendot_cjbiaf.png"
          />
        </Button>
      </Card>

      <Card className={`${classes.card}`}>
        <img
          className={classes.img}
          alt="profile"
          src="https://res.cloudinary.com/dltxupvq4/image/upload/v1633087156/4thguy_bnzk9a.png"
        />
        <div>
          <Typography variant="h7" className={`${classes.basic} `}>
            Derek Diamon
          </Typography>
          <Typography className={`${classes.basic} ${classes.date}`}>
            21 Aug 2020
          </Typography>
        </div>
        <Button className={classes.btn}>
          <img
            alt="red dot"
            className={classes.redDot}
            src="https://res.cloudinary.com/dltxupvq4/image/upload/v1633329761/greendot_cjbiaf.png"
          />
        </Button>
      </Card>
    </div>
  );
}

export default Sidecard;
