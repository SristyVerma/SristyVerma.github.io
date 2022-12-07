import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

import {
  bellavita,
  fathom,
  fitnessblender,
  kindmeal
  
} from '../../assets/images'

// projects data
export const projects = [
  {
    id: 1,
    name: 'Kind Meal Clone',
    desc:
      'A meat-free meal platform',
    stack: 'REACTJS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/SristyVerma/earthy-smell-701/tree/main/express_food',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://roaring-rugelach-ea9ed8.netlify.app/',
    },
    imgUrl: kindmeal,
  },
  {
    id: 2,
    name: 'Bella Vita Organic Clone',
    desc: 'An e-commerce platform for beauty related stuffs',
    stack: 'HTML CSS JAVASCRIPT',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Rafayal383/dreary-hand-8237',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://sparkling-sable-5e1c8b.netlify.app/',
    },
    imgUrl: bellavita,
  },
  {
    id: 3,
    name: 'FATHOM HEALTHCARE CLONE',
    desc: 'A health related website',
    stack: 'HTML CSS JAVASCRIPT',
    imgUrl: fathom,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/prasannaj-15/Fathom-health-clone',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://stunning-kashata-1af9f7.netlify.app/',
    },
  },
  {
    id: 4,
    name: 'Fitness Blender',
    desc: 'A fitness related website',
    stack: 'HTML CSS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/SristyVerma/lonely-milk-4878',
    },
    website: {
      icon: <TbWorld />,
      url: '/#'
    },
    imgUrl:
      fitnessblender,
  },

 
]
