import React ,{useState} from 'react';
import Products from "./Api/Products.json";
import Productitem from "./Productitem";
import './ProductsAll.css';
import {Col,Container ,Row }from "reactstrap";
function ProductsAll() {
const [search , setSearch ] = useState('') ;
  return (
    <div className="allcars">
   <section className="bacccck">
<Container  className="bacccck">
<section class="search-section1">
<div class="container">
<div class="row subscribe-from">
<div class="col-md-12">
<form class="form-inline col-md-12 wow fadeInDown animated">
<div class="form-group">
<input type="email"  onChange = {event => {setSearch(event.target.value)}} class="form-control subscribe" id="email" placeholder="Search..." />
<button class="suscribe-btn" ><i class="pe-7s-search"></i></button>
</div>
</form>
</div>
</div>
</div>
</section>
<div>
<Row>    

    
{Products.filter((product)=>{
  if(search=== "" ){ return product;}
  
   else if(product.name.toLowerCase().includes(search.toLowerCase()) ){
       return product;
     }
  
 
}).map((product) => (
    <Col lg="4" md="4" sm="12"  key={product.id} >
          <Productitem   product={product} />
     </Col>))}

</Row>
</div>
</Container>
</section>
</div>
  )
}

export default  ProductsAll