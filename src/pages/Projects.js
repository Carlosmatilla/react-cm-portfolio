import React from "react"
import { AnimatedSection, ProjectsCounter, ProjectsNav, Stack, ProjectDescription } from '../components/index'
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

    <AnimatedSection className="project__section" variants={right} transition={tweenTransition} width={100} height={50}>
      <img src={project.img} alt="" className="project__img" />
    </AnimatedSection>


    <AnimatedSection className="project__section" variants={left} transition={tweenTransition} width={100} height={50}>

      <ProjectDescription project={project} />

      <span className='separator'></span>

      <Stack technologies={project.technologies} />

      <ProjectsCounter project={project} progressBar={progressBar} />

    </AnimatedSection>


    <ProjectsNav handleNextProject={handleNextProject} handlePreviousProject={handlePreviousProject} />

  </>

}

export default Projects