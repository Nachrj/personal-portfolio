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
  return (
    <div className='contactStyle'>
      <WarpBackground />
      <Fade top>
        <h1>Contact</h1>
      </Fade>
      <div>
        <ContactForm />
        <GitHubLogo />
        <LinkedInLogo />
        <InstagramLogo />
      </div>
    </div>
  );
};

export default ContactScreen;
