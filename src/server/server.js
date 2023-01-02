const express = require('express');
const app = express();
const axios = require('axios');
const jwt = require('jsonwebtoken');

const port = 5000;

const { Pool } = require('pg');

const connectionString = 'postgres://mqksutls:F6YaIs-_DirEo2aUma_wfbUvAtW817DX@mahmud.db.elephantsql.com/mqksutls';

const pool = new Pool({
  connectionString: connectionString,
});

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Signup route
app.post('/api/signup', (req, res) => {
    // Check if email and password are present in request body
    if (!req.body.email || !req.body.password) {
      return res.send({ error: 'Email and password are required' });
    }
  
    // Check if email is already taken
    pool.query('SELECT * FROM users WHERE email = $1', [req.body.email], (error, result) => {
      if (error) {
        console.log(error);
        return res.send({ error: 'Error checking email availability' });
      }
  
      // If email is already taken, return error
      if (result.rowCount > 0) {
        return res.send({ error: 'Email already taken' });
      }
  
      // If email is not taken, insert new user into database
      pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [req.body.email, req.body.password], (error, result) => {
        if (error) {
          console.log(error);
          return res.send({ error: 'Error creating user' });
        }
  
        // Return token if successful
        return res.send({
          token: jwt.sign({
            user_id: result.rows[0].id,
            email: req.body.email
          }, secret, { expiresIn: '7d' })
        });
      });
    });
  });

  // Add player route
app.post('/api/players', (req, res) => {
    // Check if player name and user_id are present in request body
    if (!req.body.name || !req.body.user_id) {
      return res.send({ error: 'Player name and user_id are required' });
    }
  
    // Insert new player into database
    pool.query('INSERT INTO players (name, user_id) VALUES ($1, $2) RETURNING *', [req.body.name, req.body.user_id], (error, result) => {
      if (error) {
        console.log(error);
        return res.send({ error: 'Error adding player' });
      }
  
      // Return new player if successful
      return res.send(result.rows[0]);
    });
  });
  
  // Delete player route
  app.delete('/api/players', (req, res) => {
    const { name, user_id } = req.query;
  
    // Connect to the database
    pool.connect((err, client, done) => {
      if (err) throw err;
  
      // Delete the player from the database using the player name and user id
      client.query('DELETE FROM players WHERE name=$1 AND user_id=$2', [name, user_id], (err, result) => {
        done();
        if (err) {
          console.log(err.stack);
          res.status(400).send({ error: err.stack });
        } else {
          // Send a success response
          res.send({ success: true });
        }
      });
    });
  });
  
  

// Signin route
app.post('/api/signin', (req, res) => {
    // Check if email and password are present in request body
    if (!req.body.email || !req.body.password) {
      return res.send({ error: 'Email and password are required' });
    }
  
    // Query the database for a user with the given email
    pool.query('SELECT * FROM users WHERE email = $1', [req.body.email], (error, result) => {
      if (error) {
        console.log(error);
        return res.send({ error: 'Error signing in' });
      }
  
      // If no user is found, return error
      if (result.rowCount === 0) {
        return res.send({ error: 'Invalid email or password' });
      }
  
      // If a user is found, check if the password is correct
      if (result.rows[0].password !== req.body.password) {
        return res.send({ error: 'Invalid email or password' });
      }
  
      // If the email and password are correct, return a token
      return res.send({
        token: jwt.sign({
          user_id: result.rows[0].id,
          email: req.body.email
        }, secret, { expiresIn: '7d' })
      });
    });
  });
  
  

app.get("/api/players", (req, res) => {
    const userId = req.query.user_id;
  
    // Connect to the database
    pool.connect((err, client, done) => {
      if (err) throw err;
  
      // Query the database to get the players linked to the user's ID
      client.query("SELECT * FROM players WHERE user_id=$1", [userId], (err, result) => {
        done();
        if (err) {
          console.log(err.stack);
          res.status(400).send({ error: err.stack });
        } else {
          // Send the list of players as the response
          res.send(result.rows);
        }
      });
    });
  });
  

app.listen(port, () => console.log(`Listening on port ${port}`));
