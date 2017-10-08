import React, {Component} from 'react';
import Kimweriqualif from './Kimweriqualif';
import Kimweridata from './Kimweridata';
class Kimweri extends Component{
  render(){
    return(
      <div>
      <div className="row">
     <div id="left"><img src={require('../images/kimweri.jpg')} style={{padding:'0px',width:'70%'}} alt='Shekimweri'/></div>
     <div id="left"> <Kimweridata/></div>
      </div>
      <div><Kimweriqualif /></div>
      </div>
    );
  }
}
export default Kimweri;
