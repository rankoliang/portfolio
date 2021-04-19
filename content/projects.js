import faker from 'faker';

const projects = [
  {
    title: "Where's Waldo?",
    description: faker.lorem.paragraph(),
    imageProps: {
      src: '/images/projects/waldo.png',
      format: 'xps15',
    },
    links: {
      github: 'https://github.com/rankoliang/waldo-api',
      visit: 'https://waldo.rankoliang.com/',
    },
  },
  {
    title: 'Odinbook',
    description: faker.lorem.paragraph(),
    imageProps: {
      src: '/images/projects/odinbook.png',
      format: 'xps15',
    },
    links: {
      github: 'https://github.com/rankoliang/odinbook',
      visit: 'https://odinbook-rl.herokuapp.com',
    },
  },
];

export default projects;
