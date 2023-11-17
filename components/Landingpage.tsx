// src/components/LandingPage.js

import React from 'react';
import '../styles/LandingPage.css'; // Add styling for the landing page
import Image from 'next/image';
import Logo from '../public/logo2.png'

const socialMediaLinks = [
  { name: 'Website', url: 'https://mayuraandrew.tech/whoami', icon: '../images/web.svg' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mayura-alahakoon-827381201/', icon: '../images/linkedin.svg' },
  { name: 'GitHub', url: 'https://github.com/mayura-andrew', icon: '../images/github.svg' },
  { name: 'StackOverFlow', url: 'https://stackoverflow.com/users/18835623/mayura-andrew', icon: '../images/stackoverflow.svg'}
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
