import React from 'react';
import Fade from 'react-reveal/Fade'
import '../style/AboutScreen.css'

const AboutScreen = () => {
  return (
    <div className='aboutScreen'>
    <Fade left cascade>
      <div>
        <h2>JavaScript</h2>
        <h2>React</h2>
        <h2>React Native</h2>
      </div>
    </Fade>
  </div>
    );
};

export default AboutScreen;
