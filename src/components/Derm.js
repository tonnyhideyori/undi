import React,{Component} from 'react';

const Derm =()=>{
    return(
      <div className="w3-panel w3-border w3-border-red">
      <h4 align="center">Mwalimu House</h4>
       <div className="floating-box">
        <img src={require('../images/derm01.jpg' )}style={{width:'524',height:'550'}} />

     </div>


           <div className="floating-box">
            <img src={require('../images/derm02.jpg' )}style={{width:'524',height:'550'}} />
         </div>
         
         <div className="floating-box"><p>Derm Complex, Kijitonyama, Dar es Salaam, Tanzania.</p></div>
      </div>
    );

}
export default Derm;
