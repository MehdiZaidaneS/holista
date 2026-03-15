import React, { useRef, useEffect, useState } from 'react';
import './CompanySection.css';

const logos = [
  'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780ea28b177a0c8132c731_Company%20Logo1.svg',
  'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780ea22e58f4023f2c407c_Company%20Logo2.svg',
  'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780ea220a133701403500a_Company%20Logo3.svg',
  'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780ea240be0a12a1e31114_Company%20Logo4.svg',
  'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780ea28ac1cfc6ba5420ef_Company%20Logo5.svg',
  'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780ea22e65e6c572cff62d_Company%20Logo6.svg',
  'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780ea2d98edc9135c707e4_Company%20Logo7.svg',
  'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780ea28c5d930779c479fd_Company%20Logo8.svg',
  'https://cdn.prod.website-files.com/6877e02f5387b6bdd6d338ec/68780ea240486de39f0c518e_Company%20Logo9.svg',
 
];

function CompanySection() {
  return (
    <div className='company-section'>
      <div className='company-subtitle-wrapper'>
        <div className='company-subtitle-line'></div>
        <div className='company-subtitle'>Trusted Partners Worldwide for Success</div>
        <div className='company-subtitle-line'></div>
      </div>

      <div className='sponsor-ticker'>
        <div className='sponsor-ticker-inner'>
          {[...logos, ...logos].map((logo, index) => (
            <React.Fragment key={index}>
              <div className='ticker-circle'></div>
              <img src={logo} alt='Partner Logo' className='company-logo' />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}


export default CompanySection;