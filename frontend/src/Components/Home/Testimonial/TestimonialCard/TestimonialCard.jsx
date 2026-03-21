import React from 'react'
import './TestimonialCard.css'

function TestimonialCard() {
    return (
        <div className='testimonialCardContainer'>
            <div className='rate'>
                <img src='https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a7706fdbe1cb1c58f4bc43_Testimonial%20Card%20Review%20Icon1.svg' />
                <img src='https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a7706fdbe1cb1c58f4bc43_Testimonial%20Card%20Review%20Icon1.svg' />
                <img src='https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a7706fdbe1cb1c58f4bc43_Testimonial%20Card%20Review%20Icon1.svg' />
                <img src='https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a7706fdbe1cb1c58f4bc43_Testimonial%20Card%20Review%20Icon1.svg' />
                <img src="https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a7706fe4ffef9b43f72c36_Testimonial%20Card%20Review%20Icon2.svg" />
            </div>
            <p className='feedback'>
                Working with them was a true pleasure. They were responsive, communicative, and always willing to go the extra mile. I especially appreciated their attention to detail
            </p>
            <div className='clientInfo'>
                <img src='https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a8b2ce85663a578d1bef2a_Testimonial%20Card%20Author%20Image1.png' />
                <div className='name&info'>
                    <p style={{ fontWeight: 'bold', marginBottom:"5px"}}>Jakob Alison</p>
                    <p style={{marginTop: "0", fontSize:"13px"}}>CTO at Ritovex</p>
                </div>


            </div>
        </div>
    )
}

export default TestimonialCard