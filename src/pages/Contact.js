import React from "react";
import { AnimatedSection } from '../components/index'
import { down, tweenTransition } from '../animations'


const Contact = () => <>

  <AnimatedSection variants={down} transition={tweenTransition} width={100} height={100}>
    <div className="qa"></div>
  </AnimatedSection>

</>

export default Contact