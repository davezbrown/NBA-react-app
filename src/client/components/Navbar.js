import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Logo from '../assets/images/basketball.png';
import { Link, useHistory } from 'react-router-dom';
import {AuthCheck, useAuth} from 'reactfire'

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

export const Navbar = () => {
  const classes = useStyles();
  const auth = useAuth();
  const history = useHistory();

  const signOut = async () => {
    await auth.signOut();
    history.push("/");
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ alignItems: "center", justifyContent: "center", backgroundColor: "rgb(0, 255, 225)" }}>
          <Link to="/">
            <img src={Logo} alt="Logo" className={classes.logo} />
          </Link>
          <Typography style={{paddingLeft: "2rem", flexDirection: 'column', display: 'flex', alignItems: 'left', justifyContent: 'center', color: 'black' }} variant="h2" className={classes.title}>
            NBA Stat Reference
          </Typography>
          <Suspense fallback={'loading...'}>
          <AuthCheck fallback={
          <Button style={{color: "black"}}>
              <Link className={classes.link} to="/signin">Sign In</Link>
          </Button>
          }>
          <Button color="black">
            <Link className={classes.link} to="/">Home</Link>
          </Button>
          <Button color="black">
            <Link className={classes.link} to="/dashboard">Dashboard</Link>
          </Button>
          <Button color="black">
            <Link className={classes.link} to="/about">About</Link>
          </Button>
          <Button color="secondary" onClick={signOut}>Sign Out</Button>
          </AuthCheck>
          </Suspense>
        </Toolbar>
      </AppBar>
    </div>
  );
}