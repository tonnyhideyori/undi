import React,{Component} from 'react';

class Udom extends Component{
  render(){
    return(
      <div>
      <h4 align="center">College of Education for University of Dodom(UDOM)</h4>
       <div className="w3-card-2">
        <img src={require('../images/udom01.jpg' )}style={{width:'50',height:'550'}} />

     </div>


           <div className="w3-card-2">
            <img src={require('../images/udom02.jpg' )}style={{width:'524',height:'550'}} />

         </div>
      </div>
    );
  }
}
export default Udom;
