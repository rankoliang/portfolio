const projects = [
  {
    title: 'Odinbook',
    description: `
    A social media application where users can connect with friends and other users.
    Share posts and comment on your friend's experiences in the feed.
    `,
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
    title: "Where's Waldo?",
    description: `
    A web version of Where's Waldo where the goal is to find Waldo and friends.
    See if you can get the best times on each of the levels as you compete with other players in the leaderboards.
    `,
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
    title: 'Battleship',
    description: `
    Play battleship against a computer with various different difficulty levels.
    What is the highest level you can beat?
    `,
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
    description: `
    A command line version of chess.
    Play with a friend one on one.
    `,
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
  {
    title: 'Memory Game',
    description: `
    Test your memory by picking all of the cards without making a mistake.
    `,
    imageProps: {
      src: '/images/projects/compact/memory-game.png',
      format: 'compact',
      alt: 'Memory game screenshot',
    },
    links: {
      github: 'https://github.com/rankoliang/memory-game',
      visit: 'https://rankoliang.github.io/memory-game',
    },
  },
  {
    title: 'Shopping Cart',
    description: `
    Purchase items in a shop that restocks new and different items every time you visit!
    `,
    imageProps: {
      src: '/images/projects/compact/shopping-cart.png',
      format: 'compact',
      alt: 'Shipping Cart screenshot',
    },
    links: {
      github: 'https://github.com/rankoliang/shopping-cart',
      visit: 'https://rankoliang.github.io/shopping-cart',
    },
  },
  {
    title: 'Restaurant Page',
    description: `
    A fictional restaurant page with delicious food.
    `,
    imageProps: {
      src: '/images/projects/compact/restaurant-page.png',
      format: 'compact',
      alt: 'Restaurant page screenshot',
    },
    links: {
      github: 'https://github.com/rankoliang/restaurant-page',
      visit: 'https://rankoliang.github.io/restaurant-page',
    },
  },
  {
    title: 'Library Tracker',
    description: `
    Track your progress on the books you are reading and the overall progress of your entire collection.
    `,
    imageProps: {
      src: '/images/projects/compact/library.png',
      format: 'compact',
      alt: 'Restaurant page screenshot',
    },
    links: {
      github: 'https://github.com/rankoliang/library',
      visit: 'https://rankoliang.github.io/library',
    },
  },
];

export default projects;
