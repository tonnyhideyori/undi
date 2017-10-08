import React, {Component} from 'react';
import Phidata from './Phidata';
import Phiqualif from './Phiqualif';
import Wisadata from './Wisadata';
import Wisaqualif from './Wisaqualif';
import Kimweriqualif from './Kimweriqualif';
import Kimweridata from './Kimweridata';
import Saananedata from './Saananedata';
import Saananequalif from './Saananequalif';
class Directors extends Component{
  render(){
    return(
      <div>
        <div className="row">
       <div id="left"><img src={require('../images/chairman.png')} style={{width:'100%'}} alt='Phillip'/></div>
       <div id="left"> <Phidata/></div>
        </div>
        <div><Phiqualif /></div>
        <div className="row">
       <div id="left"><img src={require('../images/wisa.jpg')} style={{padding:'0px',width:'70%'}} alt='Wisa'/></div>
       <div id="left"> <Wisadata/></div>
        </div>
        <div><Wisaqualif /></div>
        <div className="row">
       <div id="left"><img src={require('../images/kimweri.jpg')} style={{padding:'0px',width:'70%'}} alt='Shekimweri'/></div>
       <div id="left"> <Kimweridata/></div>
        </div>
        <div><Kimweriqualif /></div>
        <div className="row">
       <div id="left"><img src={require('../images/saanane.jpg')} style={{padding:'0px',width:'70%'}} alt='Saanane'/></div>
       <div id="left"> <Saananedata/></div>
        </div>
        <div><Saananequalif /></div>
      </div>
    );
  }
}
export default Directors;
