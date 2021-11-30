import React, {useEffect} from 'react';
import "./styles/site.scss";
import Navbar from "./components/Navbarr";
import ScrollToTop from "./components/ScrollUp/ScrollUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Projects } from "./components/Pages/Projects";
import { Services } from "./components/Pages/Services";
import { About } from "./components/Pages/About";
import { Stack } from "./components/Pages/Stack";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import ReactGa from 'react-ga';

function App() {

  useEffect (() => {
    ReactGa.initialize('UA-205145109-1')

    //to report page view
    
    ReactGa.pageview(window.location.pathname + window.location.search);
  },[])
  return (
    <>
      <Router>
      <ScrollToTop />
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/stack" component={Stack} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        
      </Router>
    </>
  );
}

export default App;
