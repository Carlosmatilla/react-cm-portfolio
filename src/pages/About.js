import React from "react";
import { AnimatedSection } from '../components/index'
import { up, down, tweenTransition } from '../animations'


const About = () => <>

  <AnimatedSection variants={up} transition={tweenTransition} width={50} height={100}>
    <div className="qa"></div>
  </AnimatedSection>


  <AnimatedSection variants={down} transition={tweenTransition}  width={50} height={100}>
    <div className="aq"></div>
  </AnimatedSection>

</>

export default About