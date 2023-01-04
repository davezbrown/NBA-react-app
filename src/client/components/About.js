import React from 'react';
import { Navbar } from './Navbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  background: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    position: 'absolute',
    zIndex: -1,
  },
});

export const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={{ padding:"1rem", color: 'rgb(0, 255, 225)' }}>About</h1>
      </div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p style={{ color: 'rgb(0, 255, 225)' }}>
          Welcome to the NBA Stat Reference App!
        </p>
      </div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p style={{ width: "75%", color: 'rgb(0, 255, 225)' }}>
          NBA Stat Reference makes it easy to stay up to date with how your
          favorite NBA players are doing. You can use the home page to look up
          the average stats of any player for the current NBA season, or you can
          log in to save your favorite players to your dashboard and see their
          player cards all in one place!
        </p>
      </div>
    </div>
  );
};
