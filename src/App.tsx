import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import {LandingPage} from './components/LandingPage'
import { MenuList } from './components/Menu';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Track } from './components/Track';
import { Contact } from './components/Contact';

function App() {
  return (
    <Router>
        <div className="app-container">
          <div className="app-links flex-row">
            <Nav title={"HOME"} link={"/"} />
            <Nav title={"MENU"} link={"/menu"} />
            <Nav title={"TRACK"} link={"/track"} />
            <Nav title={"CONTACT"} link={"/contact"} />
          </div>
          <div className="app">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/menu" component={MenuList} />
              <Route exact path="/track" component={Track} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
