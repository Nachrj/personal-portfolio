import React from 'react';
import '../style/HomeScreen.css';
import Fade from 'react-reveal/Fade';
import WarpBackground from '../components/WarpBackground.js';
import NachoLogo from '../assets/NachoLogo.png';

const nameTitle = {
  fontWeight: 'bold',
}

const subTitle = {
  fontSize: '2.5vh'
}

const introTitle = {
  fontSize: '3vh',
}

const HomeScreen = () => {
  return (
    <div className='homeScreenStyle'>
      <WarpBackground />
      <div className='titleStyle'>
        <Fade top>
          <img 
            src={NachoLogo}
            alt='My personal logo' 

            />
          <h1 style={introTitle}>Hello, I'm</h1>
        </Fade>
        <h1 style={nameTitle}>Ignacio Rodriguez Justo</h1>
        <Fade bottom>
          <span style={subTitle}>Mobile and Web Developer</span>
        </Fade>
      </div>
    </div>
  );
};

export default HomeScreen;
