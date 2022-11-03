import React,{useState} from 'react'
import Footer from './footer'
const ContactPage = () => {

const [contactObj, setContactObj] = useState({})

function handleSubmit(){

}

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
   <input type='text' id='first_name' placeholder='Enter your First Name' className='input-wide' />
</div>
<div className='form-items'>
<label>Last Name</label>
   <input id='last_name' type='text' placeholder='Enter your Last Name' className='input-wide' />

</div>
</div>
<div className='form-items'>
<label>Email</label>
   <input id='email' type='text' placeholder='yourname@email.com' className='input-wide' />

</div>
<div className='form-items'>
<label>Message</label>
<textarea  id='message' className='input-wide t-area' placeholder ='Send me a message and ill reply you as soon as possible...'  required pattern=" " autofocus title="Please enter at least 5 characters"  oninvalid="this.setCustomValidity('Please Enter valid email')"
 oninput="setCustomValidity('')"></textarea>
</div>
<div className='send-msg'>
<div>
   <input type='checkbox' /> 
   <label>You agree providing data to (name) who might contact you </label>
   </div>
   <button id='btn_submit'>Send Message</button> 
</div>
    </form>
    <Footer/>
    </>
  )
}

export default ContactPage