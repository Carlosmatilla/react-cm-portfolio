import React from 'react'
import { Icon } from '@iconify/react'
import mongodbIcon from '@iconify/icons-logos/mongodb'
import jestIcon from '@iconify/icons-logos/jest'
import jasmineIcon from '@iconify/icons-logos/jasmine'
import mochaIcon from '@iconify/icons-logos/mocha'
import { motion } from 'framer-motion'


const TestStack = () => {

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
              delayChildren: 2
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
                <Icon icon={mongodbIcon} width="50" />
            </motion.div>
            <motion.div variants={variant2}>
                <Icon icon={jestIcon} width="50" />
            </motion.div>
            <motion.div variants={variant2}>
                <Icon icon={jasmineIcon} width="50" />
            </motion.div>
            <motion.div variants={variant2}>
                <Icon icon={mochaIcon} width="50" />
            </motion.div>



        </motion.div>

    </>
}

export default TestStack