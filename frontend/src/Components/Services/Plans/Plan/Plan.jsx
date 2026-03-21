import React from 'react'
import "./Plan.css"

function Plan() {
    return (
        <div className='planContainer'>
            <div className='planContainerInfo'>
                <div className='title'>
                    <h3>Logo & Branding</h3>
                    <p>We create distinctive bran identities reflecting you vision.</p>
                </div>
                <div className='price'>
                    <p>$1200/once</p>
                </div>
            </div>
            <div className='planContainerIncluded'>
                <h3>What's included</h3>
                <div className='included'>
                    <lu>
                        <li>
                            <img src='https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/695e4057ae2c2d8b970ca7b2_Pricing%20List%20Icon%201.svg' />
                            <p>All studio expertise at your fingertips</p>
                        </li>
                        <li>
                            <img src='https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/695e4057ae2c2d8b970ca7b2_Pricing%20List%20Icon%201.svg' />
                            <p>All studio expertise at your fingertips</p>
                        </li>
                        <li>
                            <img src='https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/695e4057ae2c2d8b970ca7b2_Pricing%20List%20Icon%201.svg' />
                            <p>All studio expertise at your fingertips</p>
                        </li>
                    </lu>
                    <lu>
                        <li>
                            <img src='https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/695e4057ae2c2d8b970ca7b2_Pricing%20List%20Icon%201.svg' />
                            <p>All studio expertise at your fingertips</p>
                        </li>
                        <li>
                            <img src='https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/695e4057ae2c2d8b970ca7b2_Pricing%20List%20Icon%201.svg' />
                            <p>All studio expertise at your fingertips</p>
                        </li>
                        <li>
                            <img src='https://cdn.prod.website-files.com/68b8742bd9cfcab78f7642c0/695e4057ae2c2d8b970ca7b2_Pricing%20List%20Icon%201.svg' />
                            <p>All studio expertise at your fingertips</p>
                        </li>
                    </lu>
                </div>
                <button className='bookACall'>Book a 15min Call</button>

            </div>
        </div>
    )
}

export default Plan