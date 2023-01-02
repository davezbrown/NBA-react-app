import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './client/components/Home';
import About from './client/components/About';
import Dashboard from './client/components/Dashboard';
import SignUp from './client/components/SignUp'
import SignIn from './client/components/SignIn'
import './index.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
    </Router>
  </React.StrictMode>
);


