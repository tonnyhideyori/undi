import React, {Component} from 'react';
import Wisa from './Wisa';
import Philip from './Philip';
import Saanane from './Saanane';
import Kimweri from './Kimweri';
class Directors extends Component{
  render(){
    return(
      <div>
          <Philip/>
          <Wisa/>
          <Kimweri/>
          <Saanane/>
      </div>
    );
  }
}
export default Directors;
