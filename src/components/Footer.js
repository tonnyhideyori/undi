import React, { Component } from 'react';
import Head from './Head';
import Aru from './Aru';
import Drc from './Drc';
class Footer extends Component{
  render(){
    return(
      <footer>
      <Head/>
      <strong>Branches:</strong>
      <Aru/>
      <Drc/>
      </footer>

    );
  }
}
export default Footer;
