import React, { useRef } from 'react'
import '../Contact/Contact.css'
import phone from '../../assets/phone.png'
import email from '../../assets/email.jpg'

import GitIcon from '../../assets/Github.png'
import Instagram from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xttqz2x', 'template_ve9qi5x', form.current, {
        publicKey: 'xAlC5R-7UprtiLHXj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email sent!");
          e.target.reset();   
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contactPage'>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill the form below to discuss any work opportunity</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            className='name'
            placeholder='Your Name'
            name='name'
          />
          <input
            type='email'
            className='email'
            placeholder='Your email'
            name='from_email'
          />
          <textarea
            name='message'
            rows='5'
            placeholder='Your Message'
            className='msg'
          ></textarea>

          <button type='submit' value='Send' className='submitBtn'>
            Submit
          </button>

          <div className='links'>
            <div className="phonedata">
              <span> <img src={phone} alt='Twitter' className='linkphone' />
              </span>
              <span  className='personal'  >9653786625</span>
             </div>
             <div className="phonedata">
              <span> <img src={email} alt='Twitter' className='linkphone' />
              </span>
              <span className='personal'  >vijaykumarjangir.18@gmail.com</span>
             </div>
               <a href="https://github.com/VijayJangir7117"><img src={GitIcon} alt='Twitter' className='link' /></a>
         
               
            
            {/* <img src={FacebookIcon} alt='Facebook' className='link' /> */}
            {/* <a href="https://github.com/VijayJangir7117"><img src={GitIcon} alt='Twitter' className='link' /></a> */}
         
            {/* <img src={Instagram} alt='Instagram' className='link' /> */}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
