import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/misIMG/yo.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Ruben Bazan</span>
              </p>
              <h2 className="about__heading">A full-stack Web developer</h2>
              <div className="about__info">
                <PText>
                  I am a Back-End oriented Full Stack Developer. I started
                  studying at the National Technological University in the
                  Province of Tucumán. On the one hand I came to that world of
                  programming looking for an important job opportunity and on
                  the other hand then with the passage of time while I was
                  immersed in that world of technology I came to the conclusion
                  that I am passionate about which I am very prepared and eager
                  to follow my path with firmness and dedication, carrying out
                  projects and growing both personally and professionally.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Escuela Benjamin Zorrilla']}
              />
              <AboutInfoItem
                title="Collage"
                items={['Colegio Maria de la Esperanza']}
              />
              <AboutInfoItem
                title="Varsity"
                items={[
                  'Universidad Tecnologica Nacional',
                  'Universidad Nacional de Tucuman',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Full"
                items={[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'C#',
                  'REACT',
                  'Redux',
                  'Node.js',
                ]}
              />
              <AboutInfoItem
                title="Stack"
                items={[
                  'Sass',
                  'Less',
                  'Bootstrap',
                  'Express',
                  'Sequilize',
                  'SQL',
                  'PostgreSQL',
                  'PHP',
                  'Git',
                  'Github',
                  'Postman',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2021-"
                items={['Freelance web Developer']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
