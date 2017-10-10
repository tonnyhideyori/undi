import React, { Component } from 'react';

class Service extends Component{
  render(){
    return(
      <div className="w3-panel  w3-border-bottom w3-border-blue-grey">
      <div className="w3-panel  w3-border-bottom w3-border-grey"><h3 align="center"><i>Consulting Services Provided by the Company:</i></h3></div>
<div className="row">
  <div className="col-sm-3">
    <div className="panel panel-primary">
      <div className="panel-heading">Project Management</div>
      <div className="panel-body"><img src={require('../images/projectMana.jpg')} className="img-responsive"  style={{width:'100%'}}  alt='project Management'/></div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="panel panel-primary">
      <div className="panel-heading">Structural Engineering Design</div>
      <div className="panel-body"><img src={require('../images/rita01.jpg')} className="img-responsive"  style={{width:'100%'}}  alt='Structural Engineering Design'/></div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="panel panel-primary">
      <div className="panel-heading">Civil Works (Roads,Bridges,Airports)</div>
      <div className="panel-body"><img src={require('../images/airport02.jpg')} className="img-responsive"  style={{width:'100%'}}  alt='Civil Works'/></div>
    </div>
  </div>

  <div className="col-sm-3">
    <div className="panel panel-primary">
      <div className="panel-heading">Water Engineering</div>
      <div className="panel-body"><img src={require('../images/water.jpg')} className="img-responsive"  style={{width:'100%'}}  alt='Water Engineering'/></div>
    </div>
  </div>

  </div>

  <div className="row">
    <div className="col-sm-3">
      <div className="panel panel-primary">
        <div className="panel-heading">Geotechnical Engineering</div>
        <div className="panel-body"><img src={require('../images/geo2.jpg')} className="img-responsive"  style={{width:'100%'}}  alt='Geotechnical Engineering'/></div>
      </div>
    </div>

    <div className="col-sm-3">
      <div className="panel panel-primary">
        <div className="panel-heading">Mechanical Engineering</div>
        <div className="panel-body"><img src={require('../images/images89.jpg')} className="img-responsive"  style={{width:'100%'}}  alt='Mechanical Engineering'/></div>
      </div>
    </div>

    <div className="col-sm-3">
      <div className="panel panel-primary">
        <div className="panel-heading">Electrical Engineering</div>
        <div className="panel-body"><img src={require('../images/electrical2.jpg')} className="img-responsive"  style={{width:'100%'}}  alt='Electrical Engineering'/></div>
      </div>
    </div>

    <div className="col-sm-3">
      <div className="panel panel-primary">
        <div className="panel-heading">Energy and Power</div>
        <div className="panel-body"><img src={require('../images/energy.jpg')} className="img-responsive"  style={{width:'100%'}}  alt='Energy & Power'/></div>
      </div>
    </div>

    </div>

    <div className="row">
      <div className="col-sm-3">
        <div className="panel panel-primary">
          <div className="panel-heading">Information Communication and Telecommunication</div>
          <div className="panel-body"><img src={require('../images/telecom.jpg')} className="img-responsive"  style={{width:'100%'}}  alt='Information Communication and Telecommunication'/></div>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="panel panel-primary">
          <div className="panel-heading">Environmental & Social Impact Assessment</div>
          <div className="panel-body"><img src={require('../images/assessment2.jpg')} className="img-responsive"  style={{width:'100%'}}  alt='Environmental & Social Impact Assessment'/></div>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="panel panel-primary">
          <div className="panel-heading">Feasibility Studies</div>
          <div className="panel-body"><img src={require('../images/eng1.jpg')} className="img-responsive"  style={{width:'100%'}}  alt='Feasibility Studies'/></div>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="panel panel-primary">
          <div className="panel-heading">Project Appraisals</div>
          <div className="panel-body"><img src={require('../images/project2.jpg')} className="img-responsive"  style={{width:'100%'}}  alt='Project Appraisals'/></div>
        </div>
      </div>

      </div>

      </div>
    );
  }
}
export default Service;
