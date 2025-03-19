import React from 'react'
import "./Skills.css"
import UIDesign from "../../assets/ui-design.png"
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"


function Skills() {
  return (
   <section  id='skills'   >
      <span className='skillTitle'   >What I do</span>
      <span className='skillDesc'>As a fresher in web development, I have gained hands-on experience with a range of technologies including HTML, CSS, JavaScript, Node.js, React, and Express. I am passionate about building dynamic and responsive websites, and I am continuously honing my skills to create efficient, user-friendly web applications. I am eager to take on new challenges and further develop my expertise in full-stack development. </span>
      
      <div className='skillBars'   >
        <div className='skillBar'>
          <img   src={UIDesign}  alt='' className='skillBarImg'    />
          <div className='skillBarText'   >
      <h2> UI/UX design</h2>
      <p> I aim to create user-friendly and visually appealing designs that enhance the overall user experience.</p>
          </div>
        </div>

        <div className='skillBar'>
          <img   src={WebDesign}   alt='' className='skillBarImg'    />
          <div className='skillBarText'   >
      <h2> Website design</h2>
      <p>I design responsive and modern websites, focusing on functional layouts to provide an engaging user experience.</p>
          </div>
        </div>

        {/* <div className='skillBar'>
          <img   src={AppDesign}  alt='' className='skillBarImg'    />
          <div className='skillBarText'   >
      <h2>App design</h2>
      <p>and here too u need to write</p>
          </div>
        </div> */}
      </div>
      
    </section>
  )
}

export default Skills
