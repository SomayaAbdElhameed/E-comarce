import React, { Component } from "react";
import Slider from "react-slick";
import './Menu.css';
import Shop2 from "./Shop2";
import Footer from "../Footer" ;

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
          
        >
          <ul > {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div className="page-item">
          {i + 1}
        </div>
      )
    };
    return (
      <div >
        <Slider {...settings}>
          <div>

          <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg" role="document">
<div class="w-100 pt-1 mb-5 text-right">
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<form action="" method="get" class="modal-content modal-body border-0 p-0">
<div class="input-group mb-2">
<input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ..."/>
<button type="submit" class="input-group-text bg-success text-light">
<i class="fa fa-fw fa-search text-white"></i>
</button>
</div>
</form>
</div>
</div>
<div class="container py-5 ">
<div class="row">

<div class="col-lg-3 rit">
<h1 class="h2 pb-4">Categories</h1>
<ul class="list-unstyled templatemo-accordion">
<li class="pb-3">
<a class="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
Gender
<i class="fa fa-fw fa-chevron-circle-down mt-1"></i>
</a>
<ul class="collapse show list-unstyled pl-3">
<li><a class="text-decoration-none" href="#">Men</a></li>
<li><a class="text-decoration-none" href="#">Women</a></li>
</ul>
</li>
<li class="pb-3">
<a class="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
Sale
<i class="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
</a>
<ul id="collapseTwo" class="collapse list-unstyled pl-3">
<li><a class="text-decoration-none" href="#">Sport</a></li>
<li><a class="text-decoration-none" href="#">Luxury</a></li>
</ul>
</li>
<li class="pb-3">
<a class="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
Product
<i class="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
</a>
<ul id="collapseThree" class="collapse list-unstyled pl-3">
<li><a class="text-decoration-none" href="#">Bag</a></li>
<li><a class="text-decoration-none" href="#">Sweather</a></li>
<li><a class="text-decoration-none" href="#">Sunglass</a></li>
</ul>
</li>
</ul>
<Shop2/>



</div>

<div class="col-lg-9">
<div class="row">
<div class="col-md-6">
<ul class="list-inline shop-top-menu pb-3 pt-1">
<li class="list-inline-item">
<a class="h3 text-dark text-decoration-none mr-3" href="#">All</a>
</li>
<li class="list-inline-item">
<a class="h3 text-dark text-decoration-none mr-3" href="#">Men's</a>
</li>
<li class="list-inline-item">
<a class="h3 text-dark text-decoration-none" href="#">Women's</a>
</li>
<li class="list-inline-item">
<a class="h3 text-dark text-decoration-none" href="#"> Kide's</a>
</li>
</ul>
</div>
<div class="col-md-6 pb-4">
<div class="d-flex">
<select class="form-control">
<option>Featured</option>
<option>A to Z</option>
<option>Item</option>
</select>
</div>
</div>
</div>
<div class="row">
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\k1.jpg" />
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$250.00</p>
<h4 style={{color:"red"}} >+70 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\k2.jpg" />
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$250.00</p>
<h4 style={{color:"red"}} >+130 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\k3.jpg" />
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$250.00</p>
<h4 style={{color:"red"}} >+190 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\k4.jpg" />
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$250.00</p>
<h4 style={{color:"red"}} >+370 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\k5.jpg" />
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$250.00</p>
<h4 style={{color:"red"}} >+209 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\k6.jpg" />
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$250.00</p>
<h4 style={{color:"red"}} >+402 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\k7.jpg" />
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$290.00</p>
<h4 style={{color:"red"}} >+60 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\k8.jpg" />
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$190.00</p>
<h4 style={{color:"red"}} >+80 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\k9.jpg" />
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$240.00</p>
<h4 style={{color:"red"}} >+20 sold</h4>

</div>
</div>
</div>
</div>

</div>

</div>
</div>
          </div>
          <div>

          <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg" role="document">
<div class="w-100 pt-1 mb-5 text-right">
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<form action="" method="get" class="modal-content modal-body border-0 p-0">
<div class="input-group mb-2">
<input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ..."/>
<button type="submit" class="input-group-text bg-success text-light">
<i class="fa fa-fw fa-search text-white"></i>
</button>
</div>
</form>
</div>
</div>
<div class="container py-5">
<div class="row">

<div class="col-lg-3">
<h1 class="h2 pb-4">Categories</h1>

<ul class="list-unstyled templatemo-accordion">
<li class="pb-3">
<a class="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
Gender
<i class="fa fa-fw fa-chevron-circle-down mt-1"></i>
</a>
<ul class="collapse show list-unstyled pl-3">
<li><a class="text-decoration-none" href="#">Men</a></li>
<li><a class="text-decoration-none" href="#">Women</a></li>
</ul>
</li>
<li class="pb-3">
<a class="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
Sale
<i class="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
</a>
<ul id="collapseTwo" class="collapse list-unstyled pl-3">
<li><a class="text-decoration-none" href="#">Sport</a></li>
<li><a class="text-decoration-none" href="#">Luxury</a></li>
</ul>
</li>
<li class="pb-3">
<a class="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
Product
<i class="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
</a>
<ul id="collapseThree" class="collapse list-unstyled pl-3">
<li><a class="text-decoration-none" href="#">Bag</a></li>
<li><a class="text-decoration-none" href="#">Sweather</a></li>
<li><a class="text-decoration-none" href="#">Sunglass</a></li>
</ul>
</li>
</ul>
<Shop2/>
</div>

<div class="col-lg-9">
<div class="row">
<div class="col-md-6">
<ul class="list-inline shop-top-menu pb-3 pt-1">
<li class="list-inline-item">
<a class="h3 text-dark text-decoration-none mr-3" href="#">All</a>
</li>
<li class="list-inline-item">
<a class="h3 text-dark text-decoration-none mr-3" href="#">Men's</a>
</li>
<li class="list-inline-item">
<a class="h3 text-dark text-decoration-none" href="#">Women's</a>
</li>
<li class="list-inline-item">
<a class="h3 text-dark text-decoration-none" href="#"> Kide's</a>
</li>
</ul>
</div>
<div class="col-md-6 pb-4">
<div class="d-flex">
<select class="form-control">
<option>Featured</option>
<option>A to Z</option>
<option>Item</option>
</select>
</div>
</div>
</div>
<div class="row">
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\shop_01.jpg"/>
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$350.00</p>
<h4 style={{color:"red"}} >+70 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\shop_02.jpg"/>
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$190.00</p>
<h4 style={{color:"red"}} >+620 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\shop_03.jpg"/>
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$28.00</p>
<h4 style={{color:"red"}} >+77 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\shop_04.jpg"/>
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$250.00</p>
<h4 style={{color:"red"}} >+110 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\shop_05.jpg"/>
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$230.00</p>
<h4 style={{color:"red"}} >+79 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\shop_06.jpg"/>
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$250.00</p>
<h4 style={{color:"red"}} >+13 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\shop_07.jpg"/>
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$360.00</p>
<h4 style={{color:"red"}} >+28 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\shop_08.jpg"/>
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$250.00</p>
<h4 style={{color:"red"}} >+38 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\shop_09.jpg"/>
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$250.00</p>
<h4 style={{color:"red"}} >+20 sold</h4>

</div>
</div>
</div>
</div>

</div>

</div>
</div>
          </div>
          <div>

          <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg" role="document">
<div class="w-100 pt-1 mb-5 text-right">
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<form action="" method="get" class="modal-content modal-body border-0 p-0">
<div class="input-group mb-2">
<input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ..."/>
<button type="submit" class="input-group-text bg-success text-light">
<i class="fa fa-fw fa-search text-white"></i>
</button>
</div>
</form>
</div>
</div>
<div class="container py-5">
<div class="row">

<div class="col-lg-3">
<h1 class="h2 pb-4">Categories</h1>
<ul class="list-unstyled templatemo-accordion">
<li class="pb-3">
<a class="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
Gender
<i class="fa fa-fw fa-chevron-circle-down mt-1"></i>
</a>
<ul class="collapse show list-unstyled pl-3">
<li><a class="text-decoration-none" href="#">Men</a></li>
<li><a class="text-decoration-none" href="#">Women</a></li>
</ul>
</li>
<li class="pb-3">
<a class="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
Sale
<i class="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
</a>
<ul id="collapseTwo" class="collapse list-unstyled pl-3">
<li><a class="text-decoration-none" href="#">Sport</a></li>
<li><a class="text-decoration-none" href="#">Luxury</a></li>
</ul>
</li>
<li class="pb-3">
<a class="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
Product
<i class="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
</a>
<ul id="collapseThree" class="collapse list-unstyled pl-3">
<li><a class="text-decoration-none" href="#">Bag</a></li>
<li><a class="text-decoration-none" href="#">Sweather</a></li>
<li><a class="text-decoration-none" href="#">Sunglass</a></li>
</ul>
</li>
</ul>
<Shop2/></div>

<div class="col-lg-9">
<div class="row">
<div class="col-md-6">
<ul class="list-inline shop-top-menu pb-3 pt-1">
<li class="list-inline-item">
<a class="h3 text-dark text-decoration-none mr-3" href="#">All</a>
</li>
<li class="list-inline-item">
<a class="h3 text-dark text-decoration-none mr-3" href="#">Men's</a>
</li>
<li class="list-inline-item">
<a class="h3 text-dark text-decoration-none" href="#">Women's</a>
</li>
<li class="list-inline-item">
<a class="h3 text-dark text-decoration-none" href="#"> Kide's</a>
</li>
</ul>
</div>
<div class="col-md-6 pb-4">
<div class="d-flex">
<select class="form-control">
<option>Featured</option>
<option>A to Z</option>
<option>Item</option>
</select>
</div>
</div>
</div>
<div class="row">
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\m1.jpg"/>
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$230.00</p>
<h4 style={{color:"red"}} >+26 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\m3.jpg"/>
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$250.00</p>
<h4 style={{color:"red"}} >+230 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\m4.jpg"/>
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$250.00</p>
<h4 style={{color:"red"}} >+20 sold</h4>
</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\m.jpg"/>
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$190.00</p>
<h4 style={{color:"red"}} >+29 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\m2.jpg"/>
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$250.00</p>
<h4 style={{color:"red"}} >+42 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\shop_06.jpg"/>
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$278.00</p>
<h4 style={{color:"red"}} >+52 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\shop_01.jpg"/>
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$250.00</p>
<h4 style={{color:"red"}} >+83 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\shop_06.jpg"/>
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$250.00</p>
<h4 style={{color:"red"}} >+70 sold</h4>

</div>
</div>
</div>
<div class="col-md-4">
<div class="card mb-4 product-wap rounded-0">
<div class="card rounded-0">
<img class="card-img rounded-0 img-fluid" src="\images\shop_03.jpg"/>
<div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
<ul class="list-unstyled">
<li><a class="btn btn-success text-white" href="shop-single.html"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-eye" aria-hidden="true"></i></a></li>
<li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
<div class="card-body">
<a href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</a>
<ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
<li>M/L/X/XL</li>
<li class="pt-2">
<span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
<span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
</li>
</ul>
<ul class="list-unstyled d-flex justify-content-center mb-1">
<li>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-warning fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
<i class="text-muted fa fa-star"></i>
</li>
</ul>
<p class="text-center mb-0">$220.00</p>
<h4 style={{color:"red"}} >+18 sold</h4>

</div>
</div>
</div>
</div>

</div>

</div>
</div>
          </div>
          
        </Slider>
<br/><br/>
        <Footer/>


      </div>
    );
  }
}





