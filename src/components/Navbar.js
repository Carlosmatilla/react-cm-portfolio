import React from 'react'
import './Navbar.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useHistory } from "react-router-dom";


const Navbar = () => {
    const history = useHistory()

    return <>


        <nav className="navbar">
            <div className="navbar__logo">
                <h1 className="">CM</h1>
            </div>

            <ul className="navbar__items">

                <li className="navbar__item" onClick={() => history.push('/')}><p className="navbar__link">home.</p></li>

                <li className="navbar__item" onClick={() => history.push('/projects/1')}><p className="navbar__link">Projects.</p></li>

                <li className="navbar__item" onClick={() => history.push('/about')}><p className="navbar__link">About Me.</p></li>

                <li className="navbar__item" onClick={() => history.push('/contact')}><p className="navbar__link">Contact.</p></li>

            </ul>

            <div className="navbar__social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </div>

        </nav>
    </>
}

export default Navbar