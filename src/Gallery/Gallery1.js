
import React, { Component } from "react";
import Slider from "react-slick";

export default class AppendDots extends Component {
render() {
const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
appendDots: dots => (
<div
style={{
backgroundColor: "#ddd",
borderRadius: "10px",
padding: "10px"
}}
>
<ul style={{ margin: "0px" }}> {dots} </ul>
</div>
),
customPaging: i => (
<div
style={{
width: "30px",
color: "blue",
border: "1px blue solid"
}}
>
{i + 1}
</div>
)
};
return (
<div>
<Slider {...settings}>
<div>
     
          
<section class="section   " id="chefs">
<div class="container">
<div class="row">
<div class="col-lg-4 offset-lg-4 text-center">
<div class=" titie-section   wow fadeInDown animated   ">
<h1>Our Shop</h1> </div>

</div>
</div>
<div class="row">
<div class="col-lg-4  wow fadeInLeft" data-wow-delay="0.2s">
<div class="chef-item">
<div class="thumb">
<div class="overlay"></div>
<ul class="social-icons">
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-instagram"></i></a></li>
</ul>
<img src="\images\09.jpg" alt="" />
</div>
<div class="down-content">
<h4>Randy Walker</h4>
<span>Pastry Chef</span>
</div>
</div>
</div>
<div class="col-lg-4  wow fadeInLeft" data-wow-delay="0.3s">
<div class="chef-item">
<div class="thumb">
<div class="overlay"></div>
<ul class="social-icons">
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-behance"></i></a></li>
</ul>
<img src="\images\10.jpg" alt="" />
</div>
<div class="down-content">
<h4>David Martin</h4>
<span>Cookie Chef</span>
</div>
</div>
</div>
<div class="col-lg-4  wow fadeInLeft" data-wow-delay="0.4s">
<div class="chef-item">
<div class="thumb">
<div class="overlay"></div>
<ul class="social-icons">
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-google"></i></a></li>
</ul>
<img src="\images\11.jpg" alt="" />
</div>
<div class="down-content">
<h4>Peter Perkson</h4>
<span>Pancake Chef</span>
</div>
</div>
</div>
</div>
</div>
</section>

            <section class="section  two  " id="chefs">
<div class="container">
<div class="row">
<div class="col-lg-4 offset-lg-4 text-center">

</div>
</div>
<div class="row">
<div class="col-lg-4  wow fadeInLeft" data-wow-delay="0.2s">
<div class="chef-item">
<div class="thumb">
<div class="overlay"></div>
<ul class="social-icons">
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-instagram"></i></a></li>
</ul>
<img src="\images\06.jpg" alt="" />
</div>
<div class="down-content">
<h4>Randy Walker</h4>
<span>Pastry Chef</span>
</div>
</div>
</div>
<div class="col-lg-4  wow fadeInLeft" data-wow-delay="0.3s">
<div class="chef-item">
<div class="thumb">
<div class="overlay"></div>
<ul class="social-icons">
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-behance"></i></a></li>
</ul>
<img src="\images\07.jpg" alt="" />
</div>
<div class="down-content">
<h4>David Martin</h4>
<span>Cookie Chef</span>
</div>
</div>
</div>
<div class="col-lg-4  wow fadeInLeft" data-wow-delay="0.4s">
<div class="chef-item">
<div class="thumb">
<div class="overlay"></div>
<ul class="social-icons">
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-google"></i></a></li>
</ul>
<img src="\images\08.jpg" alt="" />
</div>
<div class="down-content">
<h4>Peter Perkson</h4>
<span>Pancake Chef</span>
</div>
</div>
</div>
</div>
</div>
</section>

</div>
<div>
          
<section class="section   " id="chefs">
<div class="container">
<div class="row">
<div class="col-lg-4 offset-lg-4 text-center">
<div class=" titie-section   wow fadeInDown animated   ">
<h1>Our Shop</h1> </div>

</div>
</div>
<div class="row">
<div class="col-lg-4  wow fadeInLeft" data-wow-delay="0.2s">
<div class="chef-item">
<div class="thumb">
<div class="overlay"></div>
<ul class="social-icons">
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-instagram"></i></a></li>
</ul>
<img src="\images\AAWW.png" alt="" />
</div>
<div class="down-content">
<h4>Randy Walker</h4>
<span>Pastry Chef</span>
</div>
</div>
</div>
<div class="col-lg-4  wow fadeInLeft" data-wow-delay="0.3s">
<div class="chef-item">
<div class="thumb">
<div class="overlay"></div>
<ul class="social-icons">
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-behance"></i></a></li>
</ul>
<img src="\images\AWW.jpg" alt="" />
</div>
<div class="down-content">
<h4>David Martin</h4>
<span>Cookie Chef</span>
</div>
</div>
</div>
<div class="col-lg-4  wow fadeInLeft" data-wow-delay="0.4s">
<div class="chef-item">
<div class="thumb">
<div class="overlay"></div>
<ul class="social-icons">
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-google"></i></a></li>
</ul>
<img src="\images\AQ.jpg" alt="" />
</div>
<div class="down-content">
<h4>Peter Perkson</h4>
<span>Pancake Chef</span>
</div>
</div>
</div>
</div>
</div>
</section>

            <section class="section  two  " id="chefs">
<div class="container">
<div class="row">
<div class="col-lg-4 offset-lg-4 text-center">

</div>
</div>
<div class="row">
<div class="col-lg-4  wow fadeInLeft" data-wow-delay="0.2s">
<div class="chef-item">
<div class="thumb">
<div class="overlay"></div>
<ul class="social-icons">
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-instagram"></i></a></li>
</ul>
<img src="\images\stylish-hand-bag-500x500.jpg" alt="" />
</div>
<div class="down-content">
<h4>Randy Walker</h4>
<span>Pastry Chef</span>
</div>
</div>
</div>
<div class="col-lg-4  wow fadeInLeft" data-wow-delay="0.3s">
<div class="chef-item">
<div class="thumb">
<div class="overlay"></div>
<ul class="social-icons">
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-behance"></i></a></li>
</ul>
<img src="\images\AZ.jpg" alt="" />
</div>
<div class="down-content">
<h4>David Martin</h4>
<span>Cookie Chef</span>
</div>
</div>
</div>
<div class="col-lg-4  wow fadeInLeft" data-wow-delay="0.4s">
<div class="chef-item">
<div class="thumb">
<div class="overlay"></div>
<ul class="social-icons">
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-google"></i></a></li>
</ul>
<img src="\images\AS.jpg" alt="" />
</div>
<div class="down-content">
<h4>Peter Perkson</h4>
<span>Pancake Chef</span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
<div>



         
<section class="section   " id="chefs">
<div class="container">
<div class="row">
<div class="col-lg-4 offset-lg-4 text-center">
<div class=" titie-section   wow fadeInDown animated   ">
<h1>Our Shop</h1> </div>

</div>
</div>
<div class="row">
<div class="col-lg-4  wow fadeInLeft" data-wow-delay="0.2s">
<div class="chef-item">
<div class="thumb">
<div class="overlay"></div>
<ul class="social-icons">
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-instagram"></i></a></li>
</ul>
<img src="\images\w1.jpg" alt="" />
</div>
<div class="down-content">
<h4>Randy Walker</h4>
<span>Pastry Chef</span>
</div>
</div>
</div>
<div class="col-lg-4  wow fadeInLeft" data-wow-delay="0.3s">
<div class="chef-item">
<div class="thumb">
<div class="overlay"></div>
<ul class="social-icons">
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-behance"></i></a></li>
</ul>
<img src="\images\w2.jpg" alt="" />
</div>
<div class="down-content">
<h4>David Martin</h4>
<span>Cookie Chef</span>
</div>
</div>
</div>
<div class="col-lg-4  wow fadeInLeft" data-wow-delay="0.4s">
<div class="chef-item">
<div class="thumb">
<div class="overlay"></div>
<ul class="social-icons">
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-google"></i></a></li>
</ul>
<img src="\images\w3.jpg" alt="" />
</div>
<div class="down-content">
<h4>Peter Perkson</h4>
<span>Pancake Chef</span>
</div>
</div>
</div>
</div>
</div>
</section>

            <section class="section  two  " id="chefs">
<div class="container">
<div class="row">
<div class="col-lg-4 offset-lg-4 text-center">

</div>
</div>
<div class="row">
<div class="col-lg-4  wow fadeInLeft" data-wow-delay="0.2s">
<div class="chef-item">
<div class="thumb">
<div class="overlay"></div>
<ul class="social-icons">
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-instagram"></i></a></li>
</ul>
<img src="\images\w4.jpg" alt="" />
</div>
<div class="down-content">
<h4>Randy Walker</h4>
<span>Pastry Chef</span>
</div>
</div>
</div>
<div class="col-lg-4  wow fadeInLeft" data-wow-delay="0.3s">
<div class="chef-item">
<div class="thumb">
<div class="overlay"></div>
<ul class="social-icons">
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-behance"></i></a></li>
</ul>
<img src="\images\w5.jpg" alt="" />
</div>
<div class="down-content">
<h4>David Martin</h4>
<span>Cookie Chef</span>
</div>
</div>
</div>
<div class="col-lg-4  wow fadeInLeft" data-wow-delay="0.4s">
<div class="chef-item">
<div class="thumb">
<div class="overlay"></div>
<ul class="social-icons">
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-google"></i></a></li>
</ul>
<img src="\images\w6.jpg" alt="" />
</div>
<div class="down-content">
<h4>Peter Perkson</h4>
<span>Pancake Chef</span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
<div>
<h3>4</h3>
</div>
<div>
<h3>5</h3>
</div>
<div>
<h3>6</h3>
</div>
</Slider>


<br/><br/><br/><br/>
</div>
);
}
}









