import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Logo from '../assets/images/basketball.png';
import { Link } from 'react-router-dom';
import LogOut from './LogOut'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: "50px",
  },
  link: {
    color: "black",
    textDecoration: "none",
    },
    }));

function Navbar() {
  const classes = useStyles();

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true : false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ alignItems: "center", justifyContent: "center", backgroundColor: "rgb(0, 255, 225)" }}>
          <Link to="/">
            <img src={Logo} alt="Logo" className={classes.logo} />
          </Link>
          <Typography style={{paddingLeft:"13rem", flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black' }} variant="h2" className={classes.title}>
            NBA Stat Reference
          </Typography>
          <Button color="black">
            <Link className={classes.link} to="/">Home</Link>
          </Button>
          {!isLoggedIn && (
            <>
              <Button color="black">
                <Link className={classes.link} to="/signup">Sign Up</Link>
              </Button>
              <Button color="black">
                <Link className={classes.link} to="/signin">Sign In</Link>
              </Button>
            </>
          )}
          {isLoggedIn && (
            <>
              <Button color="black">
                <Link className={classes.link} to="/dashboard">Dashboard</Link>
              </Button>
              <Button color="black" onClick={LogOut}>
                Log Out
              </Button>
            </>
          )}
          <Button color="black">
            <Link className={classes.link} to="/about">About</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
  
  
}

export default Navbar;
