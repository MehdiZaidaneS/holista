import React from 'react'
import './Service.css'

function Service({index, name, description }) {
    return (
        <div className='serviceContainer'>
            <div className='serviceTitle'>
                <p>{String(index + 1).padStart(2, '0')}</p>
                <h1>{name}</h1>
            </div>
            <div className='serviceDescription'>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default Service