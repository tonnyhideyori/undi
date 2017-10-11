import React,{Component} from 'react';

class Mwalimu extends Component{
  render(){
    return(
      <div className="w3-panel w3-border w3-border-red">
             <h4 align="center">Mwalimu House</h4>
              <div className="floating-box">
               <img src={require('../images/mwalimu01.jpg' )}style={{width:'524',height:'550'}} />

            </div>


                  <div className="floating-box">
                   <img src={require('../images/mwalimu02.jpg' )}style={{width:'524',height:'550'}} />

                </div>
  <div className="floating-box"><p>11 Storey Mwalimu House, Ilala, Dar es Salaam. For Tanzania Teachers Union.</p></div>
      </div>
    );
  }
}
export default Mwalimu;
