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
        <div className="App">
          <Nav title={"HOME"} link={"/"} />
          <Nav title={"MENU"} link={"/menu"} />
          <Nav title={"TRACK"} link={"/track"} />
          <Nav title={"CONTACT"} link={"/contact"} />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/menu" component={MenuList} />
            <Route exact path="/track" component={Track} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
