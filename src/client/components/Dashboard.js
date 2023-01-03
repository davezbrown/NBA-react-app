// import React, { useState, useEffect } from 'react';
import {Navbar} from './Navbar';
import { makeStyles } from "@material-ui/core/styles";
// import {GetPlayer} from './GetPlayer';
// import { Link } from 'react-router-dom';
// import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  background: {
    backgroundColor: `black`,
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    position: 'absolute',
    zIndex: -1,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
    padding: '20px',
  },
  input: {
    margin: '10px',
  },
  button: {
    margin: '10px',
    display: 'inline-block',
  }
});

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Navbar />
      <h1 style={{ color: "rgb(0, 255, 225)", display: "flex", alignItems: "center", flexDirection:"column", paddingTop: "1rem" }}>Dashboard</h1>
      <p style={{ color: "rgb(0, 255, 225)", display: "flex", alignItems: "center", flexDirection:"column" }}>Welcome to your NBA player dashboard! Manage your favorite players here to view their player cards!</p>
    </div>
  );
}
