import React from 'react'
import '../intro/Intro.css'
import bg from '../../assets/vijay22.png'
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'


function Intro() {  
  return (
    <div>
      <section id='intro'  >
         <div className='introContent' >
          <span className='hello'  >Hello,  </span>
          <span  className='introText'>
             I'm <span className='introName'>Vijay </span> 
             <br/>
             Website Designer
             </span>
           <p className='introPara'>A passionate web designer with a keen eye for creating <br/> visually appealing and user-friendly websites.  <br/> As a fresher, I’m eager to bring fresh, creative solutions <br/>to the web design world . </p>
           <Link >
           <button className='btn'   >
            <img src={btnImg}   alt=''  className='btnImg'  />
            Hire Me
           </button>
           </Link>
         </div>
         <img src={bg} alt='profile pic' className='bg'/>
      </section>
    </div>
  )
}

export default Intro
