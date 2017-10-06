import React, { Component } from 'react';
import Intro from './Intro';
class Tabs extends Component{
  constructor(){
    super();
    this.tabCompany=this.tabCompany.bind(this);
  }

render(){
return(
  <div>
  <div className="tab">
  <button className="tablinks" onClick={(e)=>this.tabCompany(e, 'Intro')} id="defaultOpen">Introduction of the company</button>
  <button className="tablinks" onClick={(e)=>this.tabCompany(e, 'Director')} >Directors</button>
  <button className="tablinks" onClick={(e)=>this.tabCompany(e, 'Strategy')} >Corparate Strategy</button>
  <button className="tablinks" onClick={(e)=>this.tabCompany(e, 'Corparate')} >Corparate Responsibilities</button>
</div>

<div id="Introduction" className="tabcontent">
  <Intro/>
</div>

<div id="Directors" className="tabcontent">

</div>

<div id="Strategy" className="tabcontent">
</div>
<div id="Corparate" className="tabcontent">

</div>

</div>
);

}
tabCompany(evt, cityName) {

}

}
export default Tabs;
