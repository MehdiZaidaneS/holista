import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className='footerContainer'>
            <div className='subscribeButton'>
                <p>Get the latest tips for social media growth and marketing straight to your inbox!</p>
                <form>
                    <input
                        className="footer-form-input-filed w-input"
                        maxLength="256"
                        name="email"
                        data-name="Email"
                        placeholder="jhon@example.com"
                        type="email"
                        id="email"
                        required
                    />
                    <input style={{ textAlign: "right", width: "fit-content" }}
                        id='submitButton'
                        type="submit"
                        data-wait=""
                        className="footer-form-submit-button w-button"
                        value="Subscribe Now"
                    />
                </form>
            </div>
            <div className='linksMap'>
                <div className='siteMap'>
                    <h5>Site Map</h5>
                    <ul>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className='supportMap'>
                    <h5>Support</h5>
                    <ul>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
                <div className='contactUsMap'>
                    <h5>Contact Us</h5>
                    <ul>
                        <li>
                            <img src="https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/687d524270b31a7ec0bc18e6_Footer%20Information%20Icon1.svg" loading="lazy" alt="" />
                            <p>+91 123 456789</p>
                        </li>
                        <li>
                            <img src="https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/687d5242abbe0b1f836c110a_Footer%20Information%20Icon2.svg" loading="lazy" alt=""/>
                            <p>hello@domain.com</p>
                        </li>
                        <li>
                            <img src="https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/687d5242cbc750356beb3959_Footer%20Information%20Icon3.svg" loading="lazy" alt=""/>
                            <p>Springfield 1234 Elmwood Street, IL 62701 USA</p>
                        </li>
                    </ul>
                </div>
            </div>
        
            <div className='copyright'>
                <p>Designed by <strong style={{textDecoration:"underline", color:"rgb(252, 94, 36)"}}>Holista</strong>  Powered by <strong style={{textDecoration:"underline", color:"rgb(252, 94, 36)"}}>Holista</strong></p>
            </div>
        </div>
    )
}

export default Footer