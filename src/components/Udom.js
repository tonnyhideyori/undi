import React,{Component} from 'react';

const Udom=()=>{

    return(
      <div className="w3-panel w3-border w3-border-red">
      <h4 align="center">College of Education for University of Dodom(UDOM)</h4>
       <div id="left" className="floating-box">
        <img src={require('../images/udom01.jpg' )}style={{width:'51%',height:'550'}} alt='udom01' />

     </div>


           <div className="floating-box">
            <img src={require('../images/udom02.jpg' )}style={{width:'87%',height:'550'}} />

         </div>
         <div className="floating-box"><p>College of Education for University of Dodoma (UDOM) to accommodate 10,000 Students financed by Public Service Pensions Fund (PSPF), Tanzania.</p></div>
      </div>
    );

}
export default Udom;
