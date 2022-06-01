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
import PageNotFound from './PageNotFound';
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
          
          <Route exact path="/" component={Home}></Route>

          
          <Route path='*' component={PageNotFound}></Route>

        </Switch>
      </Router>

    </>
  )
}

export default App