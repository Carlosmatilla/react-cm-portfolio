import React from 'react'
import './Sidebar.sass'



const Sidebar = () => {

    return <>
        {/* <Anime
      initial={[
        {
            targets: '.description',
            translateY: [100, 0],
            opacity: [0, 1],
            offset: '-=700',
        },
        {
            targets: '.image-section',
            translateY: [-100, 0],
            opacity: [0, 1],
            offset: '-=1000',
        },
        {
            targets: '#gallery-headline',
            height: ['0px', '80px'],
            opacity: [0, 1],
            offset: '-=800',
        },
        {
            targets: '#gallery-loader',
            height: ['0px', '135px'],
            opacity: [0, 1],
            offset: '-=700',
        },
        {
            targets: '.ham-line',
            translateX: [500, 0],
            opacity: [0, 1],
            duration: 800,
            delay: (el, i) => 100 * i,
            offset: '-=700',
        },
        {
            targets: '.social a',
            translateX: [500, 0],
            opacity: [0, 1],
            delay: (el, i) => 200 * i,
            offset: '-=1000',
        },
        {
            targets: '.gallery-nav div',
            translateY: [500, 0],
            opacity: [0, 1],
            delay: (el, i) => 200 * i,
            offset: '-=1000',
        }
      ]}
    ></Anime> */}
        <section className="sidebar">
            {/* <div className="sidebar__hamburger">
                
                    <span className="uno"></span>
                    <span className="dos"></span>
                    <span className="tres"></span>
                

            </div> */}

            <div class="sidebar__social">
                <a className="social__link cuatro" href="http://facebook.com">
               
                    LinkedIn
                </a>
                <a className="social__link cinco" href="http://twitter.com">
            
                    GitHub
                </a>
            </div>
        </section>
    </>
}

export default Sidebar