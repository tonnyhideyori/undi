import React,{Component} from 'react';

const Millenium=()=>{

    return(
      <div className="w3-panel w3-border w3-border-red">
      <h4 align="center">Millenium Tower</h4>
       <div className="floating-box">
        <img src={require('../images/mtower01.jpg' )}style={{width:'524',height:'550'}} />

     </div>


           <div className="floating-box">
            <img src={require('../images/mtower02.jpg' )}style={{width:'524',height:'550'}} />

         </div >
         <div className="floating-box"><p>Proposed 30 storeys, Millennium Towers Phase II Project in Dar es Salaam  for Local Authorities Pensions Fund (LAPF)</p></div>
      </div>
    );

}
export default Millenium;
