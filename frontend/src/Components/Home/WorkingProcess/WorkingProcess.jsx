import React from 'react'
import './WorkingProcess.css'
import WorkingCard from './WorkingCard/WorkingCard'

function WorkingProcess() {

    const info = [
        { icon: "https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a8d986192c37ebe5b1f6e2_Working%20Process%20Card%20Icon1.svg", description: "We start by understanding your vision, goals.", title:"Discover & Strategy"  },
        { icon: "https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a8d93a82c71a2fa084211d_Working%20Process%20Card%20Icon2.svg", description: "We start by understanding your vision, goals.", title:"Design & Development"  },
        { icon: "https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68a8d93a17433548b70ef818_Working%20Process%20Card%20Icon3.svg", description: "We start by understanding your vision, goals.", title:"Launch & Support"  }
    ];
    return (
        <div className='workingProcessContainer'>
            <div className='workingProcessInfo'>
                <div className='workingProcessInfoSubtitle'>
                    <img src='https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/687810aa5293f9e8c955c26a_Section%20Subtitle%20Icon.svg'></img>
                    <p>Working Process</p>
                </div>
                <div className='workingProcessInfoTitle'>
                    <h2>Explore Our 3 Step Working Process</h2>
                    <div className='learnAboutUsButton'>
                        <button className='learnAboutUsButton1'>Start Projects</button>
                    </div>
                </div>
            </div>
            <div className='workingProcessCards'>
                {
                    info.map((fruit, index) => (
                        <WorkingCard key={index} index={index} icon={fruit.icon} description={fruit.description} title={fruit.title} />
                    ))
                }
            </div>
        </div>
    )
}

export default WorkingProcess