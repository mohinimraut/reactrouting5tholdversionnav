import React from 'react'
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
 Switch,
  Route,


} from "react-router-dom";
import Home from './Home';
import About from './About';
import ContactUS from './ContactUS';
import Feedback from './Feedback';
import Services from './Services';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/home" component={Home}>
       
          </Route>
          <Route path="/about" component={About}>
            
          </Route>
          <Route path="/contactus" component={ContactUS}>
        
          </Route>

          <Route path="/feedback" component={Feedback}>
         
          </Route>
          <Route path="/services" component={Services}>
      
          </Route>
          
          {/* <Route path="/" element={<h1>Welcome</h1>}></Route> */}

          
          {/* <Route path='*' component={<h1>Page not Found</h1>}></Route> */}

        </Switch>
      </Router>

    </>
  )
}

export default App