import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import {LandingPage} from './LandingPage'
import { Menu } from './Menu';
import { Footer } from './Footer';

function App() {
  return (
    <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/track">Track</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/track" component={LandingPage} />
            <Route exact path="/contact" component={Footer} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
