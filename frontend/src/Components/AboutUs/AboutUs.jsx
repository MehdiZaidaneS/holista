import React from 'react'
import AboutUsTitlePage from './AboutUsTitlePage/AboutUsTitlePage'
import AboutUsStats from './AboutUsStats/AboutUsStats'
import AboutUsInfo from './AboutUsInfo/AboutUsInfo'
import Services from '../Home/Services/Services'
import CompanySection from '../Home/CompanySection/CompanySection'
import MeetOurTeam from './MeetOurTeam/MeetOurTeam'

function AboutUs() {
  return (
    <div>
      <AboutUsTitlePage />
      <AboutUsStats />
      <AboutUsInfo />
      <CompanySection />
      <Services />
      <MeetOurTeam />
    </div>
  )
}

export default AboutUs