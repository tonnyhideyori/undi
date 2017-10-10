import React,{Component} from 'react';

class Police extends Component{
  render(){
    return(
      <div>
      <h4 align="center">Police Barricks Staff Quarters</h4>
       <div className="w3-card-2">
        <img src={require('../images/police01.gif' )}style={{width:'524',height:'550'}} />

     </div>


           <div className="w3-card-2">
            <img src={require('../images/police02.jpg' )}style={{width:'524',height:'550'}} />

         </div>
      </div>
    );
  }
}
export default Police;
