import React, { useEffect, useState } from 'react'
import slack from '../assets/slack.svg'
import github  from '../assets/Icon.svg'
import profile from '../assets/profileimage.jpg'
import sharemobile from '../assets/_Avatar sharep.svg'
import sharedesk from '../assets/_Avatar share button.svg'
const Mainlinks = () => {
const [width,setWidth] = useState(0)
useEffect(()=>{
   window.addEventListener('resize',()=>{
      setWidth(window.innerWidth)
   })
},[window.innerWidth])
  return (
    <main>
<div className='profile'>
   <div className='profile-info'>
<img src={profile} alt='profile image' id='profile_img'/>
<h1 id='twitter'> aideddev</h1>
<span id='slack' style={{display:'none'}}> DisuAde</span>
   </div>
   <div className='share'> 
   <button>
   <img src= {width <768?sharedesk:sharemobile} alt='share button'/>
</button>
   </div>
</div>
<div className='mainlinks'>
   <a id='' href='https://twitter.com/aideddev' className='links'   >Twitter Link</a>
   <a href='https://training.zuri.team/' id='btn__zuri' className='links'> Zuri Team</a>
   <a href='http://books.zuri.team' id='books' className='links' title='Find books about coding and design here'> Zuri Books</a>
   <a id='' href='https://books.zuri.team/python-for-beginners?ref_id=<DisuAde>' className='links'> Python Books</a>
   <a href='https://background.zuri.team' id='pitch' className='links'> Background Check for Coders</a>
   <a href='https://books.zuri.team/design-rules ' id='book__design' className='links'> Design Books</a>
</div>

<div className='logos'> 
<img  src={slack} alt='slack logo'/>
<img  src={github} alt='slack logo'/>

</div>
    </main>
  )
}

export default Mainlinks