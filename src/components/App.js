import React, { Component } from 'react';
import '../css/w3.css';
import '../css/App.css';
import NavbarInstance from './Navbar';
import Slidingimage from './SlidingImage';
import Motto from './Motto'
import Tabs from './Tabs';

class App extends Component {
  render() {
    return (
      <div >
        <NavbarInstance />
        <Slidingimage />
        <Motto/>
        <Tabs/>
      </div>
    );
  }
}

export default App;
