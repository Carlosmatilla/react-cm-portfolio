import React from 'react'
import { Navbar } from './components'
import { Route, Switch, useLocation } from "react-router-dom"
import {Home, Projects, About, Contact } from './pages'
import { AnimatePresence } from 'framer-motion'
import './App.sass'




function App() {
  const location = useLocation();

  const routes = [
    { path: "/", name: "Home", Page: Home },
    { path: "/projects/:id", name: "Projects", Page: Projects },
    { path: "/about", name: "About", Page: About },
    { path: "/contact", name: "Contact", Page: Contact }
  ]


  return (
    <div className="app">

      <Navbar />

      <div className="container">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            {routes.map(({ path, Page }) => (
              <Route key={path} exact path={path}>
                <Page />
              </Route>
            ))}
            </Switch>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
