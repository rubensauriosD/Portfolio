import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import projects from '../assets/data/projects';

const ProjectsStyles = styled.main`
  padding: 16rem 0 8rem;
  .intro {
    max-width: 70rem;
    margin: 3rem auto;
    text-align: center;
    font-size: 1.8rem;
    line-height: 1.7;
  }
  .search {
    max-width: 60rem;
    margin: 4rem auto;
  }
  label {
    display: block;
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  input {
    width: 100%;
    padding: 1.5rem;
    font-size: 1.8rem;
    color: var(--white);
    background: var(--deep-dark);
    border: 1px solid var(--gray-1);
    border-radius: 8px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 31rem), 1fr));
    gap: 3rem;
  }
  .empty {
    font-size: 1.8rem;
    padding: 3rem 0;
  }
`;
export default function Projects() {
  const [query, setQuery] = useState('');
  const visible = projects.filter((project) =>
    `${project.name} ${project.stack} ${project.category}`
      .toLowerCase()
      .includes(query.trim().toLowerCase())
  );
  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle
          subheading="Personal applications & training projects"
          heading="Projects"
        />
        <p className="intro">
          A selection of things I’ve built outside work. FitApp and LoL Personal
          Stats Tracker currently run locally; the training projects link to
          their public source code.
        </p>
        <div className="search">
          <label htmlFor="project-search">
            Search by project or technology
            <input
              id="project-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try Python, React or FitApp"
            />
          </label>
        </div>
        <div className="grid">
          {visible.map((project) => (
            <ProjectItem
              key={project.id}
              name={project.name}
              img={project.img}
              desc={project.desc}
              category={project.category}
              stack={project.stack}
              features={project.features}
              source={project.source}
              illustration={project.illustration}
            />
          ))}
        </div>
        {visible.length === 0 && (
          <p className="empty" role="status">
            No projects match this search.
          </p>
        )}
      </div>
    </ProjectsStyles>
  );
}
