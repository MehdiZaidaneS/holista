import React from 'react'
import "./MemberCard.css"

function MemberCard({ member }) {
  return (
    <div className='memberCardContainer'>
      <img src={member.img} alt={member.name} />
      <div className='memberCardInfo'>
        <h5>{member.name}</h5>
        <p>{member.role}</p>
      </div>
    </div>
  );
}

export default MemberCard