// كود عائشه 

// import React, { useState } from 'react';
// // import 'swiper/css/swiper.css'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
// import 'swiper/swiper-bundle.css';

// import '../../App.css';
// SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

// function Slide() {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   const [controlledSwiper, setControlledSwiper] = useState(null);

//   const slides = [];
//   for (let i = 0; i < 5; i += 1) {
//     slides.push(
//       <SwiperSlide key={`slide-${i}`} tag="li">
//         <img
//           src={`https://picsum.photos/id/${i + 1}/500/300`}
//           style={{ listStyle: 'none' }}
//           alt={`Slide ${i}`}
//         />
//       </SwiperSlide>
//     );
//   }

//   const thumbs = [];
//   for (let i = 0; i < 5; i += 1) {
//     thumbs.push(
//       <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
//         <img
//           src={`https://picsum.photos/id/${i}/163/100`}
//           alt={`Thumbnail ${i}`}
//         ></img>
//       </SwiperSlide>
//     );
//   }

//   const slides2 = [];
//   for (let i = 9; i < 14; i += 1) {
//     slides2.push(
//       <SwiperSlide key={`slide-${i}`} tag="li">
//         <img
//           src={`https://picsum.photos/id/${i + 1}/500/300`}
//           style={{ listStyle: 'none' }}
//           alt={`Slide ${i}`}
//         />
//       </SwiperSlide>
//     );
//   }

//   return (
//     <React.Fragment>
//       <Swiper
//         id="main"
//         thumbs={{ swiper: thumbsSwiper }}
//         controller={{ control: controlledSwiper }}
//         tag="section"
//         wrapperTag="ul"
//         navigation
//         pagination
//         spaceBetween={0}
//         slidesPerView={1}
//         onInit={(swiper) => console.log('Swiper initialized!', swiper)}
//         onSlideChange={(swiper) => {
//           console.log('Slide index changed to: ', swiper.activeIndex);
//         }}
//         onReachEnd={() => console.log('Swiper end reached')}
//       >
//         {slides}
//       </Swiper>

//       <Swiper
//         id="thumbs"
//         spaceBetween={4}
//         slidesPerView={3}
//         onSwiper={setThumbsSwiper}

//       >
//         {thumbs}
//       </Swiper>

//       <Swiper id="controller" onSwiper={setControlledSwiper}>
//         {slides2}
//       </Swiper>
//     </React.Fragment>
//   );
// }

// export default Slide;