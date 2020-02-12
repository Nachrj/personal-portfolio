import React from 'react';
import NavBar from './screens/NavBar.js';
import './style/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.js';
import AboutScreen from './screens/AboutScreen.js';
import ProjectScreen from './screens/ProjectScreen.js';
import ContactScreen from './screens/ContactScreen.js';

// Use React Router to move between screens. 
// The 'linking' happens inside the Switch component
// First route without path because it's going to be
// the first screen.
const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="main-view">
        <Switch className="main-view">
          <Route exact path="/about">
            <AboutScreen />
          </Route>
          <Route exact path="/portfolio">
            <ProjectScreen />
          </Route>
          <Route exact path="/contact">
            <ContactScreen />
          </Route>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
