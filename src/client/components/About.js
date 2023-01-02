import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    background: {
        backgroundColor: `black`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
});

function About() {
    const classes = useStyles();

  return (
    <div className={classes.background}>
      <Navbar />
      <h1 style={{color: "rgb(0, 255, 225)"}}>About</h1>
      <p style={{color: "rgb(0, 255, 225)"}}>This is an about page for the NBA Stat Reference app.</p>
    </div>
  );
}

export default About;
