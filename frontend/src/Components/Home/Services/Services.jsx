import React from 'react'
import './Services.css'
import Service from './Service/Service'

function Services() {

    const info = [
        { name: "Web Design",  description: "Focuses on the aesthetic and user experience of a website, creating visually appealing and intuitive layouts. It involves aspects like graphic design, typography, and color schemes to enhance user engagement." },
        { name: "Web Development", description: "Involves the coding and programming that makes a website functional and interactive. This includes front-end development (what users see) and back-end development (server, database, and application logic)." },
        { name: "Branding", description: "The process of creating a unique identity for a company or product, encompassing its name, logo, messaging, and overall market perception. It aims to establish recognition and a positive emotional connection with the target audience." },
        { name: "Product Design", description: "Encompasses the entire process of creating a new product, from conceptualization and research to prototyping and final execution. It focuses on solving user problems and enhancing the overall user experience and functionality of a product." }
    ];

    return (
        <div className='servicesContainer'>
            <div className='servicesContainerSubtitle'>
                <img src='https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a8be303fa5a8c72f1cf197_Section%20Subtitle%20Icon2.svg'></img>
                <p>Services</p>
            </div>
            <div className='servicesContainerTitle'>
                <h2>Your Needs, Our Expertise</h2>
                <p>Your Vision, Our Expertise – Together, we bring ideas to life  with tailored solutions that deliver real results. Let’s build something amazing.</p>
            </div>
            <div className='services'>
                {
                    info.map((fruit, index) => (
                        <Service key={index} index={index} name={fruit.name} description={fruit.description} />
                    ))
                }
            </div>
        </div>
    )
}

export default Services