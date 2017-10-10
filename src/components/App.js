import React, { Component } from 'react';
import { BrowserRouter } from 'react-router';
import '../css/w3.css';
import '../css/App.css';
import NavbarInstance from './Navbar';
import Slidingimage from './SlidingImage';
import Motto from './Motto'
import Tabs from './Tabs';
import Footer from './Footer'
class App extends Component {
  render() {
    return (
      <div >
        <NavbarInstance />
        <Slidingimage />
        <Motto/>
        <Tabs/>
        <Footer/>
      </div>
    );
  }
}

export default App;
