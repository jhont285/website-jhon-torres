import React, { Component } from 'react';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Section from './components/Section';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default App;
