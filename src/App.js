
import { Component } from 'react';
import Carsul from "./Carsul" ;
import Cont from "./Cont";
// import Navbar from "./Navbar"
import './App.css';
import {BrowserRouter,Link,Route,NavLink,Switch} from "react-router-dom";

// import component
import Home from     "./Home/Home";
import About from    "./About/About";
import Menu from     "./Menu/Menu";
import Gallery from  "./Gallery/Gallery";
import Blog from     "./Blog/Blog";
import Contact from  "./Contact/Contact";
import ProductsAll from "./ProductsAll" ;
import ProductDetails from "./ProductDetails" ;
import Store from "./Cartfolder/Cartfolder/Store" ;
import {Provider} from  "react-redux";
import Cart from "./Cartfolder/Cartfolder/Cart";
import Carticon from "./Cartfolder/Cartfolder/Carticon"
class App extends Component {
constructor (props){
super(props)
this.state= {
mount : false
}
}

mountconter =()=> this.setState({  mount : true})
unmountconter =()=> this.setState({  mount : false})

render(){

return (



<Provider store ={Store}>

<BrowserRouter>
<div> 

<section class="header-area header-sticky">
<div  class="container-fluid firi  ">
     <div class="row ">
<div class="col-md-5  col-sm-12">
<i class="fa fa-envelope" aria-hidden="true"> somayasaeid4@gmail.com   
</i>
</div>
<div class="col-md-5  col-sm-12">
<i class="fa fa-phone" aria-hidden="true">   965 90038697 - 97270270</i>

</div>
<div class="col-md-2  col-sm-12">
<i class="fa fa-user " onClick={this.mountconter}   aria-hidden="true">   Help me</i>


</div>

</div>
</div>
<div class="container  ">
<div class="row">
<div class="col-md-12 col-sm-12">
<nav class=" main-nav ">
<ul class="nav">

<li class="submenu">
<a href="javascript:;">Shopping Bag</a>
<ul>
<li><a href="#"><div class="row  shopba">
<div class="column">
<p>Clothing</p> 
<h5>Women's clothing</h5>
<a href="#"><img   src="\images\111.jpg"  width="190" height="130" alt=""/></a>
</div>
<div class="column">
<p> Furniture & Decor</p> 
<h5>  Home furniture</h5>
<a href="#"><img  src="\images\44.jpg"  width="190" height="130" alt=""/></a>
</div>
<div class="column">
<p> Shoes</p>
<h5>Women's shoes</h5>
<a href="#"><img src="\images\222.jpg"  width="190" height="130" alt=""/></a>
</div>
</div>
</a>
</li>



<li><a href="#"><div class="row  shopba">
<div class="column">
<p> Gadgets</p>  
<h5>Smartphones & Tablets</h5>
<a href="#"><img   src="\images\333.jpg"  width="190" height="130" alt=""/></a>
</div>
<div class="column">
<p> Accessories</p>
<h5>Sunglasses</h5>

<a href="#"><img  src="\images\55.jpg"  width="190" height="130" alt=""/></a>

</div>
<div class="column">
<p> Entertainment</p>
<h5>Kid's toys</h5>
<a href="#"><img src="\images\66.jpg"  width="190" height="130" alt=""/></a>
</div>
</div>
</a>

</li>


</ul>
</li> 
<i class="fa fa-shopping-bag baag" aria-hidden="true"></i>

<li class="scroll-to-section"><Link to="/" class="active">Home</Link></li>
<li class="scroll-to-section"><Link to="/About">About</Link></li>


<li class="scroll-to-section"><Link to="/Menu">Shop</Link></li>
<li class="scroll-to-section"><Link to="/Gallery">Gallery</Link></li> 
<li class="scroll-to-section"><Link to="/Blog">Offers</Link></li> 
<li class="scroll-to-section"><Link to="/ProductsAll">Products</Link></li> 
<li class="scroll-to-section"><Link to="/Contact">Contact</Link></li> <br/>  <br/>
{/* <li class="scroll-to-section" style={{textIndent:"70px"}}><Link to="/Cart">CART</Link></li>  */}
<li> <Carticon/></li>

</ul>        
</nav>
</div>
</div>
</div>
</section>
<div>
{this.state.mount?(
<div>
     <section class="search-section">
<div class="container">
<div class="row subscribe-from">
<div class="col-md-6 wow fadeInDown animated">
     <div  className="cust">
    <img  src ="\images\cust1.gif" />
   <h3>We are happy to help you.</h3> 
   </div>
<Cont/>
</div>

</div>
</div>
</section>
<i class="fa fa-times-circle  xxx"  onClick={this.unmountconter} aria-hidden="true"></i>

</div>

):null }

</div>


</div>
<Carsul/>
<Switch>
<Route path ="/" exact  component = {Home}    exact></Route>
<Route path ="/About"   component = {About}   exact></Route>
<Route path ="/Menu"    component = {Menu}    exact></Route>
<Route path ="/Gallery" component = {Gallery} exact></Route>
<Route path ="/Blog"    component = {Blog}    exact></Route>
<Route path ="/Contact" component = {Contact} exact></Route>

<Route path ="/Cart" component = {Cart} exact></Route>
<Route path ="/ProductsAll" component = {ProductsAll} exact></Route>
<Route path ="/ProductsAll/:id" component = {ProductDetails} exact></Route>

</Switch>
</BrowserRouter>
</Provider>

);
}
}

export default App;






