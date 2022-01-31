
import React, { Component } from 'react'

import "./Home.css";
import HomeSec2 from "./HomeSec2" ;

// import Footer from "./Footer" ;


class Home extends Component {
render() {
    
return (
<div>

 
<section class="new-section">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="titie-section wow fadeInDown animated ">
<h1>NEW COLLECTION</h1>
</div>
</div>
</div>
<div class="row">
<div class="col-md-3 col-sm-6 wow fadeInLeft animated" data-wow-delay="0.2s">
<div class="product-item">
<img src="\images\01 (1).jpg" class="img-responsive" width="255" height="255" alt=""/>
<div class="product-hover">
<div class="product-meta">
<a href="#"><i class="pe-7s-like"></i></a>
<a href="#"><i class="pe-7s-shuffle"></i></a>
<a href="#"><i class="pe-7s-clock"></i></a>
<a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
</div>
</div>
<div class="product-title">
<a href="#">
<h3>Blue Tshirt</h3>
<span>$26</span>
</a>
</div>
</div>
</div>
<div class="col-md-3 col-sm-6 wow fadeInLeft animated" data-wow-delay="0.4s">
<div class="product-item">
<img src="\images\03 (1).jpg" class="img-responsive" width="255" height="255" alt=""/>
<div class="product-hover">
<div class="product-meta">
<a href="#"><i class="pe-7s-like"></i></a>
<a href="#"><i class="pe-7s-shuffle"></i></a>
<a href="#"><i class="pe-7s-clock"></i></a>
<a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
</div>
</div>
<div class="product-title">
<a href="#">
<h3>WOMAN shirt</h3>
<span>$31</span>
</a>
</div>
</div>
</div>
<div class="col-md-3 col-sm-6 wow fadeInLeft animated" data-wow-delay="0.6s">
<div class="product-item">
<img src="\images\12.jpg" class="img-responsive" width="255" height="200" alt=""/>
<div class="product-hover">
<div class="product-meta">
<a href="#"><i class="pe-7s-like"></i></a>
<a href="#"><i class="pe-7s-shuffle"></i></a>
<a href="#"><i class="pe-7s-clock"></i></a>
<a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
</div>
</div>
<div class="product-title">
<a href="#">
<h3>YELLOW Tshirt</h3>
<span>$21</span>
</a>
</div>
</div>
</div>
<div class="col-md-3 col-sm-6 wow fadeInLeft animated" data-wow-delay="0.8s">
<div class="product-item">
<img src="\images\06.jpg" class="img-responsive" width="255" height="255" alt=""/>
<div class="product-hover">
<div class="product-meta">
<a href="#"><i class="pe-7s-like"></i></a>
<a href="#"><i class="pe-7s-shuffle"></i></a>
<a href="#"><i class="pe-7s-clock"></i></a>
<a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
</div>
</div>
<div class="product-title">
<a href="#">
<h3>Cool lingerie</h3>
<span>$56</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section class="featured-section">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="titie-section wow fadeInDown animated ">
<h1>FEATURED PRODUCTS</h1>
</div>
</div>
</div>
<div class="row">
<div class="col-md-12">
<div class="filter-menu">
<ul class="button-group sort-button-group">
<li class="button active" data-category="all">All<span>8</span></li>
<li class="button" data-category="cat-1">Dresses and Suits<span>2</span></li>
<li class="button" data-category="cat-2">Accessories<span>2</span></li>
<li class="button" data-category="cat-3">Miscellaneous<span>4</span></li>
</ul>
</div>
</div>
</div>
<div class="row featured isotope">
<div class="col-md-3 col-sm-6 col-xs-12 cat-3 featured-items isotope-item">
<div class="product1-item">
<img src="images/product1.png" class="img-responsive" width="255" height="322" alt=""/>
<div class="sell-meta">
<a href="#" class="new-item">New</a>
<a href="#" class="sell-item">Sell</a>
</div>
<div class="product1-hover">
<div class="product1-meta">
<a href="#"><i class="pe-7s-like"></i></a>
<a href="#"><i class="pe-7s-shuffle"></i></a>
<a href="#"><i class="pe-7s-clock"></i></a>
<a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
</div>
</div>
<div class="product1-title">
<a href="#">
<h3>Cool lingerie</h3>
<span>$26</span>
</a>
</div>
</div>
</div>
<div class="col-md-3 col-sm-6 col-xs-12 cat-2 featured-items isotope-item">
<div class="product1-item">
<img src="images/product2.png" class="img-responsive" width="255" height="322" alt=""/>
<div class="sell-meta">
<a href="#" class="new-item">New</a>
</div>
<div class="product1-hover">
<div class="product1-meta">
<a href="#"><i class="pe-7s-like"></i></a>
<a href="#"><i class="pe-7s-shuffle"></i></a>
<a href="#"><i class="pe-7s-clock"></i></a>
<a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
</div>
</div>
<div class="product1-title">
<a href="#">
<h3>Cool lingerie</h3>
<span>$21</span>
</a>
</div>
</div>
</div>
<div class="col-md-3 col-sm-6 col-xs-12 cat-1 featured-items isotope-item">
<div class="product1-item">
<img src="images/product3.png" class="img-responsive" width="255" height="322" alt=""/>
<div class="sell-meta">
<a href="#" class="new-item">New</a>
<a href="#" class="sell-item">Sell</a>
</div>
<div class="product1-hover">
<div class="product1-meta">
<a href="#"><i class="pe-7s-like"></i></a>
<a href="#"><i class="pe-7s-shuffle"></i></a>
<a href="#"><i class="pe-7s-clock"></i></a>
<a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
</div>
</div>
<div class="product1-title">
<a href="#">
<h3>Cool lingerie</h3>
<span>$31</span>
</a>
</div>
</div>
</div>
<div class="col-md-3 col-sm-6 col-xs-12 cat-3 featured-items isotope-item">
<div class="product1-item">
<img src="images/product4.png" class="img-responsive" width="255" height="322" alt=""/>
<div class="sell-meta">
<a href="#" class="sell-item">Sell</a>
</div>
<div class="product1-hover">
<div class="product1-meta">
<a href="#"><i class="pe-7s-like"></i></a>
<a href="#"><i class="pe-7s-shuffle"></i></a>
<a href="#"><i class="pe-7s-clock"></i></a>
<a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
</div>
</div>
<div class="product1-title">
<a href="#">
<h3>Cool lingerie</h3>
<span>$56</span>
</a>
</div>
</div>
</div>
<div class="col-md-3 col-sm-6 col-xs-12 cat-2 featured-items isotope-item">
<div class="product1-item">
<img src="images/product5.png" class="img-responsive" width="255" height="322" alt=""/>
<div class="sell-meta">
<a href="#" class="sell-item">Sell</a>
</div>
<div class="product1-hover">
<div class="product1-meta">
<a href="#"><i class="pe-7s-like"></i></a>
<a href="#"><i class="pe-7s-shuffle"></i></a>
<a href="#"><i class="pe-7s-clock"></i></a>
<a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
</div>
</div>
<div class="product1-title">
<a href="#">
<h3>Cool lingerie</h3>
<span>$26</span>
</a>
</div>
</div>
</div>
<div class="col-md-3 col-sm-6 col-xs-12 cat-3 featured-items isotope-item">
<div class="product1-item">
<img src="images/product6.png" class="img-responsive" width="255" height="322" alt=""/>
<div class="sell-meta">
<a href="#" class="new-item">New</a>
<a href="#" class="sell-item">Sell</a>
</div>
<div class="product1-hover">
<div class="product1-meta">
<a href="#"><i class="pe-7s-like"></i></a>
<a href="#"><i class="pe-7s-shuffle"></i></a>
<a href="#"><i class="pe-7s-clock"></i></a>
<a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
</div>
</div>
<div class="product1-title">
<a href="#">
<h3>Cool lingerie</h3>
<span>$36</span>
</a>
</div>
</div>
</div>
<div class="col-md-3 col-sm-6 col-xs-12 cat-1 featured-items isotope-item">
<div class="product1-item">
<img src="images/product7.png" class="img-responsive" width="255" height="322" alt=""/>
<div class="sell-meta">
<a href="#" class="new-item">New</a>
</div>
<div class="product1-hover">
<div class="product1-meta">
<a href="#"><i class="pe-7s-like"></i></a>
<a href="#"><i class="pe-7s-shuffle"></i></a>
<a href="#"><i class="pe-7s-clock"></i></a>
<a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
</div>
</div>
<div class="product1-title">
<a href="#">
<h3>Cool lingerie</h3>
<span>$56</span>
</a>
</div>
</div>
</div>
<div class="col-md-3 col-sm-6 col-xs-12 cat-3 featured-items isotope-item">
<div class="product1-item">
<img src="images/product8.png" class="img-responsive" width="255" height="322" alt=""/>
<div class="sell-meta">
<a href="#" class="sell-item">Sell</a>
</div>
<div class="product1-hover">
<div class="product1-meta">
<a href="#"><i class="pe-7s-like"></i></a>
<a href="#"><i class="pe-7s-shuffle"></i></a>
<a href="#"><i class="pe-7s-clock"></i></a>
<a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
</div>
</div>
<div class="product1-title">
<a href="#">
<h3>Cool lingerie</h3>
<span>$66</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section class="offer-section">
<div class="container">
<div class="row">
<div class="col-md-12 wow fadeInDown animated ">
<h1>END OF SEASON SALE</h1>
<h2>Up to 35% off Women's Denim</h2>
</div>
</div>
</div>
</section>

<section class="best-seller-section">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="titie-section wow fadeInDown animated ">
<h1>BEST SELLERS</h1>
</div>
</div>
</div>
<div class="row">
<div class="col-md-3 col-sm-6 wow fadeInDown animated" data-wow-delay="0.2s">
<div class="product-item">
<img src="\images\04.jpg" class="img-responsive" width="255" height="255" alt="" />
<div class="product-hover">
<div class="product-meta">
<a href="#"><i class="pe-7s-like"></i></a>
<a href="#"><i class="pe-7s-shuffle"></i></a>
<a href="#"><i class="pe-7s-clock"></i></a>
<a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
</div>
</div>
<div class="product-title">
<a href="#">
<h3>Blue Tshirt</h3>
<span>$26</span>
</a>
</div>
</div>
</div>
<div class="col-md-3 col-sm-6 wow fadeInDown animated" data-wow-delay="0.4s">
<div class="product-item">
<img src="\images\05.jpg" class="img-responsive" width="255" height="255" alt=""/>
<div class="product-hover">
<div class="product-meta">
<a href="#"><i class="pe-7s-like"></i></a>
<a href="#"><i class="pe-7s-shuffle"></i></a>
<a href="#"><i class="pe-7s-clock"></i></a>
<a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
</div>
</div>
<div class="product-title">
<a href="#">
<h3>WOMAN shirt</h3>
<span>$31</span>
</a>
</div>
</div>
</div>
<div class="col-md-3 col-sm-6 wow fadeInDown animated" data-wow-delay="0.6s">
<div class="product-item">
<img src="\images\girl1.jpg" class="img-responsive" width="255" height="255" alt=""/>
<div class="product-hover">
<div class="product-meta">
<a href="#"><i class="pe-7s-like"></i></a>
<a href="#"><i class="pe-7s-shuffle"></i></a>
<a href="#"><i class="pe-7s-clock"></i></a>
<a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
</div>
</div>
<div class="product-title">
<a href="#">
<h3>YELLOW Tshirt</h3>
<span>$21</span>
</a>
</div>
</div>
</div>
<div class="col-md-3 col-sm-6 wow fadeInDown animated" data-wow-delay="0.8s">
<div class="product-item">
<img src="\images\02 (1).jpg"  width="255" height="255" alt=""/>
<div class="product-hover">
<div class="product-meta">
<a href="#"><i class="pe-7s-like"></i></a>
<a href="#"><i class="pe-7s-shuffle"></i></a>
<a href="#"><i class="pe-7s-clock"></i></a>
<a href="#"><i class="pe-7s-cart"></i>Add to Cart</a>
</div>
</div>
<div class="product-title">
<a href="#">
<h3>Cool lingerie</h3>
<span>$56</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
{/* 
<section class="review-section">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="titie-section wow fadeInDown animated ">
<h1>customer review</h1>
</div>
</div>
</div>
<div class="row">
<div id="feedback" class="carousel slide feedback" data-ride="feedback">
<div class="carousel-inner" role="listbox">
<div class="item active">
<img src="images/member1.png" width="320" height="439" alt=""/>
<div class="carousel-caption">
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, </p>
<h3>- Olivia -</h3>
<span>Melbour, Aus</span>
</div>
</div>
<div class="item">
<img src="images/member2.png" width="320" height="439" alt=""/>
<div class="carousel-caption">
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, </p>
<h3>- Olivia -</h3>
<span>Melbour, Aus</span>
</div>
</div>
<div class="item">
<img src="images/member3.png" width="320" height="439" alt=""/>
<div class="carousel-caption">
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, </p>
<h3>- Olivia -</h3>
<span>Melbour, Aus</span>
</div>
</div>
</div>
<ol class="carousel-indicators review-controlar">
<li data-target="#feedback" data-slide-to="0" class="active">
<img src="images/member1.png" width="320" height="439" alt=""/>
</li>
<li data-target="#feedback" data-slide-to="1">
<img src="images/member2.png" width="320" height="439" alt=""/>
</li>
<li data-target="#feedback" data-slide-to="2">
<img src="images/member3.png" width="320" height="439" alt=""/>
</li>
</ol>
</div>
</div>
</div>
</section> */}

<HomeSec2/>





<section class="news-section">
<div class="container">
<div class="row">
<div class="col-sm-12">
<div class="titie-section wow fadeInDown animated ">
<h1>Latest News</h1>
</div>
</div>
</div>
<div class="row" >
<div class="col-sm-4 wow fadeInDown animated" data-wow-delay="0.2s">
<div class="blog-item">
<a href="#"><img src="images/blog1.jpg" width="350" height="262" alt=""/></a>
<h3>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean </h3>
<p>Nam nec tellus a odio tincidunt auc. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt</p>
<a href="#">Read More</a>
</div>
</div>
<div class="col-sm-4 wow fadeInDown animated" data-wow-delay="0.4s">
<div class="blog-item">
<a href="#"><img src="images/blog2.jpg" width="350" height="262" alt=""/></a>
<h3>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean </h3>
<p>Nam nec tellus a odio tincidunt auc. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt</p>
<a href="#">Read More</a>

</div>
</div>
<div class="col-sm-4 wow fadeInDown animated" data-wow-delay="0.6s">
<div class="blog-item">
<a href="#"><img src="images/blog3.jpg" width="350" height="262" alt=""/></a>
<h3>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean </h3>
<p>Nam nec tellus a odio tincidunt auc. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt</p>
<a href="#">Read More</a>
</div>
</div>
</div>
</div>
</section>

<section class="contact-section">
<div class="container">
<div class="row">
<div class="col-sm-12">
<div class="titie-section wow fadeInDown animated ">
<h1>GET IN TOUCH</h1>
</div>
</div>
</div>
<div class="row">
<div class="col-md-6 wow fadeInLeft animated">
<div class="left-content">
<h1><span>S</span>OMAYA</h1>
<h3>We'd love To Meet You In Person Or Via The Web!</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel nulla sapien. Class aptent tacitiaptent taciti sociosqu ad lit himenaeos. Suspendisse massa urna, luctus ut vestibulum necs et, vulputate quis urna. Donec at commodo erat.</p>
<div class="contact-info">
<p><b>Main Office:</b> Kuwait city </p>
<p><b>Phone:</b> +965 90038697</p>
<p><b>Email:</b> somayasaeid@gmail.com</p>
</div>
<div class="social-media">
<ul>
<li><a href="#"><i class="fa fa-facebook"></i></a></li>
<li><a href="#"><i class="fa fa-twitter"></i></a></li>
<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
<li><a href="#"><i class="fa fa-instagram"></i></a></li>
</ul>
</div>
</div>
</div>
<div class="col-md-6 wow fadeInRight animated">
<form action="" method="" class="contact-form">
<div class="row">
<div class="col-md-6">
<div class="input-group">
<input type="text" class="form-control" id="name" placeholder="Your Name"/>
</div>
</div>
<div class="col-md-6">
<div class="input-group">
<input type="text" class="form-control" id="name" placeholder="Your Email"/>
</div>
</div>
</div>
<div class="row">
<div class="col-md-6">
<div class="input-group">
<input type="text" class="form-control" id="name" placeholder="Subject"/>
</div>
</div>
<div class="col-md-6">
<div class="input-group">
<input type="text" class="form-control" id="name" placeholder="Website URL"/>
</div>
</div>
</div>
<div class="row">
<div class="col-md-12">
<div class="input-group">
<textarea name="" id="" class="form-control" cols="30" rows="5" placeholder="Your Message..."></textarea>
</div>
</div>
</div>
<div class="row">
<div class="col-md-12">
<div class="input-group">
<input type="submit" class="contact-submit" value="Send" />
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</section>

<footer class="footer">
<div class="container">
<div class="row">
<div class="col-md-12">
<p class="center">Made by <i class="fa fa-love"></i><a href="https://s">Somaya AbdElhameed</a>
</p>

</div>
</div>
</div>
</footer>


{/* <Footer/> */}

</div>
)
}
}

export default Home
