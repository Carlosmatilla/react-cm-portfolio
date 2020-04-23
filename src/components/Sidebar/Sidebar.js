import React from 'react'
import './Sidebar.sass'


const Sidebar = () => {

    return <>
        <section className="sidebar">
            <div className="sidebar__hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="sidebar__social">
                <a className="social__link" href="http://facebook.com">
                    {/* <div class="letter">f</div>
                    <div class="letter">a</div>
                    <div class="letter">c</div>
                    <div class="letter">e</div>
                    <div class="letter">b</div>
                    <div class="letter">o</div>
                    <div class="letter">o</div>
                    <div class="letter">k</div> */}
                    LinkedIn
                </a>
                <a className="social__link" href="http://twitter.com">
                    {/* <div class="letter">t</div>
                    <div class="letter">w</div>
                    <div class="letter">i</div>
                    <div class="letter">t</div>
                    <div class="letter">t</div>
                    <div class="letter">e</div>
                    <div class="letter">r</div> */}
                    GitHub
                </a>
            </div>
        </section>
    </>
}

export default Sidebar