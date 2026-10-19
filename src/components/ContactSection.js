import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import Button from './Button';

const ContactStyles = styled.section`
  padding: 16rem 0 8rem;
  .card {
    max-width: 78rem;
    margin: 4rem auto;
    padding: 4rem;
    border-radius: 16px;
    background: var(--deep-dark);
  }
  p {
    font-size: 1.9rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    overflow-wrap: anywhere;
  }
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  a {
    text-decoration: underline;
  }
  .button {
    text-decoration: none;
  }
  @media (max-width: 600px) {
    .card {
      padding: 2.5rem;
    }
  }
`;
export default function ContactSection() {
  return (
    <ContactStyles>
      <div className="container">
        <SectionTitle
          subheading="Have a small project in mind?"
          heading="Let’s talk"
        />
        <div className="card">
          <p>
            I’m interested in focused freelance work: bug fixes, API
            integrations, automation, testing and dashboards.
          </p>
          <p>
            Tell me what you need, your current stack, the expected deliverable
            and your timeline. We can agree on scope before starting.
          </p>
          <p>
            <a href="mailto:rubenalejandro23@gmail.com">
              rubenalejandro23@gmail.com
            </a>
            <br />
            Tucumán, Argentina · Remote
            <br />
            Spanish and English
          </p>
          <div className="actions">
            <Button
              btnText="Write an email"
              btnLink="mailto:rubenalejandro23@gmail.com"
            />
            <Button
              btnText="LinkedIn ↗"
              btnLink="https://www.linkedin.com/in/ruben-bazan-598234201/"
              outline
            />
          </div>
          <div className="actions">
            <Button
              btnText="CV · English"
              btnLink="/cv/Ruben_Bazan_CV_EN.pdf"
              download
              outline
            />
            <Button
              btnText="CV · Español"
              btnLink="/cv/Ruben_Bazan_CV_ES.pdf"
              download
              outline
            />
          </div>
        </div>
      </div>
    </ContactStyles>
  );
}
