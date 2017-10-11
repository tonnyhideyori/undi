import React,{Component} from 'react';

const Kahama=()=>{

    return(
      <div className="w3-panel w3-border w3-border-red">
      <h4 align="center">NSSF Kahama</h4>
       <div className="floating-box">
        <img src={require('../images/nssf-kh01.jpg' )}style={{width:'524',height:'550'}} />

     </div>


           <div className="floating-box">
            <img src={require('../images/nssf-kh02.jpg' )}style={{width:'524',height:'550'}} />

         </div>
         <div className="floating-box"><p>Design and Construction supervision to NSSF Regional Office Block (Civil & Structural Engineers)
           </p></div>
      </div>
    );

}
export default Kahama;
