import React from "react";
import {Card,CardImg,CardBody, CardTitle,CardSubtitle,Button} from "reactstrap"
import {Link } from "react-router-dom";



export default function Productitem(Props){
  const {product}= Props;
 
  return(

         <div>

          <Card className="producty">
          <CardBody >
          <CardImg width="100%" height="300px" src={product.img}  />
   
          <CardTitle >{product.name}</CardTitle>
      
          <div >
           <p className="actualprice">{product.price} <span style={{color:"red"}}>$</span> </p>
          </div> 
          <Link  to={"/ProductsAll/" + product.id} ><input type="submit" class="contact-submitt" value="details" />

</Link>
        </CardBody>
      </Card>
    

        </div>


  )

}