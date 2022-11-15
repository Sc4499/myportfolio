import React from 'react'
import "./Card.css";
import data from '../feature-api/featureapi';
const Card = () => {
    console.log(data);
  return (
    <>
    {data.map(item=>{
        return(
            <div className='col-md-4 mb-4'>
            <div class="card " style={{height:"250px"}}>
              <div className='skill-icon'>
              <i class={item.image} style={{ fontSize: "30px"}}></i>
              </div>
        <div class="card-body">
          
          <h5 class="card-title">{item.title}</h5>
          
          <p class="card-text">{item.desc}</p>
          <a href="#" class="card-link namecol">Read more</a>
          
        </div>
      </div>
          </div>
        )
    })}
    </>
  
  )
}

export default Card
