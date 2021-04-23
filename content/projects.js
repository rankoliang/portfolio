import faker from 'faker';

const projects = [
  {
    title: "Where's Waldo?",
    description: faker.lorem.paragraph(),
    tags: ['ruby', 'rails', 'react', 'rspec', 'redux', 'docker', 'aws'],
    imageProps: {
      src: '/images/projects/waldo.png',
      format: 'screenshot',
      alt: 'Department Store level of Waldo app',
    },
    links: {
      github: 'https://github.com/rankoliang/waldo-api',
      visit: 'https://waldo.rankoliang.com/',
    },
  },
  {
    title: 'Odinbook',
    description: faker.lorem.paragraph(),
    tags: ['ruby', 'rails', 'rspec'],
    imageProps: {
      src: '/images/projects/odinbook.png',
      format: 'screenshot',
      alt: 'Screenshot of an Odinbook feed',
    },
    links: {
      github: 'https://github.com/rankoliang/odinbook',
      visit: 'https://odinbook-rl.herokuapp.com',
    },
  },
  {
    title: 'Battleship',
    description: faker.lorem.paragraph(),
    tags: ['react', 'redux'],
    imageProps: {
      src: '/images/projects/battleship.png',
      format: 'screenshot',
      alt: 'A game of battleship',
    },
    links: {
      github: 'https://github.com/rankoliang/battleship',
      visit: 'https://battleship.rankoliang.com',
    },
  },
  {
    title: 'Chess',
    description: faker.lorem.paragraph(),
    tags: ['ruby', 'rspec'],
    imageProps: {
      src: '/images/projects/chess.png',
      width: 1396,
      height: 1279,
      format: 'terminal',
      alt: 'A game of chess on the terminal',
    },
    links: {
      github: 'https://github.com/rankoliang/chess',
    },
  },
];

export default projects;
