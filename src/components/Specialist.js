import React, { Component } from 'react';

class Specialist extends Component{
  render(){
    return(
      <div>
      <h3 align="center"><p><i>The company is able to provide the following lists of specialists:</i></p></h3>
      <br></br>
      <table className="w3-table-all w3-centered">
      <tbody>
   <tr>
     <td className="w3-hover-black">Highways Engineer</td>
     <td className="w3-hover-blue-grey">Water Resources Expert</td>

   </tr>
   <tr>
     <td className="w3-hover-pale-yellow">Materials Engineer</td>
     <td className="w3-hover-amber">Project Managers</td>

   </tr>
   <tr>
     <td className="w3-hover-black">Structural Engineer	</td>
     <td className="w3-hover-pale-red">Power and Energy Expert</td>
   </tr>
   <tr>
     <td className="w3-hover-orange">Drainage Engineer</td>
     <td className="w3-hover-black">Power and Energy Expert</td>
   </tr>
   <tr>
     <td className="w3-hover-pink">Topographic Surveyor</td>
     <td className="w3-hover-purple">Hydro-geologist</td>
   </tr>
   <tr>
     <td className="w3-hover-cyan">Contracts Expert	</td>
     <td className="w3-hover-deep-orange">Information Systems Expert</td>
   </tr>
   <tr>
     <td className="w3-hover-grey">Traffic Management Expert</td>
     <td className="w3-hover-red">Irrigation engineer</td>
   </tr>
   <tr>
     <td className="w3-hover-pale-red">Hydrologist</td>
     <td className="w3-hover-blue-grey">Mechanical engineer</td>
   </tr>
   <tr>
     <td className="w3-hover-black">Transportation Economist</td>
     <td className="w3-hover-deep-orange">Electrical Engineer</td>
   </tr>
   <tr>
     <td className="w3-hover-lime">Natural Resources Expert</td>
     <td className="w3-hover-black">Public Health expert</td>
   </tr>
   <tr>
     <td className="w3-hover-grey">Environmentalist</td>
     <td className="w3-hover-light-blue">Community Development Expert</td>
   </tr>
</tbody>
 </table>
      </div>
    );
  }
}
export default Specialist;
