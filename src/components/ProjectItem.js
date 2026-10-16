import React from 'react';
import styled from 'styled-components';

const ProjectStyles = styled.article`
  height: 100%; background: var(--deep-dark); border-radius: 14px; overflow: hidden;
  img { display: block; height: 24rem; object-fit: cover; }
  .content { padding: 2.5rem; }
  .category { font-size: 1.3rem; text-transform: uppercase; letter-spacing: .08em; }
  h3 { font-size: 2.5rem; margin: 1.2rem 0; }
  p, li, summary, a { font-size: 1.6rem; line-height: 1.6; }
  .stack { margin: 1.5rem 0; color: #e6c7b5; }
  summary { cursor: pointer; margin: 1.5rem 0; }
  ul { padding-left: 2rem; list-style: disc; }
  a { display: inline-block; margin-top: 1.5rem; text-decoration: underline; }
`;
export default function ProjectItem({ name, title, img, desc, category, stack, features = [], source, illustration }) {
  return (
    <ProjectStyles>
      <img src={img} alt={illustration ? `${name} — project illustration` : `${name || title} application screenshot`} loading="lazy" />
      <div className="content">
        <p className="category">{category}</p><h3>{name || title}</h3><p>{desc}</p>
        {stack && <p className="stack">{stack}</p>}
        {features.length > 0 && <details><summary>What it does</summary><ul>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul></details>}
        {source ? <a href={source} target="_blank" rel="noopener noreferrer">View source on GitHub ↗</a> : <p>Local project · public demo not available yet.</p>}
      </div>
    </ProjectStyles>
  );
}
