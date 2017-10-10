import React,{Component} from 'react';

class Kahama extends Component{
  render(){
    return(
      <div>
      <h4 align="center">NSSF Kahama</h4>
       <div className="w3-card-2">
        <img src={require('../images/nssf-kh01.jpg' )}style={{width:'524',height:'550'}} />

     </div>


           <div className="w3-card-2">
            <img src={require('../images/nssf-kh02.jpg' )}style={{width:'524',height:'550'}} />

         </div>
      </div>
    );
  }
}
export default Kahama;
