
import React, { Component } from "react";
import Slider from "react-slick";
export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div>

          
<section class="bg-light py-5">
<div class="container my-4">
<div class="row text-center py-3">
<div class="col-lg-6 m-auto">
<div class="titie-section   wow fadeInDown animated "><h1>Our Brands</h1> </div>
<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
Lorem ipsum dolor sit amet.
</p>
</div>
</div>



</div>

        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
          <img src="\images\brand-1.png"    />
          </div>
          <div>
          <img src="\images\brand-3.png"    />
          </div>
          <div>
          <img src="\images\brand-4.png"    />
          </div>
          <div>
          <img src="\images\brand-1.png"    />
          </div>
          <div>
          <img src="\images\brand-5.png"    />
          </div>
          <div>
          <img src="\images\brand-4.png"    />
          </div>
          <div>
          <img src="\images\brand-3.png"    />
          </div>
         
        </Slider>
        </section>
      </div>
    );
  }
}





