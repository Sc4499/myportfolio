import React, { useState } from 'react'
import contactimage from "../component/image/contact.png"
const Contact = () => {
    
  return (
    <div >
      <div className='container mtop' id="cont">
      <p className='namecol'>CONTACT ME</p>
        <h3 className='mbottom'>Drop me a message i will get back to you soon</h3>
        <div className='row'>
            <div className='col-md-5'>
<img src={contactimage} className="img-fluid"></img>
            </div>
            <div className='col-md-7'>
            <form action='https://formspree.io/f/xpznbrgj' class="row g-3 p-4" method='POST'>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">First Name</label>
    <input type="text" class="form-control allbtn" id="inputEmail4" name='Firstname'/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Last Name</label>
    <input type="text" class="form-control allbtn" id="inputPassword4" name="Lastname"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Phone Number</label>
    <input type="number" class="form-control allbtn" id="inputAddress" name="phone number" />
  </div>
  <div class="col-12">
    <label for="floatingTextarea" class="form-label">Message</label>
    <textarea class="form-control allbtn" placeholder="Leave a comment here" name='message'  id="floatingTextarea"></textarea>
  
  </div>
  <div class="col-12">
    <button type="submit" class="btn allbtn w-100">Send</button>
  </div>
</form> 
                </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
