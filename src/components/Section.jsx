import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import HaveFun from './HaveFun';
import Contact from './Contact';

const Section = () => (
  <main>
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/haveFun" component={HaveFun} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </main>
);

export default Section;
