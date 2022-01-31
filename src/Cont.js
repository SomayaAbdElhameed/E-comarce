import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_yciq70r','template_v731klo',e.target,'user_aG38DQ8SqRfmpGsUlR59V')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
  e.target.reset();
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <fieldset>
      <input type="hidden" name="contact_number" />
      <label className="form-group my-2">Name</label>

      <input className="rol" type="text" name="name" />
   
      <label className="form-group my-2">Email</label>
      <input className="rol" type="email" name="email" />
      <label className="form-group my-2">phone</label>
      <input className="rol" type="phone" name="phone" />
      <label className="form-group my-2">Message</label>
      <textarea className="rol" name="message" /> <br/>
      <input className="rol" type="submit"class="contact-submit mr-5"  value="Send" />
      </fieldset>
    </form>
  );
}