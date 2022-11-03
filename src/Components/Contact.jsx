import React from 'react'
import Footer from './footer'
const ContactPage = () => {
  return (

   <>
    <form className='contact-forms '> 
<div>
   <h1>Contact Me</h1>
   <h2 className='subh2'> Hi There, Contact me to ask anything you have in mind.</h2>
</div>
<div  className='form-names'>
<div className='form-items'>
   <label>First Name</label>
   <input type='text' placeholder='Enter your First Name' className='input-wide' />
</div>
<div className='form-items'>
<label>Last Name</label>
   <input type='text' placeholder='Enter your Last Name' className='input-wide' />

</div>
</div>
<div className='form-items'>
<label>Email</label>
   <input type='text' placeholder='yourname@email.com' className='input-wide' />

</div>
<div className='form-items'>
<label>Message</label>
<textarea className='input-wide t-area' placeholder='Send me a message and ill reply as soon as possible' > </textarea>
</div>
<div className='send-msg'>
<div>
   <input type='radio' /> 
   <label>You agree providing data to (name) who might contact you </label>
   </div>
   <button>Send Message</button> 
</div>
    </form>
    <Footer/>
    </>
  )
}

export default ContactPage