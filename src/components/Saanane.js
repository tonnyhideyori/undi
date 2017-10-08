import React, {Component} from 'react';
import Saananedata from './Saananedata';
import Saananequalif from './Saananequalif';
class Saanane extends Component{
  render(){
    return(
      <div>
      <div className="row">
      <div id="left"><img src={require('../images/saanane.jpg')} style={{padding:'0px',width:'70%'}} alt='Saanane'/></div>
      <div id="left"> <Saananedata/></div>
      </div>
      <div><Saananequalif /></div>
      </div>
    );
  }
}
export default Saanane;
