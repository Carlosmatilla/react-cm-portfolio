import React from 'react'
import './Description.sass'
import { motion } from "framer-motion";
import { Icon, InlineIcon } from '@iconify/react';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import electronIcon from '@iconify/icons-logos/electron';
import reduxIcon from '@iconify/icons-logos/redux';
import mongodbIcon from '@iconify/icons-logos/mongodb';
import jestIcon from '@iconify/icons-logos/jest';
import jasmineIcon from '@iconify/icons-logos/jasmine';
import expressIcon from '@iconify/icons-logos/express';
// import socketIo from '@iconify/icons-cib/socket-io';
import sassIcon from '@iconify/icons-logos/sass';
import html5 from '@iconify/icons-logos/html-5';

import mochaIcon from '@iconify/icons-logos/mocha';







const Description = ({ page }) => {

    const pageVariants = {
        initial: {
            opacity: 0,
            y: "-100vw",
            
        },
        in: {
            opacity: 1,
            y: 0,
            // transition: { staggerChildren: 0.07, delayChildren: 0.2 }
            
        },
        out: {
            opacity: 0,
            y: "100vw",
           
        }
    };

    const pageTransition = {
        // type: "spring",
        // damping: 12,
        // stiffness: 70,
        type: "tween",
        ease: "easeInOut",
        duration: 0.6
    };

 




    return <>

        <motion.section class="description" 
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}>


            {/* <h1 className="description__title">{page}</h1> */}



            {/* <p className="description__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam facere ex voluptates eligendi aut provident voluptatum,
                rem numquam qui.
			</p> */}
            <motion.div className="stack" >
            <Icon icon={html5} width="80"/>
            <Icon icon={sassIcon} width="80"/>
            <Icon icon={javascriptIcon} width="80"/>
            <Icon icon={nodejsIcon} width="80" />
           
           
            
            
            <Icon icon={reactIcon} width="80"/>
            <Icon icon={reduxIcon} width="80"/>
            <Icon icon={electronIcon} width="80"/>
            <Icon icon={expressIcon} width="80"/>
            <Icon icon={mongodbIcon} width="80"/>
           
            
            {/* <Icon icon={framerIcon} /> */}
            
            
            <Icon icon={jestIcon} width="80"/>
            <Icon icon={jasmineIcon} width="80"/>
            {/* <Icon icon={socketIo} /> */}
            <Icon icon={mochaIcon} width="80"/>

            </motion.div>


            {/* <div className="description__btn">
                REPOSITORY +
            </div> */}

        </motion.section>
    </>
}

export default Description