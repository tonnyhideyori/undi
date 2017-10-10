import React,{Component} from 'react';

const Airport=()=>{

    return(
      <div className="w3-panel w3-border w3-border-red">
      <h4 align="center">NSSF Kahama</h4>
       <div className="floating-box">
        <img src={require('../images/airport01.jpg' )}style={{width:'524',height:'550'}} />

     </div>
           <div className="floating-box">
            <img src={require('../images/airport02.jpg' )}style={{width:'524',height:'550'}} />

         </div>
      </div>
    );

}
export default Airport;
