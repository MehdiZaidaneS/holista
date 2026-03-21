import React from 'react'
import './Testimonial.css'
import TestimonialCard from './TestimonialCard/TestimonialCard'

function Testimonial() {
    return (
        <div className='testimonialContainer'>
            <div className='testimonialInfo'>
                <div className='testimonialInfoSubtitle'>
                    <img src='https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/687810aa5293f9e8c955c26a_Section%20Subtitle%20Icon.svg'></img>
                    <p>Testimonial</p>
                </div>
                <div className='testimonialInfoTitle'>
                    <h2>What Our Clients are Saying</h2>
                    <p>Hear directly from our clients about their experiences and the results we've delivered. Explore Client Feedback</p>
                </div>
            </div>
            <div className='testimonialCarousel'>
                <div className='groupTestimonial'>
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />

                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    
                    

                    
                </div>
                
                {/* <div aria-hidden className='groupTestimonial'>
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </div>  */}


            </div>

        </div>
    )
}

export default Testimonial