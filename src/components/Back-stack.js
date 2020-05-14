import React from 'react'
import { Icon } from '@iconify/react'
import nodejsIcon from '@iconify/icons-logos/nodejs'
import javascriptIcon from '@iconify/icons-logos/javascript'
import expressIcon from '@iconify/icons-logos/express'
import { motion } from 'framer-motion'


const BackStack = () => {

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
               
            
              staggerChildren: 0.2,
              delayChildren: 1.4
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

      
            <motion.div variants={variant2}>
                <Icon icon={javascriptIcon} width="50" />
            </motion.div>
            <motion.div variants={variant2}>
                <Icon icon={nodejsIcon} width="50" />
            </motion.div>
            
            <motion.div variants={variant2}>
                <Icon icon={expressIcon} width="50" />
            </motion.div>
           

        </motion.div>

    </>
}

export default BackStack