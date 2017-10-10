import React,{Component} from 'react';
import Tabproject from './Tabproject'
import Navbar from './Navbar'
import Slidingimage from './SlidingImage';
import Footer from './Footer';
const Project=()=>{
    return(
      <div className="container" style={{background:"rgb(255, 235, 255)"}}>
      <Navbar/>
      <Slidingimage/>
      <div className="w3-panel w3-border w3-border-blue-grey w3-round-large">
      <Tabproject/>
      </div>
      <Footer/>
      </div>
    );

}
export default Project;
