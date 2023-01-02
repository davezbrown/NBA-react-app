import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: `black`,
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    position: 'absolute',
    zIndex: -1,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    margin: "1rem 0",
  },
  button: {
    margin: "1rem 0",
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
}));

function SignIn() {
  const classes = useStyles();
  const [form, setForm] = React.useState({ email: "", password: "" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/signin", form)
      .then((res) => {
        // Retrieve the user's id from the response
        const userId = res.data.id;
        // Store the user's id in local storage
        localStorage.setItem("user_id", userId);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.background}>
      <Navbar />
      <form className={classes.form} onSubmit={handleSubmit}>
        <label style={{color: "rgb(0, 255, 225)"}}>
          Email:
          <input
            className={classes.input}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label style={{color: "rgb(0, 255, 225)"}}>
          Password:
          <input
            className={classes.input}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <button className={classes.button} type="submit">
          Sign In
        </button>
      </form>
      <Link to="/signup" className={classes.link} style={{color: "rgb(194, 3, 252)", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        Don't have an account? Sign up here.
      </Link>
    </div>
  );
}

export default SignIn;
