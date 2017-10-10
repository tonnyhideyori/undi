import React, { Component } from 'react';
class Head extends Component{
  render(){
    return(
      <p>
       <strong>Head Office:</strong>
           <p>
                   P.O.Box 12615,
                      Plot No.92,Luhinde Street,
                      UNDI house,
                      Ada Estate,
                      Dar es salaam,
                      Tanzania.<br></br>
                      Phone &nbsp;<i className="fa fa-phone-square" style={{font:"24px"}}></i>&nbsp;:+255-22-266-8874 &nbsp; &nbsp; fax&nbsp;<i className="fa fa-fax" style={{font:"24px"}}></i>&nbsp;:+255-22-266-7452 &nbsp;&nbsp;&nbsp;E-mail&nbsp;
                      <i className='fa fa-envelope-o' style={{font:'24px'}}></i>&nbsp;:undi@undi.co.tz
                      </p>
                   </p>
    );
  }
}
export default Head;
