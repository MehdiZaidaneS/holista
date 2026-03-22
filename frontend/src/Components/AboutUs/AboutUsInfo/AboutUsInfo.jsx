import React from 'react'
import "./AboutUsInfo.css"

function AboutUsInfo() {
    return (
        <div className='aboutUsInfoContainer'>
            <div className='aboutUsInfoImage'>
                <img src='https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68aa0d4927a7a2c37c2d4733_Why%20Chooses%20Us%20Image.png'></img>
            </div>
            <div className='aboutUsInfoInfo'>
                <div className='benefitInfoSubtitle'>
                    <img src='https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/687810aa5293f9e8c955c26a_Section%20Subtitle%20Icon.svg'></img>
                    <p>About Us</p>
                </div>
                <div className='aboutUsInfoTitle'>
                    <h2>Your Success, Our Priority.</h2>
                    <p>We're dedicated to helping you achieve your goals with a simple, user-friendly experience. We believe our commitment to your success sets us apart.</p>
                </div>
                <div className='aboutUsInfo-card'>
                    <div className='aboutUsInfo-card-upper'>
                        <div>
                            <h4>Innovate to Lead</h4>
                            <p>Foster creativity and embrace innovation to stay ahead of the competition.</p>
                        </div>
                        <div>
                            <h4>Optimize for Growth</h4>
                            <p>Streamline processes and resources to maximize efficiency and profitability.</p>
                        </div>

                    </div>
                    <div className='aboutUsInfo-card-upper'>
                        <div>
                            <h4>Innovate to Lead</h4>
                            <p>Foster creativity and embrace innovation to stay ahead of the competition.</p>
                        </div>
                        <div>
                            <h4>Optimize for Growth</h4>
                            <p>Streamline processes and resources to maximize efficiency and profitability.</p>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default AboutUsInfo