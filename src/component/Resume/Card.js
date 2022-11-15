import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        <img src={props.image} alt="image" style={{width:"30px"}}></img>
        <div className='title_content d_flex'>
          <div className='title'>
            <small className="namecol">{props.title}</small>
            <h6 className="text-uppercase">{props.year}</h6>
          </div>
        </div>
        <hr />
        <p className="welcome">{props.desc}</p>
      </div>
    </>
  )
}

export default Card
