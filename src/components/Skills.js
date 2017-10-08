import React, { Component } from 'react';
import '../css/w3.css';
import '../css/App.css';
import NavbarInstance from './Navbar';
import Slidingimage from './SlidingImage';

class Skills extends Component{
  render() {
    return(
      <div>
      <NavbarInstance />
      <Service/>
      </div>
    );
  }
}
export default Skills;
