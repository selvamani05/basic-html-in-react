import React from 'react'
import HomePage from './components/HomePage'
import AboutUs from './components/AboutUs'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

import {Switch,Route} from "react-router-dom";  


function App() {
  return (
    <div>
        <Switch>
          <Route path="/about">
          <AboutUs/>  
          </Route>
          
          <Route path="/gallery">
          <Gallery/>
          </Route> 
          <Route path="/contact">
          <Contact/>
          </Route> 
          <Route path="/">
          <HomePage/>
          </Route>

          
        </Switch>



    </div>
  )
}

export default App
