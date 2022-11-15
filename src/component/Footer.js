import React from 'react'
import Logo from "./image/LOGOSC.png";
const Footer = () => {
  return (
    <div className='container-fluid d-flex justify-content-between  text-light' style={{background:"rgb(236, 74, 128)",marginTop:"180px"}}>
      <div className='p-2'><img src={Logo} style={{width:"4rem"}}></img></div>
      <div className='text-dark p-2 mt-1'><h6>Copyright@2022</h6></div>
    </div>
  )
}

export default Footer
