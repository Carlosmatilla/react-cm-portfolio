import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useHistory } from "react-router-dom";


const Navbar = () => {
    const history = useHistory()

    return <>


        <nav className="navbar">
            <div className="navbar__logo">
                <h1 className="">LOGO</h1>
                <h3>Site Under Construction</h3>
            </div>

            <ul className="navbar__items">

                <li className="navbar__item" onClick={() => history.push('/')}><p className="navbar__link">home.</p></li>

                <li className="navbar__item" onClick={() => history.push('/projects/1')}><p className="navbar__link">Projects.</p></li>

                <li className="navbar__item"><p className="navbar__link">About Me.</p></li>

                <li className="navbar__item" ><p className="navbar__link">Contact.</p></li>

            </ul>

            <div className="navbar__social">
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/Carlosmatilla"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/carlos-matilla-fullstack/"> <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            
                
               
            </div>

        </nav>
    </>
}

export default Navbar