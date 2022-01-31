
import React, { Component } from "react";
import Slider from "react-slick";
import "./Home.css";
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

          
<section class="client-section">
<div class="container">
<div class="row">
<div class="col-sm-12">
<div class="titie-section wow fadeInDown animated ">
<h1>our partner</h1>
</div>
</div>
</div>



</div>

        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
          <img src="\images\client_01.jpg"    />
          </div>
          <div>
          <img src="\images\client_02.jpg"    />
          </div>
          <div>
          <img src="\images\client_03.jpg"    />
          </div>
          <div>
          <img src="\images\client_04.jpg"    />
          </div>
          <div>
          <img src="\images\client_03.jpg"    />
          </div>
          <div>
          <img src="\images\client_02.jpg"    />
          </div>
          <div>
          <img src="\images\client_01.jpg"    />
          </div>
          <div>
          <img src="\images\client_04.jpg"    />
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="btn btn-outline-secondary mx-3 my-4 "onClick={this.play}>
            Play
          </button>
          <button className="btn btn-outline-secondary " onClick={this.pause}>
            Pause
          </button>
        </div>
        </section>
      </div>
    );
  }
}





