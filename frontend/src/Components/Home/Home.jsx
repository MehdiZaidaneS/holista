import React from 'react'
import TitlePage from './TitlePage/TitlePage'
import CompanySection from './CompanySection/CompanySection'
import LearnAboutUs from './LearnAboutUs/LearnAboutUs'

function Home() {
  return (
    <div>
      <TitlePage />
      <CompanySection />
      <LearnAboutUs />
    </div>
  )
}

export default Home