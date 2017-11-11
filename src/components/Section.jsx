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
      <Route path={process.env.PUBLIC_URL + '/projects'} component={Projects} />
      <Route path={process.env.PUBLIC_URL + '/haveFun'} component={HaveFun} />
      <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
    </Switch>
  </main>
);

export default Section;
