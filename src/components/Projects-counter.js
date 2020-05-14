import React from 'react'
import { motion } from 'framer-motion'
// import './Image.sass'


const ProjectsCounter = ({ project, progressBar }) => <>

    <motion.div className="projects" initial={{y: `20vh`, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.3, type: `tween`, duration: 0.6}}>
        <h2>{project.name}</h2>
    </motion.div>

    <motion.div className="counter" initial={{y: `20vh`, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.55, type: `tween`, duration: 0.6}}>

        <h2>{`0${project.id}`}</h2>

        <div className="counter__loader">
            <div className="counter__line" style={{ width: `${progressBar}%` }}></div>
        </div>
        
    </motion.div>

</>

export default ProjectsCounter