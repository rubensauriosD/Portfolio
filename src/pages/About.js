import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const AboutStyles = styled.main`
  padding: 16rem 0 8rem;
  .intro { max-width: 76rem; margin: 4rem auto; font-size: 1.9rem; line-height: 1.7; }
  .actions { display: flex; flex-wrap: wrap; gap: 1.5rem; }
  section { max-width: 86rem; margin: 5rem auto; }
  h3 { font-size: 3rem; margin-bottom: 2rem; }
  h4 { font-size: 2rem; margin-bottom: 1rem; }
  article { border-left: 2px solid #aa8a78; padding: 1rem 0 1rem 2.5rem; margin: 2.5rem 0; }
  p, li { font-size: 1.7rem; line-height: 1.8; }
  .date { color: #e6c7b5; }
  ul { list-style: disc; padding-left: 2rem; }
`;
export default function About() {
  return (
    <AboutStyles><div className="container">
      <SectionTitle subheading="Experience, skills & education" heading="My background" />
      <div className="intro">
        <p>I’m Ruben Bazan, a Software Developer based in Tucumán, Argentina. I focus on backend development, API integrations and automation, with experience in payment systems and personal full-stack applications.</p>
        <p>I communicate in Spanish and English, in writing and on calls.</p>
        <div className="actions"><Button btnText="CV · English" btnLink="/cv/Ruben_Bazan_CV_EN.pdf" download /><Button btnText="CV · Español" btnLink="/cv/Ruben_Bazan_CV_ES.pdf" download outline /></div>
      </div>
      <section><h3>Experience</h3>
        <article><h4>Software Developer · Mercado Libre</h4><p className="date">July 2022 — present</p><p>Backend development with Go and Java for payment systems. API integrations, unit and integration testing, technical troubleshooting, SQL analysis and observability with logs and metrics. Automation of technical workflows and reporting.</p></article>
        <article><h4>Programming Tutor · Coderhouse</h4><p className="date">February 2022 — December 2023</p><p>Reviewed backend programming challenges, answered student questions and provided technical feedback.</p></article>
        <article><h4>Full-stack Developer Intern · MACHI</h4><p className="date">October — November 2021</p><p>Contributed to the frontend and backend of a collaborative e-commerce application for agricultural products.</p></article>
      </section>
      <section><h3>Technical skills</h3><ul>
        <li>Backend: Go, Java, Python, Node.js, Express and REST APIs.</li>
        <li>Frontend and personal applications: JavaScript, React, Redux and Electron.</li>
        <li>Data: SQL, BigQuery, SQLite and NoSQL.</li>
        <li>Quality and tooling: unit and integration testing, mocks, Git, GitHub and Postman.</li>
        <li>Observability and automation: Datadog, Grafana, logs, metrics and AI-assisted workflows.</li>
      </ul></section>
      <section><h3>Education & training</h3>
        <article><h4>Technical Degree in Programming · UTN</h4><p className="date">2020 — in progress</p></article>
        <article><h4>Backend Java · Mercado Libre / Digital House</h4><p className="date">2022</p></article>
        <article><h4>Full Stack Web Developer · Henry</h4><p className="date">2021</p></article>
        <article><h4>Additional training</h4><p>Python (2024), SOLID principles and design patterns (2023), Datadog (2023), and freeCodeCamp web development courses (2021).</p></article>
      </section>
      <section><h3>Personal work</h3><p>My public portfolio includes personal applications and training projects. Professional source code and internal company tools remain private.</p><Button btnText="Explore projects" btnLink="/projects" /></section>
    </div></AboutStyles>
  );
}
