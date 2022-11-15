import React from "react"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"

const Resume = () => {
  return (
    <>
    <div className="container resumes" id="res">
    <p className='namecol'>3+ YEARS OF EXPERIENCE</p>
        <h3>My Resume</h3>
   <div class="timeline">
   {ResumeApi.map((val, index) => {
  if (val.category === "experience") {
    return (
      <div class="containerbox left">
    <div class="content">
    <Card key={index} image={val.image} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
    </div>
  </div>
    )
  }
})} 

{ResumeApi.map((val, index) => {
  if (val.category === "education") {
    return (
      <div class="containerbox right">
    <div class="content">
    <Card key={index} image={val.image} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
    </div>
  </div>
    )
  }
})} 

</div>
    </div>

         
             
         
    </>
  )
}

export default Resume
{ResumeApi.map((val, index) => {
  if (val.category === "experience") {
    return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
  }
})} 