import React from 'react';
import Image from 'next/image';
import '../styles/navStyle.css';

const socialMediaLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mayura-alahakoon-827381201/', icon: 'images/linkedin.svg' },
  { name: 'GitHub', url: 'https://github.com/mayura-andrew', icon: 'images/github.svg' },
  { name: 'StackOverFlow', url: 'https://stackoverflow.com/users/18835623/mayura-andrew', icon: 'images/stackoverflow.svg'}
  // Add more social media links as needed
];

const Header = () => {
  return (
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
  );
};

export default Header;
