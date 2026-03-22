import React, { useState } from 'react'
import "./MeetOurTeam.css"
import MemberCard from './MemberCard/MemberCard'

function MeetOurTeam() {

    const members = [
        { name: "Thomas Alison", role: "Co Founder & CEO", img: "https://cdn.prod.website-files.com/688a6c3373e0fdb14fbef689/68aa13043008cdec5ec2ab83_Team%20Member%20Image6.jpg" },
        { name: "Jane Doe", role: "Designer", img: "https://cdn.prod.website-files.com/688a6c3373e0fdb14fbef689/68aa12ecc435e679477237ef_Team%20Member%20Image5.jpg" },
        { name: "John Smith", role: "Developer", img: "https://cdn.prod.website-files.com/688a6c3373e0fdb14fbef689/68aa13043008cdec5ec2ab83_Team%20Member%20Image6.jpg" },
        { name: "Anna Lee", role: "Marketing", img: "https://cdn.prod.website-files.com/688a6c3373e0fdb14fbef689/68aa13043008cdec5ec2ab83_Team%20Member%20Image6.jpg" },
        { name: "Mike Ross", role: "Sales", img: "https://cdn.prod.website-files.com/688a6c3373e0fdb14fbef689/68aa13043008cdec5ec2ab83_Team%20Member%20Image6.jpg" }
    ];

    const [startIndex, setStartIndex] = useState(0);


    const next = () => {
        if (startIndex + 3 < members.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const prev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };
    return (
        <div className='meetOurTeamContainer'>
            <div>
                <div className='testimonialInfoSubtitle' style={{ margin: "0 auto" }}>
                    <img src='https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/687810aa5293f9e8c955c26a_Section%20Subtitle%20Icon.svg'></img>
                    <p>Team Members</p>
                </div>
                <div className='testimonialInfoTitle'>
                    <h2>Meet Our Expert Members</h2>
                </div>
            </div>
            <div className='memberCards'>
                {members.slice(startIndex, startIndex + 3).map((member, index) => (
                    <MemberCard key={index} member={member} />
                ))}
            </div>
            <div className="carouselButtons">
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    )
}

export default MeetOurTeam