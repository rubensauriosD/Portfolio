import { v4 as uuidv4 } from 'uuid';
import pagmachi from '../misIMG/pagmachi.png';
import pagpokes from '../misIMG/pagpokes.png';
import pagvg from '../misIMG/pagvg.png';

const projects = [
  {
    id: uuidv4(),
    name: 'E-Commerce MACHI',
    desc:
      'It is an e-commerce of agricultural products, to use in your garden or create one! And much more...',
    img: pagmachi,
  },
  {
    id: uuidv4(),
    name: 'App VideoGames',
    desc:
      'Development of a SPA using React for the Front End, and Redux as stage management. It consumes data from an API through a Back End depeloped in NodeJS using Express.',
    img: pagvg,
  },
  {
    id: uuidv4(),
    name: 'App Pokemons',
    desc:
      'Development of a SPA using React for the Front End, and Redux as stage management. It consumes data from an API through a Back End depeloped in NodeJS using Express.',
    img: pagpokes,
  },
];

export default projects;
