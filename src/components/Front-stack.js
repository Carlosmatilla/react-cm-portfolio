import React from 'react'
import { Icon } from '@iconify/react'
import javascriptIcon from '@iconify/icons-logos/javascript'
import reactIcon from '@iconify/icons-logos/react'
import electronIcon from '@iconify/icons-logos/electron'
import reduxIcon from '@iconify/icons-logos/redux'
import sassIcon from '@iconify/icons-logos/sass'
import html5 from '@iconify/icons-logos/html-5'
import { motion } from 'framer-motion'


const FrontStack = () => {

    const variant = {
        initial: {
            opacity: 0,
            x: "-10vw",
        },
        in: {
            opacity: 1,
            x: 0,
            transition: {
            type: "tween",
               
            
              staggerChildren: 0.15,
              delayChildren: 0.8
          }
        
        },
        out: {
            opacity: 0,
            x: "10vw",
        }
    }
    const variant2 = {
        initial: {
            opacity: 0,
            y: "10vw",
        },
        in: {
            opacity: 1,
            y: 0,
            transition: {type:"tween"}
        
        },
        out: {
            opacity: 0,
            y: "-10vw",
        }
    }

    return <>

        <motion.div className="stack"
     
            variants={variant}
        >

            <motion.div variants={variant2} >
                <Icon icon={html5} width="50" />
            </motion.div>
            <motion.div variants={variant2}>
                <Icon icon={sassIcon} width="50" />
            </motion.div>
            <motion.div variants={variant2}>
                <Icon icon={javascriptIcon} width="50" />
            </motion.div>
            <motion.div variants={variant2}>
                <Icon icon={reactIcon} width="50" />
            </motion.div>
            <motion.div variants={variant2}>
                <Icon icon={reduxIcon} width="50" />
            </motion.div>
            <motion.div variants={variant2}>
                <Icon icon={electronIcon} width="50" />
            </motion.div>
        



        </motion.div>

    </>
}

export default FrontStack