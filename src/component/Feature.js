import React from 'react';
import Card from './Card';
import "./Feature.css"

const Feature = () => {
  return (
    <div className='container featurebox' id="feat">
        <p className='namecol'>FEATURES</p>
        <h3>What i do</h3>
        <div className='row cardbox p-0'>
          <Card/>  
        </div>
      
    </div>
  )
}

export default Feature
