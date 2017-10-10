import React,{Component} from 'react';

class Rita extends Component{
  render(){
    return(
      <div className="w3-panel w3-border w3-border-red">
               <h4 align="center">RITA Towers</h4>
                <div className="floating-box">
                 <img src={require('../images/rita01.jpg' )}style={{width:'523',height:'348'}} />

        </div>

      </div>
    );
  }
}
export default Rita;
