import React, { Component } from 'react';

class Slidingimage extends Component{
	render(){
		return(
<div className="container">
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>
    
    <div className="carousel-inner" role="listbox">

      <div className="item active">
        <img src={require('../images/slide1.jpg')} width="460" height="345" alt='slide1'/>
      </div>

      <div className="item">
        <img src={require('../images/slide2.jpg')}  width="460" height="345" alt='slide2'/>
      </div>
    
      <div className="item">
        <img src={require('../images/slide3.jpg')} width="460" height="345" alt='slide3' />
      </div>

      <div className="item">
        <img src={require('../images/slide4.jpg')} style={{width:'100%'}} alt='slide4'/>
      </div>
   </div>
   
    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  
</div>
</div>

			);
	}
}

export default Slidingimage;