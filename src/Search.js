import React, { Component } from 'react'

import './App.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export class Search extends Component {
render() {
return (
<div>
<div className="container-fluid bbbc  ">
<div className="row">
<div className="col-md-6  ">
<Form>
    <fieldset>
<FormGroup>
<Label for="exampleEmail">Email  <span style={{color:"red"}}>*</span></Label>
<Input type="email" name="email" id="exampleEmail"  />
</FormGroup>
<FormGroup>
<Label for="examplePassword">Phone  <span style={{color:"red"}}>*</span></Label>
<Input type="password" name="phone" id="examplePassword"  />
</FormGroup>

<FormGroup>
<Label for="exampleText">Message<span style={{color:"red"}}>*</span></Label>
<Input type="textarea" name="message" id="exampleText"   />
</FormGroup>
<FormGroup>
<Label for="exampleFile" >File  <span style={{color:"red"}}>*</span></Label>
<Input type="file" name="file" multiple  id="exampleFile" />

</FormGroup>

<input type="submit" class="contact-submit" value="Send" />
</fieldset>
</Form>

</div>

<div className="col-md-6   fon">
<h3 >where are we?</h3>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil magnam totam accusamus fugiat dolorem .
</p>



<div className="flx wow fadeInDownBig animated" data-wow-delay="0.4s">
<div className="onee">
<i class="fa fa-envelope" aria-hidden="true"></i>
<h2>Email </h2>
<p>somayasaeid4@gmail.com </p>
</div>
<div  className="onee">
<i class="fa fa-phone" aria-hidden="true"></i>
<h2>phone </h2>
<p>+965 90038697 - 97270270</p>

</div>
</div>



<div  className="onee  wow fadeInUpBig animated" data-wow-delay="0.6s">
<i class="fa fa-users" aria-hidden="true"></i>
<h2>Any Questions ?</h2>
<p> If you need our support with a product you already have, please fill in the form. We will get back to you as soonWe're Happy to Help .</p>

</div>
</div>

</div>




</div>



</div>
)
}
}

export default Search
