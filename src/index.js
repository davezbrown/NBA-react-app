import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './client/components/Home';
import {About} from './client/components/About';
import {Dashboard} from './client/components/Dashboard';
import {SignIn} from './client/components/SignIn'
import './index.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import {firebaseConfig} from './firebaseConfig';
import {FirebaseAppProvider, useSigninCheck} from 'reactfire';
import 'firebase/auth';
import {Provider} from 'react-redux';
import {store} from './client/Redux/store';
import * as ReactDOMClient from 'react-dom/client';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}>

      <Router>
        <Switch>
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
        </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>
);


