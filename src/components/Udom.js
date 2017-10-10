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
      </div>
    );

}
export default Udom;
