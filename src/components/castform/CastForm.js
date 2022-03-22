import React, { useState } from "react"
import Form from 'react-bootstrap/Form'
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import "react-datepicker/dist/react-datepicker.css";



function ContactForm(props) {

  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })

  const USER_ID = process.env.REACT_APP_USER_ID;
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_SPECIFIC_TEMPLATE_ID;

  const handleOnChange = (evt) => {
    setForm(prevForm => ({
      ...prevForm,
      [evt.target.name]: evt.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Oops, something went wrong",
          text: error.text,
        })
      });
    setForm({
      from_name: '',
      from_email: '',
      message: '',
    })
  };

  return (
    <>
      <Form id="contact-form" onSubmit={handleOnSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name: Francis I of France" value={form.from_name} onChange={(ev) => handleOnChange(ev)}/>
          <Form.Text>Please put your name and quotations if you have a preferred name.</Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPronouns">
          <Form.Label>Pronouns</Form.Label>
          <Form.Control type="text" placeholder="He/Him" value={form.from_pronouns} onChange={(ev) => handleOnChange(ev)}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email: KingOFrance@baguette.com" value={form.from_email} onChange={(ev) => handleOnChange(ev)}/>
          <Form.Text>This will be the default method to reaching back out to you.</Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicContact">
          <Form.Label>Preferred Form of Contact:</Form.Label>
          <Form.Control type="text" placeholder="Carrier Pigeon, Messenger, Via Text" value={form.from_altcontact} onChange={(ev) => handleOnChange(ev)}/>
          <Form.Text>If you prefer to be contacted other than email, place here.</Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicContact">
          <Form.Label>Preferred Form of Contact:</Form.Label>
          <Form.Control as="textarea" rows={5} maxLength="1500" placeholder="Carrier Pigeon, Messenger, Via Text" value={form.message} onChange={(ev) => handleOnChange(ev)}/>
        </Form.Group>
          <MDBInput textarea label="Your Message" name="message" value={form.message} rows="5" size='lg'
            onChange={(ev) => handleOnChange(ev)} />
          <MDBBtn type="submit">Submit</MDBBtn>
      </Form>
    </>
  )
}

export default ContactForm;