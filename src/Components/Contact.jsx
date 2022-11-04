import React,{useState} from 'react'
import Footer from './footer'
const ContactPage = () => {

const [contactObj, setContactObj] = useState({})
const [firstname, setFirstName] = useState('')
const [lastname, setLastName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')


const Modal=()=>{
   return(
      <span className='contact-modal'> Message Sent!</span>
   )
}

function handleSubmit(e){
   e.preventDefault()
   const contactOb = {
      firstname:firstname,
      lastname:lastname,
      email:email,
      message:message
   }
setContactObj(contactOb)
defaultState()
}
function defaultState(){
   setFirstName('')
   setLastName('')
   setEmail('')
   setMessage('')
}
function handleFirstName(e){
setFirstName(e.target.value)
}
function handleLastName(e){
   setLastName(e.target.value)
   }
   function handleEmail(e){
      setEmail(e.target.value)
      }  
      function handleMessage(e){
         setMessage(e.target.value)
         }
         
  return (

   <>
    <form className='contact-forms ' onSubmit={handleSubmit}> 
<div>
   <h1 className='subh1'>Contact Me</h1>
   <h2 className='subh2'> Hi there, contact me to ask anything you have in mind.</h2>
</div>
<div  className='form-names'>
<div className='form-items'>
   <label>First Name</label>
   <input type='text' id='first_name' required placeholder='Enter your First Name' className='input-wide'  value={firstname} onChange={handleFirstName} />
</div>
<div className='form-items'>
<label>Last Name</label>
   <input id='last_name' type='text' required placeholder='Enter your Last Name' className='input-wide' value={lastname} onChange={handleLastName} />

</div>
</div>
<div className='form-items'>
<label>Email</label>
   <input id='email' type='email' required placeholder='yourname@email.com' className='input-wide' value={email} onChange={handleEmail} />

</div>
<div className='form-items'>
<label>Message</label>
<textarea  id='message' className='input-wide t-area' placeholder ='Send me a message and ill reply you as soon as possible...' value={message} onChange={handleMessage} required pattern=" " autofocus title="Please enter at least 5 characters"  oninvalid="this.setCustomValidity('Please Enter valid email')"
 oninput="setCustomValidity('')"></textarea>
</div>
<div className='send-msg'>
<div>
   <input type='checkbox' /> 
   <label>You agree providing data to (name) who might contact you</label>
   </div>
   <button id='btn_submit' >Send Message</button> 
</div>
    </form>
    <Footer/>
    </>
  )
}

export default ContactPage