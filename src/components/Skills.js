import React, { Component } from 'react';
import '../css/w3.css';
import '../css/App.css';
import NavbarInstance from './Navbar';
import Slidingimage from './SlidingImage';
import Specialist from './Specialist';
import Service from './Service'
import Footer from './Footer';
class Skills extends Component{
  render() {
    return(
      <div className="container" style={{background:"rgb(255, 235, 255)"}}>
      <NavbarInstance />
      <Slidingimage/>
      <div className="w3-panel w3-border w3-border-red">
      <Service/>
      <Specialist/>
      </div>
      <Footer/>
      </div>
    );
  }
}
export default Skills;
