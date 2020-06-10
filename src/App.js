import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NotFound from './components/NotFound';


function App() {
  return (
    <div>
      
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/team"} component={Team} />
            <Route exact path={"/services"} component={Services} />
            <Route exact path={"/portfolio"} component={Portfolio} />
            <Route exact path={"/contact"} component={Contact} />
            <Route path={"*"} component={NotFound} />
          </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
