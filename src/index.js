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
import {FirebaseAppProvider, AuthCheck} from 'reactfire';
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
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/signin">
            <SignIn></SignIn>
          </Route>
        </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>
);


