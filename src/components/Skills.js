import React, { Component } from 'react';
import '../css/w3.css';
import '../css/App.css';
import NavbarInstance from './Navbar';
import Slidingimage from './SlidingImage';
import Specialist from './Specialist';
import Service from './Service'
class Skills extends Component{
  render() {
    return(
      <div>
      <NavbarInstance />
      <Slidingimage/>
      <Service/>
      <Specialist/>
      </div>
    );
  }
}
export default Skills;
