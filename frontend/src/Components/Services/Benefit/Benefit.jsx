import React from 'react'
import "./Benefit.css"
import BenefitCar from './BenefitCard/BenefitCard'
import BenefitCard from './BenefitCard/BenefitCard'

function Benefit() {

    const info =[
        {title: "Fast & Reliable Delivery", description: "We prioritize timely completion without compromising quality."},
        {title: "Tailored to Your Needs", description: "Every solution is customized to fit your unique goals and challenges."}
    ]
    return (
        <div className='benefitContainer'>
            <div className='benefitImage'>
                <img src='https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68af526b9b09c1f0d5201fb8_Benefit%20Image.jpg'></img>
            </div>
            <div className='benefitInfo'>
                <div className='benefitInfoSubtitle'>
                    <img src='https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/687810aa5293f9e8c955c26a_Section%20Subtitle%20Icon.svg'></img>
                    <p>Benefit</p>
                </div>
                <div className='benefitInfoTitle'>
                    <h2>Why Choose Our Services</h2>
                    <p>Get high-quality results, faster delivery, and tailored solutions that grow with your business.  We focus on value, efficiency, and long-term success for every project.</p>
                </div>
                <div className='benefit-card'>
                    {
                        info.map((fruit, index) => (
                        <BenefitCard key={index} title={fruit.title} description={fruit.description} />
                    ))
                    }

                </div>
            </div>


        </div>
    )
}

export default Benefit