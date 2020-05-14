import React from "react";
import { AnimatedSection, Image, HomeTitle, HomeSubtitle } from '../components/index'
import { up, down, tweenTransition } from '../animations'
import profile from '../assets/carlos.jpg'


const Home = () => {

  return <>

    <AnimatedSection variants={down} transition={tweenTransition} width={50} height={100}>

      <HomeTitle />
      <HomeSubtitle />

    </AnimatedSection>

    <AnimatedSection variants={up} transition={tweenTransition} width={50} height={100}>

      <Image source={profile} />

    </AnimatedSection>

  </>

}

export default Home