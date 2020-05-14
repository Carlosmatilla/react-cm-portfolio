import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
// import './Image.sass'


const ProjectsNav = ({ handleNextProject, handlePreviousProject }) => <>

    <div class="counter__nav">

        <div className="nav__left" onClick={handlePreviousProject} >
            <FontAwesomeIcon icon={faChevronLeft} />
        </div>

        <div className="nav__right" onClick={handleNextProject}>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>

    </div>

</>

export default ProjectsNav