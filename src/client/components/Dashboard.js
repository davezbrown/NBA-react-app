import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import GetPlayer from './GetPlayer';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";

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

function Dashboard() {
  const classes = useStyles();
  const [players, setPlayers] = useState([]);
  const [form, setForm] = useState({ playerName: '' }); // state to hold player name
  const userId = localStorage.getItem('user_id'); // get user_id from local storage
  const [playerName, setPlayerName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true : false);


  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/players?user_id=${userId}`)
      .then(res => setPlayers(res.data))
      .catch(err => console.log(err));
  }, [userId]);

  // function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form.playerName);
  }

  // function to handle form input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  // function to handle adding a player to the database
  const handleAdd = () => {
    axios
      .post(`http://localhost:5000/api/players`, { name: form.playerName, user_id: userId })
      .then(res => {
        // update players state with new player
        setPlayers([...players, res.data]);
        // reset playerName state
        setForm({ playerName: '' });
      })
      .catch(err => console.log(err));
  }

  // function to handle deleting a player from the database
  const handleDelete = (playerId) => {
    axios
    .delete(`http://localhost:5000/api/players`, { params: { name: playerName, user_id: userId }})
    .then(() => {
      // update players state by filtering out the deleted player
      setPlayers(players.filter(player => player.name !== playerName));
      // reset playerName state
      setPlayerName('');
    })
    .catch(err => console.log(err));
}
  

  return (
    <div className={classes.background}>
      <Navbar />
      {isLoggedIn ? (
        <>
      <h1 style={{ color: "rgb(0, 255, 225)", display: "flex", alignItems: "center", flexDirection:"column", paddingTop: "1rem" }}>Dashboard</h1>
      <p style={{ color: "rgb(0, 255, 225)", display: "flex", alignItems: "center", flexDirection:"column" }}>Welcome to your NBA player dashboard! Manage your favorite players here to view their player cards!</p>
      <form onSubmit={handleSubmit} className={classes.form}>
        <label style={{color: "rgb(0, 255, 225)"}}>
          Player Name:
          <input
            className={classes.input}
            type="text"
            name="playerName"
            value={form.playerName}
            onChange={handleChange}
          />
        </label>
        <div style={{display: "inline-block"}}>
        <button style={{display: 'inline-block', float: "left"}} className={classes.button} type="submit" onClick={handleAdd}>Add Player</button>
        <button style={{display: 'inline-block', float: "right"}} className={classes.button} type="submit" onClick={handleDelete}>Delete Player</button>
        </div>
      </form >
      {players.map(player => (
        <GetPlayer name={player.name} />
      ))}
      </>
          ) : (
            <>
              <h1 style={{ color: "rgb(0, 255, 225)", display: "flex", alignItems: "center", flexDirection:"column" }}>Please Sign In</h1>
              <p style={{ color: "rgb(0, 255, 225)", display: "flex", alignItems: "center", flexDirection:"column" }}>You must be signed in to view your dashboard.</p>
              <div style={{display: "flex", alignItems: "center", flexDirection:"column"}}>
              <Button color="black">
                <Link style={{textDecoration: "none", color: "rgb(194, 3, 252)"}} className={classes.link} to="/signin">Sign In</Link>
              </Button>
              </div>
            </>
          )}
    </div>
  );
}


export default Dashboard;
