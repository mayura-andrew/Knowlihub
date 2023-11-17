// src/components/LandingPage.js

import React from 'react';
import '../styles/LandingPage.css'; // Add styling for the landing page
import Image from 'next/image';
import Logo from '../public/logo2.png'

const socialMediaLinks = [
  { name: 'Website', url: 'https://mayuraandrew.tech/whoami', icon: '../public/web.svg' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mayura-alahakoon-827381201/', icon: 'https://raw.githubusercontent.com/mayura-andrew/Knowlihub/2156f0c5103326b5fa3b966399fe5aa296df62ff/public/images/linkedin.svg' },
  { name: 'GitHub', url: 'https://github.com/mayura-andrew', icon: '../public/github.png' },
  { name: 'StackOverFlow', url: 'https://stackoverflow.com/users/18835623/mayura-andrew', icon: '../public/stackoverflow.svg'}
  // Add more social media links as needed
];
const LandingPage = () => {
  return (
    <div className="landing-container">
      <Image src={Logo} alt="Knowlihub Logo" className="logo" width={500} height={500} />
      <h1>Coming Soon ...🚀</h1>
      <header>
      <nav>
        <div className="social-links">
          {socialMediaLinks.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
              <Image src={`/${link.icon}`} alt={link.name} width={20} height={20} />
            </a>
          ))}
        </div>
      </nav>
    </header>
    </div>
  );
};

export default LandingPage;
