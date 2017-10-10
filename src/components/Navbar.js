import React, { Component } from 'react';
import { BrowserRouter, Link,Route } from 'react-router-dom';
import App from './App'
import Skills from './Skills';
import Projects from './Projects'
class NavbarInstance extends Component{
render(){
return(
  <BrowserRouter basename="/undi">
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand">
      Undi Consulting Group
      </a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><Link to="/home" component={App}>Home</Link></li>
      <li><Link to="/skills" component={Skills}>Skills</Link></li>
      <li><Link to="/project" component={Projects}>Projects</Link></li>
    </ul>

  </div>
</nav>
</BrowserRouter>
  );

}
}
export default NavbarInstance;
