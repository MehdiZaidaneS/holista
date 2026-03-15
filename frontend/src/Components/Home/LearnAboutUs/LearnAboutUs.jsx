import React from 'react'
import './LearnAboutUs.css'
import LearnAboutUsStat from './LearnAboutUsStat/LearnAboutUsStat'

function LearnAboutUs() {

    const info = [
        { icon: "https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68781451c1b2ec734bdb1f89_About%20Us%20Card%20Icon1.svg", number: "200+", description: "We deliver great work always" },
        { icon: "https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/6878145183772d0cdf6005e8_About%20Us%20Card%20Icon2.svg", number: "10+", description: "Experience you can count on" },
        { icon: "https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68781451e9e825ffe70ac4af_About%20Us%20Card%20Icon3.svg", number: "20+", description: "Award-Winning Work, Trusted Results" },
        { icon: "https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68781451954bf1b86c600b25_About%20Us%20Card%20Icon4.svg", number: "5K+", description: "We have happy Clients worldwide" }
    ];

    return (
        <div className='learnAboutUs'>
            <div className='learnAboutUsSubtitle'>
                <img src='https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/687810aa5293f9e8c955c26a_Section%20Subtitle%20Icon.svg'></img>
                <p>About Us</p>
            </div>
            <div className='learnAboutUsTitle'>
                <h2>Who We Are. Learn About Us</h2>
                <p>We are a dynamic team of innovators, storytellers, and visionaries dedicated to transforming ideas into extraordinary experiences.</p>
            </div>
            <div className='learnAboutUsCards'>
                <div className='learnAboutUsImg'>
                    <img src='https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/6878121432484b77d15b7692_About%20Us%20Image.png'></img>
                </div>
                <div className='learnAboutUsInfo'>
                    <div className='learnAboutUsStats'>
                        {
                            info.map((fruit, index) => (
                                <LearnAboutUsStat key={index} icon={fruit.icon} number={fruit.number} description={fruit.description} />
                            ))
                        }
                        
                    </div>
                    <div className='learnAboutUsButton'>
                        <button className='learnAboutUsButton1'>More About Us</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LearnAboutUs