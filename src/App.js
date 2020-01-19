import React from 'react';
import NavBar from './components/NavBar.js';
import './style/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import HomeScreen from './components/HomeScreen.js';
import AboutScreen from './components/AboutScreen.js';
import ProjectScreen from './components/ProjectScreen.js';
import ContactScreen from './components/ContactScreen.js';

// Use React Router to move between screens. 
// The 'linking' happens inside the Switch component
// First route without path because it's going to be
// the first screen.
const App = () => {
  return (
    <Router>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path='/about'>
          <AboutScreen />
        </Route>
        <Route exact path='/projects'>
          <ProjectScreen />
        </Route>
        <Route exact path='/contact'>
          <ContactScreen />
        </Route>
        <Route exact path='/'>
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
