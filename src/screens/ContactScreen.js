import React from 'react';
import ContactForm from '../components/ContactForm';
import '../style/ContactScreen.css';
//SVGs
import GitHubLogo from '../assets/svg/GitHubLogo.js'
import InstagramLogo from '../assets/svg/InstagramLogo.js'
import LinkedInLogo from '../assets/svg/LinkedInLogo.js'

import WarpBackground from '../components/WarpBackground';
import Fade from 'react-reveal/Fade';

const ContactScreen = () => {

  const handleClick = (link) => {
    let newLink = `https://www.${link}`
    window.open(newLink)
  }

  return (
    <div className='contactStyle'>
      <WarpBackground />
      <Fade top>
        <h1>Contact</h1>
      </Fade>
      <ContactForm />
      <div className='svgButtons'>

        <button onClick={() => handleClick('github.com/nachrj')}>
          <GitHubLogo className='svgStyle' />
        </button>

        <button onClick={() => handleClick('linkedin.com/in/ignaciorodriguezjusto/')}>
          <LinkedInLogo className='svgStyle' />
        </button>

        <button onClick={() => handleClick('instagram.com/nachrj_')}>
          <InstagramLogo className='svgStyle' />
        </button>

      </div>
    </div>
  );
};

export default ContactScreen;
