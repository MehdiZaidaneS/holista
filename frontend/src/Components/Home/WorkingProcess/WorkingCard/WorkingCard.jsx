import React from 'react'
import './WorkingCard.css'

function WorkingCard({ index, icon, description, title }) {
  return (
    <div className='workingCard'>
        <div className='workingCardIcon'>
            <img src={icon} alt='Working Card Icon'></img>
            <p>0{index + 1}</p>
        </div>
        <div className='workingCardInfo'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        
    </div>
  )
}

export default WorkingCard