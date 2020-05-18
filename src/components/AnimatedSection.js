import React from 'react'
import { motion } from "framer-motion"


const AnimatedSection = ({ children, variants, transition, width, height, align }) => {

    return <>

        <motion.section
            className="section"
            style={{ width: `${width}%`, height: `${height}%`, justifyContent: align }}
            initial="initial"
            animate="in"
            exit="out"
            variants={variants}
            transition={transition}
        >
            {children}

        </motion.section>
    </>
}

export default AnimatedSection