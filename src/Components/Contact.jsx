import React,{useState} from 'react'
import Footer from './footer'
const ContactPage = () => {

const [contactObj, setContactObj] = useState({})
const [firstname, setFirstName] = useState('')
const [lastname, setLastName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [btnclick, setBtnClick] = useState(false)
const [submit, setSubmit] = useState(false)

const messageEmpty = message === ''
const Modal=()=>{
   return(
      <span className='contact-modal'> Message Sent!</span>
   )
}
const errMessage = {
   firsterr:'Enter firstname',
   lasterr:'Enter lastname',
   emailerr:'Enter email',
   messErr:'Please enter a message'
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
setSubmit(true)
setTimeout(()=>setSubmit(false),3000)
}
function defaultState(){
   setFirstName('')
   setLastName('')
   setEmail('')
   setMessage('')
   setBtnClick(false)
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
         setBtnClick(false)
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
   <label for='first_name'>First Name</label>
   <input type='text' id='first_name' required placeholder='Enter your First Name' className='input-wide'  value={firstname} onChange={handleFirstName} />
</div>
<div className='form-items'>
<label for='last_name'>Last Name</label>
   <input id='last_name' type='text' required placeholder='Enter your Last Name' className='input-wide' value={lastname} onChange={handleLastName} />

</div>
</div>
<div className='form-items'>
<label for='email'>Email</label>
   <input id='email' type='email' required placeholder='yourname@email.com' className='input-wide' value={email} onChange={handleEmail} />

</div>
<div className='form-items'>
<label for='message'>Message</label>
<textarea  id='message' className='input-wide t-area' style={{outline:btnclick && messageEmpty && ' 1px solid #F83F23'}} required placeholder ='Send me a message and ill reply you as soon as possible...' value={message} onChange={handleMessage} title="Please enter at least 5 characters" ></textarea>
<span className='message-err'> {btnclick && messageEmpty?errMessage.messErr:null}</span>
</div>
<div className='send-msg'>
<div>
   <input type='checkbox' /> 
   <label>You agree providing data to (name) who might contact you</label>
   </div>
   <button id='btn__submit'onClick={()=>setBtnClick(true)} >Send Message</button> 
   {submit?<Modal/>:null}

</div>
    </form>
    <Footer/>
    </>
  )
}

export default ContactPage