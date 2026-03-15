import React from 'react'
import "./LearnAboutUsStat.css"

function LearnAboutUsStat({ icon,number, description }) {
    return (
        <div className='learnAboutUsStat'>
            <div className='about-us-card-icon-wrap'>
                <img src={icon} loading='lazy' alt='About Icon'></img>
            </div>
            <div className='learn-about-us-info'>
                <h2>{number}</h2>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default LearnAboutUsStat