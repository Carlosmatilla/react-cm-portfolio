import React from "react";
import { AnimatedSection, Image } from '../components/index'
import { up, down, tweenTransition } from '../animations'
import profile from '../assets/carlos.jpg'
import { Icon } from '@iconify/react';
import chevronCompactDown from '@iconify/icons-bi/chevron-compact-down';
import { useHistory } from "react-router-dom"




const Home = () => {
  let history = useHistory()
return <>

  <AnimatedSection variants={down} transition={tweenTransition} width={50} height={100}>

    <div className="cuc">
      <h1>FullStack Web Developer</h1>
      <div className="cac">
      <h2>Have a look</h2>
      <h2>into my</h2>
      <h2 onClick={()=> history.push('/projects/1')}>projects</h2>
      <Icon className="arrow" icon={chevronCompactDown} width={120} onClick={()=> history.push('/projects/1')}/>
    </div>

    </div>

  
  </AnimatedSection>


  <AnimatedSection variants={up} transition={tweenTransition} width={50} height={100}>
    <Image source={profile} />
  </AnimatedSection>

</>

}
export default Home