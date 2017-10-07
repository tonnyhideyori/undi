import React, {Component} from 'react';
import Phi_data from './Phi_data';
import Phi_qualif from './Phi_qualif';
import Wisa_data from './Wisa_data';
import Wisa_qualif from './Wisa_qualif';
import Kimweri_qualif from './Kimweri_qualif';
import Kimweri_data from './Kimweri_data';
import Saanane_data from './Saanane_data';
import Saanane_qualif from './Saanane_qualif';
class Directors extends Component{
  render(){
    return(
      <div>
        <div className="row">
       <div id="left"><img src={require('../images/chairman.png')} style={{width:'100%'}} alt='Phillip'/></div>
       <div id="left"> <Phi_data/></div>
        </div>
        <div><Phi_qualif /></div>
        <div className="row">
       <div id="left"><img src={require('../images/wisa.jpg')} style={{padding:'0px',width:'70%'}} alt='Wisa'/></div>
       <div id="left"> <Wisa_data/></div>
        </div>
        <div><Wisa_qualif /></div>
        <div className="row">
       <div id="left"><img src={require('../images/kimweri.jpg')} style={{padding:'0px',width:'70%'}} alt='Shekimweri'/></div>
       <div id="left"> <Kimweri_data/></div>
        </div>
        <div><Kimweri_qualif /></div>
        <div className="row">
       <div id="left"><img src={require('../images/saanane.jpg')} style={{padding:'0px',width:'70%'}} alt='Saanane'/></div>
       <div id="left"> <Saanane_data/></div>
        </div>
        <div><Saanane_qualif /></div>
      </div>
    );
  }
}
export default Directors;
