import React,{Component} from 'react';

const Arusha=()=>{


    return(
      <div className="w3-panel w3-border w3-border-red">
      <h4 align="center">NSSF Commercial Complex</h4>
       <div className="floating-box">
        <img src={require('../images/nssf-ar01.jpg' )}style={{width:'524',height:'550'}} />

     </div>


           <div className="floating-box">
            <img src={require('../images/nssf-ar02.jpg' )}style={{width:'524',height:'400'}} />

         </div>
         <div className="floating-box"><p>Proposed 14 storeys NSSF Commercial Complex along Moshi Road in Arusha, financed by national Social Security Fund (NSSF).</p></div>
      </div>
    );

}
export default Arusha;
