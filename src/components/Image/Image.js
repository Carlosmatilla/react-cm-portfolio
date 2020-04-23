import React from 'react'
import './Image.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const Image = () => {
    return <>
        <section className="image">

            <img alt="img"></img>

            <div className="image__counter">
                <div className="image__proyects">
                    PROYECTS
				</div>
                <div className="image__loader">
                    <h2>02</h2>
                    <div className="loader">
                        <div className="loader__line"></div>
                    </div>
                </div>
            </div>

            <div class="image__nav">
                <div className="nav__left">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>

                <div className="nav__right">
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </section>
    </>

}

export default Image