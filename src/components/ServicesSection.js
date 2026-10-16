import React from 'react';
import styled from 'styled-components';
import { MdCode, MdSettings, MdDesktopMac } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesStyles = styled.section`
  padding: 8rem 0;
  .services { margin-top: 5rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 4rem; }
  .servicesItem { padding: 3rem 2rem; background: var(--deep-dark); border-radius: 12px; }
  @media(max-width: 900px) { .services { grid-template-columns: repeat(2, 1fr); } }
  @media(max-width: 600px) { .services { grid-template-columns: 1fr; } }
`;
const services = [
  ['Bug fixes', 'Investigate errors and fix backend or web application issues.', <MdCode />],
  ['API integrations', 'Connect REST APIs and handle validation, errors and data mapping.', <MdCode />],
  ['Automation', 'Build scripts and tools for repetitive technical workflows.', <MdSettings />],
  ['Testing', 'Add unit and integration coverage, fixtures and mocks.', <MdSettings />],
  ['Dashboards & reports', 'Turn API or SQL data into useful views and reports.', <MdDesktopMac />],
  ['Backend maintenance', 'Improve existing services with a focused, agreed scope.', <MdCode />],
];
export default function ServicesSection() {
  return (
    <ServicesStyles><div className="container">
      <SectionTitle subheading="Small projects with a clear deliverable" heading="How I can help" />
      <div className="services">{services.map(([title, desc, icon]) => <ServicesSectionItem key={title} title={title} desc={desc} icon={icon} />)}</div>
    </div></ServicesStyles>
  );
}
