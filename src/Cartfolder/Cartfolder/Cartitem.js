// import React, { useState } from 'react';
import { connect } from "react-redux";
import { Col } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { removefromcart } from "./action/Action";

function Cartitem(props) {
const { item, index } = props;
const { product } = item;

return (
<Col lg="4" md="5" >
<Card className="producty">
<CardBody>
<CardImg height="200px" className="img1234" src={product.img} />
<div>
<CardTitle >{product.name}</CardTitle>

<CardSubtitle tag="h6" className="mb-2 text-muted"> {product.size} <br /> <br />{product.price + product.price * (3 / 100) + product.price * (1.5 / 100)} $
</CardSubtitle>

<Button className="buttonx" onClick={() => props.removefromcart(index)} outline color="danger"> Remove</Button>
<div>
{/*
<Modal isOpen={modal} toggle={toggle} className={className}>
<ModalHeader toggle={toggle}></ModalHeader>
<ModalBody>
<div className="formbuy">
<form className=" contact-form" onSubmit={sendEmail}>
<input type="hidden" name="contact_number" />
<div><input type="text" disabled placeholder="subject" name="subject" value={product.name}/></div>
<div><input type="text" placeholder="First Name" name="name" /><input placeholder="Second Name" type="text" name="name2" /> </div>  
<div><input placeholder="Email" type="email" name="user_email" /><input placeholder="Phone" type="phone" name="phone" /></div>
<div><input name="choice" disabled  type="text" className="inputchoice" value={`your choice: ${product.name}, Brand:${product.description}, price: ${product.price} `}/></div>
<div><textarea placeholder="Message" name="message"/></div>
<input type="submit" value="Send" />
</form>
</div>
</ModalBody>

</Modal> */}
</div>
</div>
</CardBody>
</Card>
</Col>




)
}

const mapDispatchToProps = (dispatch) => {
return {
removefromcart: (index) => dispatch(removefromcart(index))
}
}
export default connect(null, mapDispatchToProps)(Cartitem);