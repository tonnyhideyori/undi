import React, {Component} from 'react';
import Wisa from './Wisa';
import Philip from './Philip';
import Saanane from './Saanane';
import Kimweri from './Kimweri';
class Directors extends Component{
  render(){
    return(
      <div>
         <div className="w3-panel w3-border-bottom w3-border-green">
          <Philip/>
          </div>
          <div className="w3-panel w3-border-bottom w3-border-green">
          <Wisa/>
          </div>
          <div className="w3-panel w3-border-bottom w3-border-green">
          <Kimweri/>
          </div>
          <div className="w3-panel w3-border-bottom w3-border-green">
          <Saanane/>
          </div>
      </div>
    );
  }
}
export default Directors;
