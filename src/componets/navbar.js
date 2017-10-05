import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NavbarInstance extends Component{  
render(){ 
return(
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">
      Undi Consulting Group
      </a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Skills</a></li>
      <li><a href="#">Projects</a></li>
    </ul>
    
  </div>
</nav>
  );

}
}

export default NavbarInstance;