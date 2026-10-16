import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  background: var(--deep-dark); padding: 5rem 0 2rem;
  .columns { display: grid; grid-template-columns: 2fr 1fr 1.5fr; gap: 4rem; }
  h3 { font-size: 2.4rem; margin-bottom: 1.5rem; }
  p, a { font-size: 1.6rem; line-height: 1.8; overflow-wrap: anywhere; }
  nav a, .contact a { display: block; }
  .copyright { margin-top: 4rem; border-top: 1px solid var(--gray-2); padding-top: 2rem; font-size: 1.4rem; }
  @media(max-width: 768px) { .columns { grid-template-columns: 1fr; gap: 3rem; } }
`;
export default function Footer() {
  return (
    <FooterStyles><div className="container">
      <div className="columns">
        <div><h3>Ruben Bazan</h3><p>Software Developer focused on backend services, API integrations and automation.</p><p>Tucumán, Argentina · Remote</p></div>
        <nav aria-label="Footer navigation"><h3>Explore</h3><Link to="/">Home</Link><Link to="/about">About</Link><Link to="/projects">Projects</Link><Link to="/contact">Contact</Link></nav>
        <div className="contact"><h3>Get in touch</h3><a href="mailto:rubenalejandro23@gmail.com">rubenalejandro23@gmail.com</a><a href="tel:+543863572444">+54 3863 572444</a><a href="https://github.com/rubensauriosD" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/ruben-bazan-598234201/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Ruben Bazan</p>
    </div></FooterStyles>
  );
}
