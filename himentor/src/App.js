import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { HashRouter, Route } from 'react-router-dom';
import { Link} from 'react-router-dom';
import { browserHistory } from 'react-router';


import Homepage from './pages/Homepage';
import Dashboard from './pages/dashboard';
import Login from './pages/Login';




function App() {
  return (
    <HashRouter >
      <div>
      <Route path={"/home"} component={Homepage} />
      <Route path={"/dashboard"} component = {Dashboard}/>

      </div>
      {/* <Homepage/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ahahah lemons
        </a>
        
      </header> */}

      {/* <Dashboard/> */}
      <Route path={"/Login"} component={Login} />
      </HashRouter >
  );
}

export default App;
