import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/misIMG/IMG_20210611_164847_179.jpg';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .aboutImg {
    width: 85%;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <PText>
            I am a Full-Stack Developer from Tucuman, Argentina. Oriented to
            back-end, the area that I always liked the most, but I am interested
            in the Front and I always like to keep learning new technologies.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Works" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
