import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { GetPlayer } from './GetPlayer';
import { server_calls } from '/Users/david/Coding-Temple/Capstone/nba-stat-ref/src/api/Server';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Suspense } from 'react';

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
    border: '2px solid rgb(0, 255, 225)',
  },
  button: {
    margin: '10px',
    display: 'block',
    margin: '0 auto',
  },
  deleteButton: {
    backgroundColor: 'rgb(255, 0, 0)',
    margin: '10px',
    display: 'block',
    margin: '0 auto',
  },
  addButton: {
    backgroundColor: 'rgb(0, 255, 225)',
    margin: '10px',
    display: 'block',
    margin: '0 auto',
    color: "black"
  },
});

export const Dashboard = () => {
  const classes = useStyles();
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await server_calls.get();
      setPlayers(response);
    }
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await server_calls.create({ name: playerName });
    setPlayerName('');
    const response = await server_calls.get();
    setPlayers(response);
  };

  const handleDelete = async (playerId) => {
    await server_calls.delete(playerId);
    const response = await server_calls.get();
    setPlayers(response);
  };

  return (
    <div className={classes.background} style={{ overflowX: 'hidden' }}>
      <Navbar />
      <h1 style={{ color: 'rgb(0, 255, 225)', display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '1rem' }}>
        Dashboard
      </h1>
      <p style={{ color: 'rgb(0, 255, 225)', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        Welcome to your NBA player dashboard! Manage your favorite players here to view their player cards!
      </p>
      <p style={{ paddingTop: "1rem", color: 'rgb(0, 255, 225)', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        Make sure to enter the player's FULL NAME and use CORRECT SPELLING!
      </p>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.input}
          label="Player Name"
          value={playerName}
          onChange={(event) => setPlayerName(event.target.value)}
          required
          InputLabelProps={{
            style: { color: 'rgb(0, 255, 225)' }
          }}
          InputProps={{
            style: { color: 'rgb(0, 255, 225)' }
          }}
        />
        <Button className={classes.addButton} type="submit" variant="contained" color="primary">
          Add Player
        </Button>
      </form>
      <Suspense fallback="Loading your favorite players...">
        <Grid container spacing={6}>
          {players.map((player) => (
            <Grid style={{paddingBottom: '5rem'}} item xs={4} key={player.id}>
              <GetPlayer
                name={player.name}
                id={player.id}
                handleDelete={handleDelete}
              />
              <Button className={classes.deleteButton} onClick={() => handleDelete(player.id)} variant="contained" color="secondary">
              Delete Player
            </Button>
            </Grid>
          ))}
        </Grid>
      </Suspense>
    </div>
  );
}  