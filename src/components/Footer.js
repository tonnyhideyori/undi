import React, { Component } from 'react';
import Head from './Head';
import Aru from './Aru';
import Drc from './Drc';
class Footer extends Component{
  render(){
    return(
      <footer id="foot" style={{marginTop:"15px",background:"rgb(255, 196, 255)"}}>
      <div className="w3-panel w3-border-bottom w3-border-green">
      <Head/>
      </div>
      <div className="w3-panel w3-border-bottom w3-border-green">
      <Aru/>
      </div>
      <div className="w3-panel">
      <Drc/>
      </div>
      </footer>

    );
  }
}
export default Footer;
