import React from 'react'
import './Navbar.sass'

const Navbar = () => {

    return <>
        <nav className="navbar">
            <div className="navbar__logo">
                <h1 className="">CM</h1>
            </div>

            <ul className="navbar__items">
                <li className="navbar__item"><a href="#" className="navbar__link">Collections</a></li>
                <li className="navbar__item"><a href="#" className="navbar__link">New</a></li>
                <li className="navbar__item"><a href="#" className="navbar__link">Trending</a></li>
                <li className="navbar__item"><a href="#" className="navbar__link">Popular</a></li>
            </ul>

        </nav>
    </>
}

export default Navbar