import React,{Component} from 'react';

class Info extends Component{
  render(){
    return(
      <div>
      <h4 align="center">College of Informatics and Virtual Sciene for UDOM</h4>
       <div className="w3-card-2">
        <img src={require('../images/udom03.jpg' )}style={{width:'524',height:'550'}} />

     </div>


           <div className="w3-card-2">
            <img src={require('../images/udom04.jpg' )}style={{width:'524',height:'550'}} />

         </div>
      </div>
    );
  }
}
export default Info;
