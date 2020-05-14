import React from 'react'
import { Icon } from '@iconify/react'
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


const Stack = () => {

    const variant = {
        // initial: {
        //     opacity: 0,
        //     x: "-10vw",
        // },
        // in: {
        //     opacity: 1,
        //     x: 0,
        //     transition: {
        //       staggerChildren: 0.15,
        //       delayChildren: 0.7
        //   }
        
        // },
        // out: {
        //     opacity: 0,
        //     x: "10vw",
        // }
    }
    const variant2 = {
        // initial: {
        //     opacity: 0,
        //     y: "10vw",
        // },
        // in: {
        //     opacity: 1,
        //     y: 0,
        
        // },
        // out: {
        //     opacity: 0,
        //     y: "-10vw",
        // }
    }

    return <>

        <motion.div className="stack"
     
            variants={variant}
        >

            {/* <motion.div variants={variant2} >
                <Icon icon={html5} width="60" />
            </motion.div> */}
            <motion.div variants={variant2}>
                <Icon icon={sassIcon} width="60" />
            </motion.div>
            <motion.div variants={variant2}>
                <Icon icon={javascriptIcon} width="60" />
            </motion.div>
            <motion.div variants={variant2}>
                <Icon icon={nodejsIcon} width="60" />
            </motion.div>
            <motion.div variants={variant2}>
                <Icon icon={reactIcon} width="60" />
            </motion.div>
            <motion.div variants={variant2}>
                <Icon icon={reduxIcon} width="60" />
            </motion.div>
            {/* <motion.div variants={variant2}>
                <Icon icon={electronIcon} width="60" />
            </motion.div> */}
            <motion.div variants={variant2}>
                <Icon icon={expressIcon} width="60" />
            </motion.div>
            <motion.div variants={variant2}>
                <Icon icon={mongodbIcon} width="60" />
            </motion.div>
            <motion.div variants={variant2}>
                <Icon icon={jestIcon} width="60" />
            </motion.div>
            <motion.div variants={variant2}>
                <Icon icon={jasmineIcon} width="60" />
            </motion.div>
            {/* <motion.div variants={variant2}>
                <Icon icon={mochaIcon} width="60" />
            </motion.div> */}












        </motion.div>

    </>
}

export default Stack