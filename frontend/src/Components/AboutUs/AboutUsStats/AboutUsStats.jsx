import React from 'react'
import "./AboutUsStats.css"
import LearnAboutUsStat from '../../Home/LearnAboutUs/LearnAboutUsStat/LearnAboutUsStat'

function AboutUsStats() {

    const info = [
        { icon: "https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68781451c1b2ec734bdb1f89_About%20Us%20Card%20Icon1.svg", number: "200+", description: "We deliver great work always" },
        { icon: "https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/6878145183772d0cdf6005e8_About%20Us%20Card%20Icon2.svg", number: "10+", description: "Experience you can count on" },
        { icon: "https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68781451e9e825ffe70ac4af_About%20Us%20Card%20Icon3.svg", number: "20+", description: "Award-Winning Work, Trusted Results" },
        { icon: "https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68781451954bf1b86c600b25_About%20Us%20Card%20Icon4.svg", number: "5K+", description: "We have happy Clients worldwide" }
    ];

    return (
        <div className='aboutUsStatsContainer'>
            {
                info.map((fruit, index) => (
                    <LearnAboutUsStat key={index} icon={fruit.icon} number={fruit.number} description={fruit.description} />
                ))
            }
        </div>
    )
}

export default AboutUsStats