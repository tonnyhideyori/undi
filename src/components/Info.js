import React,{Component} from 'react';

const Info=()=>{

    return(
      <div className="w3-panel w3-border w3-border-red">
      <h4 align="center">College of Informatics and Virtual Sciene for UDOM</h4>
       <div className="floating-box">
        <img src={require('../images/udom03.jpg' )}style={{width:'524',height:'550'}} />

     </div>


           <div className="floating-box">
            <img src={require('../images/udom04.jpg' )}style={{width:'524',height:'550'}} />

         </div>
      </div>
    );
  }

export default Info;
