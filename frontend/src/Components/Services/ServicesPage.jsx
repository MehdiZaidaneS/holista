import React from 'react'
import "./ServicesPage.css"
import ServicesTitlePage from './ServicesTitlePage/ServicesTitlePage'
import Services from '../Home/Services/Services'
import Testimonial from '../Home/Testimonial/Testimonial'
import Plans from './Plans/Plans'
import Benefit from './Benefit/Benefit'

function ServicesPage() {
  return (
    <div className='servicesPageContainer'>
      <ServicesTitlePage />
      <Services />
      <Plans />
      <Benefit />
      <Testimonial />
    </div>
  )
}

export default ServicesPage