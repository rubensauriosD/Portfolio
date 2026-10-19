import pagmachi from '../misIMG/pagmachi.png';
import pagpokes from '../misIMG/pagpokes.png';
import pagvg from '../misIMG/pagvg.png';
import tracker from '../misIMG/tracker-illustration.svg';
import fitapp from '../misIMG/fitapp-illustration.svg';
import csharp from '../misIMG/csharp-projects.svg';

const projects = [
  {
    id: 'lol-tracker',
    name: 'LoL Personal Stats Tracker',
    category: 'Personal project',
    desc:
      'A local dashboard for League of Legends account, ranked and match statistics, integrating Riot Games APIs.',
    stack: 'Python · SQLite · REST APIs · JavaScript',
    img: tracker,
    source: 'https://github.com/rubensauriosD/lol-stats',
    illustration: true,
    features: [
      'Account, ranked and match data in one dashboard.',
      'SQLite caching to reuse API responses.',
      'API rate limit handling.',
    ],
  },
  {
    id: 'fitapp',
    name: 'FitApp',
    category: 'Personal project',
    desc:
      'A personal application for workout planning, nutrition and pantry management, with local data persistence.',
    stack: 'JavaScript · Electron · localStorage',
    img: fitapp,
    source: 'https://github.com/rubensauriosD/FitApp',
    illustration: true,
    features: [
      'Workout calendar and training timer.',
      'Nutrition, pantry and shopping tools.',
      'JSON import and export for local data.',
    ],
  },
  {
    id: 'machi',
    name: 'E-Commerce MACHI',
    category: 'Collaborative training project · 2021',
    desc:
      'An e-commerce application for agricultural products. I contributed to both the web storefront and the backend.',
    stack: 'JavaScript · React · Node.js · Express',
    img: pagmachi,
    source: 'https://github.com/rubensauriosD/E-commerce-MACHI',
    features: [
      'Collaborative full-stack development.',
      'Product browsing and e-commerce workflows.',
    ],
  },
  {
    id: 'n-commerce',
    name: 'N-Commerce',
    category: 'Desktop application · Training project',
    desc:
      'A C# desktop application for managing products, stock, sales and business reports, backed by a SQL database.',
    stack: 'C# · .NET Framework · Windows Forms · SQL · Entity Framework',
    img: csharp,
    illustration: true,
    source: 'https://github.com/rubensauriosD/N-Commerce',
    features: [
      'Product, inventory and sales management.',
      'SQL persistence with Entity Framework and repository interfaces.',
      'Business reports built with ReportViewer.',
    ],
  },
  {
    id: 'x-commerce',
    name: 'X-Commerce',
    category: 'Desktop application · Training project',
    desc:
      'A C# desktop application for managing products, stock, customers and sales, with local text-file persistence.',
    stack: 'C# · .NET Framework · Windows Forms · Text files',
    img: csharp,
    illustration: true,
    source: 'https://github.com/rubensauriosD/X-Commerce',
    features: [
      'Product, customer and employee management.',
      'Stock adjustments, invoicing and customer account workflows.',
      'Local persistence through text files.',
    ],
  },
  {
    id: 'videogames',
    name: 'VideoGames',
    category: 'Training project',
    desc:
      'A single-page application that consumes video game data through a Node.js API.',
    stack: 'React · Redux · Node.js · Express',
    img: pagvg,
    source: 'https://github.com/rubensauriosD/PI-Videgames',
    features: [
      'API integration through an Express backend.',
      'Client-side state management with Redux.',
    ],
  },
  {
    id: 'pokemon',
    name: 'Pokémon',
    category: 'Training project',
    desc:
      'A single-page application combining Pokémon API data with a backend and database.',
    stack: 'React · Redux · Node.js · Sequelize',
    img: pagpokes,
    source: 'https://github.com/rubensauriosD/PI-Pokemon',
    features: [
      'External API integration.',
      'Backend data persistence with Sequelize.',
    ],
  },
];
export default projects;
