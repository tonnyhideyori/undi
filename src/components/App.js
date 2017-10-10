import React, { Component } from 'react';
import '../css/w3.css';
import '../css/App.css';
import NavbarInstance from './Navbar';
import Slidingimage from './SlidingImage';
import Motto from './Motto'
import Tabs from './Tabs';
import Footer from './Footer'
const App=()=> {

    return (
      <div className="container" style={{background:"rgb(255, 235, 255)"}}>
        <NavbarInstance />
        <Slidingimage />
        <Motto/>
        <div className="w3-panel w3-border w3-border-red w3-round-large">
        <Tabs/>
         </div>
         <Footer/>

      </div>
    );

}

export default App;
