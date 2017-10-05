import React, { Component } from 'react';
import './App.css';
import './w3.css';
import NavbarInstance from './componets/navbar';
import Slidingimage from './componets/slidingImage';

class App extends Component {
  render() {
    return (
    <div>
     <NavbarInstance />
     
     <Slidingimage />
    </div> 
    );
  }
}

export default App;
