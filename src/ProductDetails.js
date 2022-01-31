import React, { Component } from 'react'
import { getById } from "./Api/Products";
import Slider from "react-slick";
import { addToCart } from "./Cartfolder/Cartfolder/action/Action";
import { connect } from "react-redux";
import { Container, Row, Col } from 'reactstrap';
import { Button } from "reactstrap";
import './ProductsAll.css';

class ProductDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,

      product: {},
      quantity:1

    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    getById(parseInt(id))
      .then(product => {
        this.setState({
            product
        });
      })
    
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  
  handelquantity = ( event ) =>{
     const value = event.target.value ;
     if( value < 1)
     return ;
     this.setState({
      quantity: value 

     })
  }

  addToCart = (product) => {
    this.props.addToCart(product, this.state.quantity);
}

  render() {
    const product  = this.state.product;
    const quantity = this.state.quantity;

    return (
      <div className="bacccck">

<Container className="sty">
  <Row>

  <Col lg="6" sm="12">   <div className="detainewcar">

<Slider
  asNavFor={this.state.nav2}
  ref={slider => (this.slider1 = slider)}
>
  <div>
    <img  height="400px" width="600px"  src={product.img} className="shownimg" alt="" />
  </div>
 
 
 
  <div>
    <img  height="400px" width="600px" src={product.img2} className="shownimg" alt="" />
  </div>
 
  <div>
    <img  height="400px" width="600px" src={product.img3} className="shownimg" alt="" />
  </div>
 
  <div>
    <img height="400px" width="600px"  src={product.img4} className="shownimg" alt="" />
  </div>
 
</Slider>

<Slider
  asNavFor={this.state.nav1}
  ref={slider => (this.slider2 = slider)}
  slidesToShow={3}
  swipeToSlide={true}
  focusOnSelect={true}
>

  
<div>
  <img width="178px"height="140px" src={product.img} />
</div><div>
  <img width="178px" height="140px" src={product.img2} />
</div><div>
  <img width="178px"height="140px" src={product.img3} />
</div><div>
  <img width="178px" height="140px" src={product.img4} />
</div>
  
</Slider>
</div>

</Col>

  <Col lg="6" sm="12">         <div className="carddetail">
            
            <h5>{product.name}</h5>
            <p style={{color:"red"}}>price : {product.price}$</p>
            <p >Color : {product.color}</p>
            <p >Description : {product.Description}</p>
            <p >Shipping : {product.Shipping}</p>
            <p>Size :{product.size}</p>
            <p style={{color:"#0097e6"}}>total price : {quantity * product.price}</p>
            <lable> quantity</lable>
          <input className="eeee"  type="number"  value={quantity}   onChange={this.handelquantity}/> 
        

          <input  style={{marginLeft:"40px"}} list="Num"   placeholder="Size"/>  
  
  <datalist id = "Num">
  <option value="S"  ></option>
  <option value="M"></option>
  <option value="L"></option>
  <option value="XXL"></option>
  </datalist>  
  <select style={{marginLeft:"40px"}}>

  <option >choose Color</option>  

<option value="Red">Red </option>
<option value="Green">Green</option>
<option value="Brown">Brown</option>
<option value="Black">Black</option>
<option value="White">White</option> 

</select>
  <br/>  <br/>   <br/> 
<Button  className="contact-submitt" onClick={() => this.addToCart(product)}  >Add to Cart</Button>

<button  className= "btn btn-danger mx-5  py-2  px-4" >Buy Now</button>
          </div>
</Col> 
 
  </Row>
</Container>
</div>    
     
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      addToCart: (productInfo, quantity) => dispatch(addToCart(productInfo, quantity))
  }
}
export default connect(null, mapDispatchToProps)(ProductDetails)