import React from 'react'
import './TitlePage.css'

function TitlePage() {
  return (
    <div className='titlePage'>
        <div id='titlePageText'>
            <label id='highlight'>Create Ideas That Inspire Growth</label>
            <h1>World's Best Creative Agency Team</h1>
            <p>World’s best creative agency team – crafting legendary brands  through bold ideas, strategic genius, and flawless execution that  dominates the global stage. </p>
            <button>Get Started</button>
        </div>
        <div id='titlePageImage'>
            <img src='https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/687809ff2e58f4023f2a0ba4_Banner%20Image.png' alt='titlePageImage' />
        </div>
    </div>
  )
}

export default TitlePage