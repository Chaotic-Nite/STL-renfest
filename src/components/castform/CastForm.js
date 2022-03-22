import React, { useState } from "react"
import { MDBInput, MDBBtn } from "mdb-react-ui-kit"
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import "react-datepicker/dist/react-datepicker.css";



function ContactForm(props) {
  const [wedDate, setWedDate] = useState(new Date());

  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    date: wedDate,
    subject: '',
    message: '',
  })

  // const USER_ID = process.env.REACT_APP_USER_ID;
  // const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  // const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

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
    setWedDate(new Date());
    setForm({
      from_name: '',
      from_email: '',
      date: wedDate,
      subject: '',
      message: '',
    })
  };

  return (
    <>
      <form id="contact-form" onSubmit={handleOnSubmit}>
        <MDBInput required type='text' name="from_name" label="Your Name" value={form.from_name} size='lg'
          onChange={(ev) => handleOnChange(ev)} />
        <MDBInput required type='email' name="from_email" label="Your Email" value={form.from_email} size='lg'
          onChange={(ev) => handleOnChange(ev)} />
        <MDBInput required type='text' label="Subject" name="subject" value={form.subject} size='lg'
          onChange={(ev) = npm i> handleOnChange(ev)} />
          <MDBInput textarea label="Your Message" name="message" value={form.message} rows="5" size='lg'
            onChange={(ev) => handleOnChange(ev)} />
          <MDBBtn type="submit">Submit</MDBBtn>
      </form>
    </>
  )
}

export default ContactForm;