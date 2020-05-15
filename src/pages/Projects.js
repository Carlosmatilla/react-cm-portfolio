import React from "react"
import { AnimatedSection, ProjectsCounter, ProjectsNav, Stack } from '../components/index'
import { left, right, tweenTransition } from '../animations'
import { projects } from '../projects-db'
import { useParams, useHistory } from "react-router-dom"


const Projects = () => {

  let { id } = useParams()
  let history = useHistory()
  const project = projects[id - 1]
  const progressBar = (100 / projects.length) * id

  function handleNextProject() {
    if (project.id > projects.length - 1) return
    history.push(`/projects/${Number(id) + 1}`)
  }

  function handlePreviousProject() {
    if (project.id - 2 < 0) return
    history.push(`/projects/${Number(id) - 1}`)
  }


  return <>

    <AnimatedSection variants={right} transition={tweenTransition} width={100} height={50}>
      <img src={project.img} alt="" className="project__img" />
    </AnimatedSection>


    <AnimatedSection variants={left} transition={tweenTransition} width={100} height={50}>
      <div className="description">
        <div className="description__title">
          <h1>Features</h1>
        </div>

        <div className="description__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam facere ex voluptates eligendi aut provident voluptatum,
            rem numquam qui.
			    </p>
        </div>

        <div className="description__btn">
          DETAILS +
            </div>
      </div>

      <Stack technologies={project.technologies} />

      <ProjectsCounter project={project} progressBar={progressBar} />

    </AnimatedSection>


    <ProjectsNav handleNextProject={handleNextProject} handlePreviousProject={handlePreviousProject} />

  </>

}

export default Projects