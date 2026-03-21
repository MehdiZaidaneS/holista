import React from 'react'
import "./BenefitCard.css"

function BenefitCard({title, description}) {
    return (
        <div className='benefit-card-info'>
            <div className='benefit-card-title'>
                <img src='https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68af54ee3bafdceb6ffba3dc_Benefit%20Card%20Icon1.svg ' />
                <h4>{title}</h4>
            </div>
            <div className='benefit-card-description'>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default BenefitCard