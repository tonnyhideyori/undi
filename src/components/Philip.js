import React, {Component} from 'react';
import Phidata from './Phidata';
import Phiqualif from './Phiqualif';
class Philip extends Component{
  render(){
    return(
      <div>
      <div className="row">
     <div id="left"><img src={require('../images/chairman.png')} style={{width:'100%'}} alt='Phillip'/></div>
     <div id="left"> <Phidata/></div><br></br>
      </div>
      <div><Phiqualif /></div>
      </div>
    );
  }
}
export default Philip;
