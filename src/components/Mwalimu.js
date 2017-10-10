import React,{Component} from 'react';

class Mwalimu extends Component{
  render(){
    return(
      <div>
             <h4 align="center">Mwalimu House</h4>
              <div className="w3-card-2">
               <img src={require('../images/mwalimu01.jpg' )}style={{width:'524',height:'550'}} />

            </div>


                  <div className="w3-card-2">
                   <img src={require('../images/mwalimu02.jpg' )}style={{width:'524',height:'550'}} />

                </div>

      </div>
    );
  }
}
export default Mwalimu;
