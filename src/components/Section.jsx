import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import HaveFun from './HaveFun';
import Contact from './Contact';

class Section extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/haveFun" component={HaveFun} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default Section;
