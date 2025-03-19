import React from 'react'
import './Works.css'
// import one from "../../assets/portfolio-photos/Calculator.png";
// import two from "../../assets/porfolio photo and url/formcalidation.png"
// import three from "../../assets/porfolio photo and url/listtodo.png"
// import four from "../../assets/porfolio photo and url/notes.png"
// import five from "../../assets/porfolio photo and url/qr.png"

//  import six from '../../assets/porfolio photo and url/quote.png'
//  import seven from '../../assets/porfolio photo and url/random password.png'
//  import eight from '../../assets/porfolio photo and url/todoapp.png'
//  import nine from '../../assets/porfolio photo and url/weather.png'
//  import ten from '../../assets/porfolio photo and url/Screenshot 2025-03-19 115130.png'
import one from '../../assets/calculator.png';
import two from  '../../assets/formvalidaton.png';
import three from  '../../assets/listtodo.png';
import four from  '../../assets/notes.png';
import five from  '../../assets/qr.png';
import six from  '../../assets/quote.png';
import seven from  '../../assets/random password.png';
import eight from  '../../assets/todoapp.png';
import nine from  '../../assets/weather.png';
import ten from  '../../assets/qr.png';





function Works() {
  return (
     <section id="works"   >
      <h2 className='workstitle'  >My protfolio</h2>
      <span className='worksDesc'>i take pride in going through every small details and continusally inhanchinf my ability ti wrok and get better my work here are some of my work done based on js ,react and Mern stack</span>

     <div className='worksImgs'  >
      <a href="https://age-calculator01.vercel.app
       " target="_blank" rel="noopener noreferrer">
      <img src={one} alt="Age Calculator Project" className="worksImg" />
      </a>


      <a href="https://projects-js-chti.vercel.app" target="_blank" rel="noopener noreferrer">
          <img src={two} alt="Form Validation Project" className="worksImg" />
        </a>



        <a href="https://js-project-2-a9x2.vercel.app" target="_blank" rel="noopener noreferrer">
          <img src={three} alt="To-Do List Project" className="worksImg" />
        </a>



        <a href="https://projects-js-kg8n.vercel.app
         " target="_blank" rel="noopener noreferrer">
          <img src={four} alt="Notes App Project" className="worksImg" />
        </a>

        <a href="https://projects-js-mzkj.vercel.app
           " target="_blank" rel="noopener noreferrer">
          <img src={five} alt="QR Code Generator Project" className="worksImg" />
        </a> 
        
        <a href="https://projects-js-pj61.vercel.app
         " target="_blank" rel="noopener noreferrer">
          <img src={six} alt="Quote Generator Project" className="worksImg" />
        </a>
        
         <a href="https://projects-js-b8sq.vercel.app
           " target="_blank" rel="noopener noreferrer">
          <img src={seven} alt="Random Password Generator Project" className="worksImg" />
        </a>
        
         <a href="https://notes-app-todo.vercel.app
           " target="_blank" rel="noopener noreferrer">
          <img src={eight} alt="To-Do App V2" className="worksImg" />
        </a>
        
         <a href="https://js-project-2-ob9p.vercel.app" target="_blank" rel="noopener noreferrer">
          <img src={nine} alt="Weather App Project" className="worksImg" />
        </a>
        
        <a href="https://projects-js-mzkj.vercel.app
           " target="_blank" rel="noopener noreferrer">
          <img src={ten} alt="Screenshot Project" className="worksImg" />
        </a>

     </div>
     <button  className='worksBtn'  >See More</button>

      </section>
  )
}

export default Works
