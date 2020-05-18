import React from 'react'
import { motion } from 'framer-motion'


const ProjectDescription = ({ project }) => <>

    <motion.div className="description"
        initial={{ y: `20vh`, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, type: `tween`, duration: 0.6 }}>

        <div className="description__title">
            <h1>Features</h1>
        </div>

        <div className="description__text">
            <p>
                {project.features}
            </p>
        </div>

        {
            project.repository && <div className="description__btn" >
                <a rel="noopener noreferrer" target="_blank" href={project.repository}>REPOSITORY +</a>
                {project.livedemo && <a rel="noopener noreferrer" target="_blank" href={project.livedemo}>LIVE DEMO +</a>}
            </div>
        }
        
    </motion.div>

</>

export default ProjectDescription