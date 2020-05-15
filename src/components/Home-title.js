import React from 'react'
// import './Image.sass'
import Typical from 'react-typical'



const HomeTitle = () => <>
    <div className="home__title">
    <Typical
        steps={['Frontend Web Developer', 1500, 'Backend Web Developer', 1500, 'Musician?', 1500, 'Whatever!', 1500]}
        loop={Infinity}
        wrapper="h1"
      />
        {/* <h1>FullStack Web Developer</h1> */}
    </div>

</>


export default HomeTitle