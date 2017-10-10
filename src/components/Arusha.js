import React,{Component} from 'react';

class Arusha extends Component{
  render(){
    return(
      <div>
      <h4 align="center">NSSF Commercial Complex</h4>
       <div className="w3-card-2">
        <img src={require('../images/nssf-ar01.jpg' )}style={{width:'524',height:'550'}} />

     </div>


           <div className="w3-card-2">
            <img src={require('../images/nssf-ar02.jpg' )}style={{width:'524',height:'550'}} />

         </div>
      </div>
    );
  }
}
export default Arusha;
