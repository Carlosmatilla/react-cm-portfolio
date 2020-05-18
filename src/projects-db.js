import drone from './assets/drone.png'
import videogames from './assets/videogame.png'
import beer from './assets/beer.png'
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
import html5 from '@iconify/icons-logos/html-5'
import mochaIcon from '@iconify/icons-logos/mocha'
import { motion } from 'framer-motion'


export const projects = [
    {
      img: drone,
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
      features: "Js-Drone is an ElectronJs APP that allows you to control a drone through a Nintendo Switch gamepad or keyboard, watch live video, check telemetry and save telemetry for each flight."
    },
    {
      img: videogames,
      name: 'Games-Rating',
      id: 2,
      technologies:[
        reactIcon, 
        reduxIcon, 
        sassIcon, 
        javascriptIcon,
        jestIcon
      ],
      features: "Games-Rating is a ReactJs web that allows you to rate videogames by yourself or randomly. State is managed with Redux and Backend service emulated with JSON-Server."
    },
    {
      img: beer,
      name: 'Beer-APP',
      id: 3,
      technologies:[
        reactIcon, 
        reduxIcon, 
        sassIcon, 
        javascriptIcon
      ],
      features: "Beer-APP is a web built with ReactJs that allows you to find beers by name, IBU and ABV through FUNK API calls. State is managed with Redux."
    }
  ]