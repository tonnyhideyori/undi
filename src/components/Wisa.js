import React, {Component} from 'react';
import Wisadata from './Wisadata';
import Wisaqualif from './Wisaqualif';
class Wisa extends Component{
  render(){
    return(
      <div>
      <div className="row">
     <div id="left"><img src={require('../images/wisa.jpg')} style={{padding:'0px',width:'70%'}} alt='Wisa'/></div>
     <div id="left"> <Wisadata/></div>
     </div>
     <div><Wisaqualif /></div>
      </div>
    );
  }
}
export default Wisa;
