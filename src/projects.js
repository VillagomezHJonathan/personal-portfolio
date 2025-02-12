import flixderPng from './assets/images/project-screenshots/flixder.png'
import fitBuddyPng from './assets/images/project-screenshots/fit-buddy.png'
import ticTacToePng from './assets/images/project-screenshots/tic-tac-toe.png'
import webScraperPng from './assets/images/project-screenshots/web-scraper.png'
import teamHubPng from './assets/images/project-screenshots/team-hub.png'
import hoverOrbPng from './assets/images/project-screenshots/hover-orb.png'
import downloadFileSorterPng from './assets/images/project-screenshots/download-file-sorter.png'
import scriptsPng from './assets/images/project-screenshots/scripts.png'

const projects = [
  {
    title: 'TeamHub',
    types: ['web'],
    image: teamHubPng,
    demo: 'https://teamhubweb.netlify.app',
    repo: 'https://github.com/venoblin/teamhub-frontend',
    techs: [
      'React',
      'TypeScript',
      'SCSS',
      'Python',
      'Flask',
      'PostgreSQL',
      'SQLAlchemy'
    ],
    desc: 'Web application that allows you to organize your projects and most importantly your workflow.'
  },
  {
    title: 'Flixder',
    types: ['web'],
    image: flixderPng,
    demo: 'https://flixder.netlify.app/',
    repo: 'https://github.com/venoblin/flixder-frontend',
    techs: ['React', 'JavaScript', 'SCSS', 'Node.js', 'Express', 'MongoDB'],
    desc: 'Dating application for movies, gives you a way to find new movies to watch.'
  },
  {
    title: 'HoverOrb',
    types: ['game'],
    image: hoverOrbPng,
    demo: '',
    repo: 'https://github.com/venoblin/hover-orb',
    techs: ['Java', 'LibGDX'],
    desc: 'Mobile game where the goal is to keep the ball airbourne without it touching the floor.'
  },
  {
    title: 'Fit Buddy',
    types: ['web'],
    image: fitBuddyPng,
    demo: 'https://fitbuddyapp.netlify.app/',
    repo: 'https://github.com/venoblin/fit-buddy',
    techs: ['Vue', 'JavaScript', 'SCSS'],
    desc: 'An application used to set up your workout routine for the week.'
  },
  {
    title: 'Tic-Tac-Toe',
    types: ['game'],
    image: ticTacToePng,
    demo: 'http://tic-tac-toe-jvh.surge.sh/',
    repo: 'https://github.com/venoblin/tic-tac-toe',
    techs: ['JavaScript', 'CSS'],
    desc: 'Tic-Tac-Toe game made entirely with JavaScript.'
  },
  {
    title: 'Scripts',
    types: ['featured', 'tool'],
    image: scriptsPng,
    demo: 'https://github.com/venoblin/scripts?tab=readme-ov-file#usage',
    repo: 'https://github.com/venoblin/scripts',
    techs: ['Bash', 'Python'],
    desc: 'Collection of utility scripts designed to streamline common tasks in a Linux environment.'
  },
  {
    title: 'Download File Sorter',
    types: ['featured', 'tool'],
    image: downloadFileSorterPng,
    demo: 'https://github.com/venoblin/download-file-sorter?tab=readme-ov-file#getting-started',
    repo: 'https://github.com/venoblin/download-file-sorter',
    techs: ['Python'],
    desc: 'Sorts files from download directory into user specified directories in a Unix based system.'
  },
  {
    title: 'Web Scraper',
    types: ['featured', 'tool'],
    image: webScraperPng,
    demo: 'https://github.com/venoblin/web-scraper?tab=readme-ov-file#usage',
    repo: 'https://github.com/venoblin/web-scraper',
    techs: ['Python', 'Selenium', 'BeautifulSoup'],
    desc: 'Web scraper that returns the data in an organized manner.'
  }
]

export default projects
