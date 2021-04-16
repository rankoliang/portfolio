import faker from 'faker';

const projects = [
  {
    title: "Where's Waldo?",
    description: faker.lorem.paragraph(),
    imageProps: {
      src: '/images/projects/waldo.png',
      width: 2000,
      height: 1019,
    },
    links: {
      github: 'https://github.com/rankoliang/waldo-api',
      visit: 'https://waldo.rankoliang.com/',
    },
  },
];

export default projects;
