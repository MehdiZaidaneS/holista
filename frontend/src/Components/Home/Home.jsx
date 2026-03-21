import React from 'react'
import TitlePage from './TitlePage/TitlePage'
import CompanySection from './CompanySection/CompanySection'
import LearnAboutUs from './LearnAboutUs/LearnAboutUs'
import Services from './Services/Services'
import WorkingProcess from './WorkingProcess/WorkingProcess'
import CarrouselService from './CarrouselService/CarrouselService'
import Testimonial from './Testimonial/Testimonial'

function Home() {
  return (
    <div>
      <TitlePage />
      <CompanySection />
      <LearnAboutUs />
      <Services />
      <WorkingProcess />
      <CarrouselService />
      <Testimonial />
    </div>
  )
}

export default Home