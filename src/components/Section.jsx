import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import HaveFun from './HaveFun';
import Contact from './Contact';
import NotFound from './NotFound';


const Section = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/haveFun" component={HaveFun} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Section;
