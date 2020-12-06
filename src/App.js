import React from 'react'
import HomePage from './components/HomePage'
import AboutUs from './components/AboutUs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  


function App() {
  return (
    <div>
    
          
              <Link to="/about">About</Link>
              <Link to="/">Home</Link>
              
            
              

        <Switch>
          <Route path="/about">
          <AboutUs/>  
          </Route>
          <Route path="/">
          <HomePage/>
          </Route>

          
          

          
        </Switch>



    </div>
  )
}

export default App
