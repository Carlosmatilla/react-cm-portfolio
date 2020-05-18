import React from 'react'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'



const Stack = ({ technologies }) => {

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
        initial={{y: `20vh`, opacity: 0}} animate={{y: 0, opacity: 1}} 
        transition={{delay: 1.2, type: `tween`, duration: 0.6}}>
            <div className="stack__title">
                <h1>Technologies</h1>
            </div>

            <span className="verti"></span>

            <div className="stack__content"

                variants={variant}
            >

                {technologies.map(t => <Icon icon={t} width="50" />)}
                {/*     
     <motion.div variants={variant2} >
         <Icon icon={html5} width="60" />
     </motion.div>
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
     <motion.div variants={variant2}>
         <Icon icon={electronIcon} width="60" />
     </motion.div>
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
     <motion.div variants={variant2}>
         <Icon icon={mochaIcon} width="60" />
     </motion.div> */}












            </div>



        </motion.div>



    </>
}

export default Stack