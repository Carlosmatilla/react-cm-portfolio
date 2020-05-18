import project01 from './assets/project-01.png'
import project02 from './assets/project-02.png'
import project03 from './assets/project-03.png'
import project04 from './assets/project-04.png'
import project05 from './assets/project-05.png'
import project06 from './assets/project-06.png'
import nodejsIcon from '@iconify/icons-logos/nodejs'
import javascriptIcon from '@iconify/icons-logos/javascript'
import reactIcon from '@iconify/icons-logos/react'
import electronIcon from '@iconify/icons-logos/electron'
import reduxIcon from '@iconify/icons-logos/redux'
import mongodbIcon from '@iconify/icons-logos/mongodb'
import jestIcon from '@iconify/icons-logos/jest'
import jasmineIcon from '@iconify/icons-logos/jasmine'
import expressIcon from '@iconify/icons-logos/express'
import sassIcon from '@iconify/icons-logos/sass'
import framerIcon from '@iconify/icons-cib/framer';
import tensorflowIcon from '@iconify/icons-logos/tensorflow';
import html5 from '@iconify/icons-logos/html-5'


export const projects = [
    {
      img: project01,
      name: 'JS-Drone',
      id: 1,
      technologies:[
        reactIcon, 
        electronIcon, 
        sassIcon, 
        nodejsIcon, 
        expressIcon, 
        mongodbIcon,
        jestIcon,
        jasmineIcon
      ],
      features: "Js-Drone is an ElectronJs APP that allows you to control a drone through a Nintendo Switch gamepad or keyboard, watch live video, check telemetry and save telemetry for each flight.",
      repository: "https://github.com/Carlosmatilla/skylab-bootcamp-202001/blob/js-drone/staff/carlos-matilla/js-drone",
      livedemo: "https://www.linkedin.com/feed/update/urn:li:activity:6653223101221998592/"
      
    },
    {
      img: project02,
      name: 'Brincadeira WEB',
      id: 2,
      technologies:[
        reactIcon, 
        sassIcon, 
        framerIcon,
        jestIcon
      ],
      features: "Brincadeira official website. Website under construction"
    },
    {
      img: project03,
      name: 'Drone-Object-Detection',
      id: 3,
      technologies:[
        reactIcon, 
        electronIcon, 
        tensorflowIcon,
        sassIcon, 
        nodejsIcon, 
        expressIcon,
        
      ],
      features: "Drone-Object-Detection is an ElectronJs APP that allows you to detect objects through a TELLO drone using models provided by the machine learning library, Tensor-flow.js.",
      repository: "https://github.com/Carlosmatilla/drone-object-detection",
      livedemo: "https://www.linkedin.com/feed/update/urn:li:activity:6659105945936764928/"
    },
    {
      img: project04,
      name: 'Games-Rating',
      id: 4,
      technologies:[
        reactIcon, 
        reduxIcon, 
        sassIcon, 
        framerIcon,
        javascriptIcon,
        jestIcon
      ],
      features: "Games-Rating is a ReactJs web that allows you to rate videogames by yourself or randomly. State is managed with Redux and Backend service emulated with JSON-Server.",
      repository: "https://github.com/Carlosmatilla/Videogames-rating"
    },
    {
      img: project05,
      name: 'CM-Portfolio',
      id: 5,
      technologies:[
        reactIcon, 
        sassIcon, 
        javascriptIcon, 
        framerIcon
      ],
      features: "This webpage is built with ReactJs.",
      repository: "https://github.com/Carlosmatilla/react-cm-portfolio"
    },
    {
      img: project06,
      name: 'Beer-APP',
      id: 6,
      technologies:[
        reactIcon, 
        reduxIcon, 
        sassIcon, 
        javascriptIcon
      ],
      features: "Beer-APP is a web built with ReactJs that allows you to find beers by name, IBU and ABV through FUNK API calls. State is managed with Redux."
    }
  ]