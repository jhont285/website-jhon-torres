import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

const Roster = () => <div>Roster</div>;
const Schedule = () => <div>Schedule</div>;

class Section extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/roster" component={Roster} />
          <Route path="/schedule" component={Schedule} />
        </Switch>
      </div>
    );
  }
}

export default Section;
