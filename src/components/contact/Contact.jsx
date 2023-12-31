import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oa57iyl', 'template_uihpz8x', form.current, 'EXkNMq8Z2DFYboj_G')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>realbaji16@gmail.com</h5>
          <a href='mailto:realbaji16@gmail.com' target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Instagram</h4>
          <h5>obaji.the.king</h5>
          <a href='https://ig.me/m/obaji.the.king' target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon' />
          <h4>Whatsapp</h4>
          <h5>+2348186899010</h5>
          <a href='https://wa.me/2348186899010' target='_blank'>Send a message</a>
        </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact