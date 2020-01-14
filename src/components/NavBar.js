import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import StartingPage from './StartingPage.js'
import AboutPage from './AboutPage.js'
import ProjectPage from './ProjectPage.js'
import ContactPage from './ContactPage.js'
import '../style/NavBar.css'

const LinkStyle = {
    textDecoration: 'none',
    color: 'white',
}

const NavBar = () => {
    return(
        // Use React Router to move between screens. 
        // The 'linking' happens inside the Switch component
        // First route without path because it's going to be
        // the first screen.
        <Router>
            <nav className="navbar">
                <Link to="/home" style={LinkStyle}>Home</Link>
                <Link to="/about" style={LinkStyle}>About</Link>
                <Link to="/projects" style={LinkStyle}>Projects</Link>
                <Link to="/contact" style={LinkStyle}>Contact</Link>
            </nav>

            <Switch>
                <Route> 
                    <StartingPage />
                </Route>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/projects">
                    <ProjectPage />
                </Route>
                <Route path="/contact">
                    <ContactPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default NavBar