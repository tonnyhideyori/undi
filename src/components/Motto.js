import React, { Component } from 'react';

class Motto extends Component{
render(){
return(
   <div className="table-responsive w3-panel w3-border w3-border-red w3-round-xxlarge" style={{background:"rgb(255, 228, 236)"}}>
   <table className="table">
    <thead align="center">
    <tr>
    <th>
    Innovation
    </th>
    <th>
    Industrial Expertise
    </th>
    <th>
    Efficiency
    </th>
    </tr>
    </thead>
    <tbody>
    <tr className="noborder">
    <td>
    Creative and innovative solutions in all engineering services that we provide.
    </td>
    <td>
    We have a team of highly experienced staff in many engineering fields
    </td>
    <td>
    Based on experience derived from various projects, the firm normally focuses at providing suitable designs to ensure efficiency
    </td>
    </tr>
    </tbody>

   </table>
   </div>
	);
}
}
export default Motto;
