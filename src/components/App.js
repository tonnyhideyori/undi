import React, { Component } from 'react';
import '../css/App.css';
import '../css/w3.css';
import NavbarInstance from './Navbar';
import Slidingimage from './SlidingImage';

class App extends Component {
  render() {
    return ( 
      <div >
        <NavbarInstance />
        <Slidingimage />
      </div> 
    );
  }
}

export default App;