import React from 'react'
import Plan from './Plan/Plan'
import "./Plans.css"

function Plans() {
    return (
        <div className='plansContainer'>
            <div className='plansContainerSubtitle'>
                <img src='https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/687810aa5293f9e8c955c26a_Section%20Subtitle%20Icon.svg'></img>
                <p>Plans</p>
            </div>
            <div className='plansContainerTitle'>
                <h2>Learn More About Our Plans</h2>
                <p>We are a dynamic team of innovators, storytellers, and visionaries dedicated to transforming ideas into extraordinary experiences.</p>
            </div>

            <div className='plans'>
                <Plan />
                <Plan />
            </div>
        </div>
    )
}

export default Plans