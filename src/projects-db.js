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
      ]
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
      ]
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
      ]
    }
  ]