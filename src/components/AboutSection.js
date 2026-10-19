import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import Button from './Button';
import AboutImg from '../assets/misIMG/IMG_20210611_164847_179.jpg';

const AboutStyles = styled.section`
  padding: 8rem 0;
  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }
  .section-title {
    text-align: left;
  }
  .copy {
    margin-top: 2.5rem;
    font-size: 1.8rem;
    line-height: 1.7;
  }
  img {
    max-height: 48rem;
    border-radius: 16px;
  }
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  @media (max-width: 768px) {
    .layout {
      grid-template-columns: 1fr;
    }
    img {
      max-height: 38rem;
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutStyles>
      <div className="container layout">
        <div>
          <SectionTitle
            subheading="Backend, integrations & automation"
            heading="About me"
          />
          <p className="copy">
            I’m a Software Developer at Mercado Libre, working with Go and Java
            on payment systems since 2022. My experience includes API
            integrations, automated testing, troubleshooting and observability.
          </p>
          <p className="copy">
            Outside work, I build practical applications with Python and
            JavaScript. I’m interested in small freelance projects with a clear
            scope and deliverable.
          </p>
          <div className="actions">
            <Button btnText="My background" btnLink="/about" />
            <Button
              btnText="CV · English"
              btnLink="/cv/Ruben_Bazan_CV_EN.pdf"
              download
              outline
            />
          </div>
        </div>
        <img src={AboutImg} alt="Ruben Bazan" loading="lazy" />
      </div>
    </AboutStyles>
  );
}
