import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/misIMG/anigif_enhanced-buzz-24540-1374525281-13.gif';
import Button from './Button';

const HeroStyles = styled.section`
  padding: 16rem 0 8rem;
  text-align: center;
  .eyebrow { font-size: 1.6rem; letter-spacing: .18em; text-transform: uppercase; }
  h1 { font-size: clamp(4rem, 8vw, 8rem); margin: 1.5rem 0; font-family: 'Montserrat Bold'; }
  .intro { max-width: 64rem; margin: auto; font-size: 2rem; line-height: 1.6; }
  img { display: block; width: min(100%, 42rem); height: auto; margin: 3rem auto; border-radius: 16px; }
  .actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem; }
  .socials { display: flex; justify-content: center; gap: 2.5rem; font-size: 1.6rem; margin-top: 3rem; }
  @media(max-width: 600px) { padding-top: 13rem; .intro { font-size: 1.7rem; } }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="container">
        <p className="eyebrow">Software Developer · Argentina</p>
        <h1>Hi, I’m Ruben Bazan.</h1>
        <p className="intro">I build backend services, connect APIs and automate technical workflows. Go and Java at work; Python and JavaScript for personal projects.</p>
        <img src={HeroImg} alt="Animated geometric artwork" />
        <div className="actions">
          <Button btnText="Explore projects" btnLink="/projects" />
          <Button btnText="Let’s work together" btnLink="/contact" outline />
        </div>
        <div className="socials">
          <a href="https://github.com/rubensauriosD" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/ruben-bazan-598234201/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </HeroStyles>
  );
}
