import React, { Component } from "react";
import Slider from "react-slick";
import './Menu.css';

export default class VerticalSwipeToSlide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
        <div>
          {/* <img src="\images\n0.jpg" width="180"  height="55px"/> */}
      
      <div className="iiimg">
      <h2> New Arrival</h2>

     <Slider {...settings}>
        <div >
          <img src ="\images\n8.jpg"/>
          </div>
          <div>
        <img src ="\images\n2.jpg" />
          </div>
          <div>
          <img src ="\images\n1.jpg" />
          </div>
          <div>
          <img src ="\images\n3.jpg"  />
          </div>
          <div>
          <img src ="\images\n4.jpg" />
          </div>
          <div>
          <img src ="\images\n5.jpg" height="200px" width="250px"  />
          </div>
          <div>
          <img src ="\images\n6.jpg" height="200px" width="250px" />
          </div>
          <div>
          <img src ="\images\n7.jpg"  height="200px" width="250px"  />
          </div>
         
        </Slider>
      </div>
      </div>
    );
  }
}