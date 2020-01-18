import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { useRef, useState, useEffect } from 'react';
import StartingPage from './StartingPage.js'
import AboutPage from './AboutPage.js'
import ProjectPage from './ProjectPage.js'
import ContactPage from './ContactPage.js'
import '../style/NavBar.css'

const NavBar = () => {

    const [hoverRef, isHovered] = useHover();
    const [hoverRef1, isHovered1] = useHover();
    const [hoverRef2, isHovered2] = useHover();
    const [hoverRef3, isHovered3] = useHover();

    return(
        // Use React Router to move between screens. 
        // The 'linking' happens inside the Switch component
        // First route without path because it's going to be
        // the first screen.
        <Router>
            <nav className="navbar">
            {/* This changes de link's class name depending on if its hovered or not */}
                <Link to="/home" ref={hoverRef} className={ isHovered ? 'linkStyleHover' : 'linkStyle' }>Home</Link>
                <Link to="/about" ref={hoverRef1} className={ isHovered1 ? 'linkStyleHover' : 'linkStyle' }>About</Link>
                <Link to="/projects" ref={hoverRef2} className={ isHovered2 ? 'linkStyleHover' : 'linkStyle' }>Projects</Link>
                <Link to="/contact" ref={hoverRef3} className={ isHovered3 ? 'linkStyleHover' : 'linkStyle' }>Contact</Link>
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

// Hook
function useHover() {
    const [value, setValue] = useState(false);
  
    const ref = useRef(null);
  
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
  
    useEffect(
      () => {
        const node = ref.current;
        if (node) {
          node.addEventListener('mouseover', handleMouseOver);
          node.addEventListener('mouseout', handleMouseOut);
  
          return () => {
            node.removeEventListener('mouseover', handleMouseOver);
            node.removeEventListener('mouseout', handleMouseOut);
          };
        }
      },
    );
  
    return [ref, value];
  }

export default NavBar