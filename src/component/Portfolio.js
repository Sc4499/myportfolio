import React from 'react';
import Pcard from './Pcard';
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div>
        <div className='container featurebox' id="port">
        <p className='namecol'>PORTFOLIO</p>
        <h3>Visit my portfolio and keep your feedback</h3>
        <div className='row cardbox p-0'>
          <Pcard/>
        </div>
      
    </div>
    </div>
  )
}

export default Portfolio
