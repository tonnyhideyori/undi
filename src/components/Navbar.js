import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import App from './App'
import Skills from './Skills';
import Projects from './Projects'
const NavbarInstance=()=>{

return(

<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link to='/'component={App} className="navbar-brand">
      Undi Consulting Group
      </Link>
    </div>
    <ul className="nav navbar-nav">
      <li className="active">
      <Link to="/" component={App}>Home</Link></li>
      <li><Link to="/skills" component={Skills}>Skills</Link></li>
      <li><Link to="/project" component={Projects}>Projects</Link></li>
    </ul>

  </div>
</nav>

  );


}
export default NavbarInstance;
