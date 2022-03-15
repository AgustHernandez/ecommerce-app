import React from 'react'
import ImgHeroSection from '../imgHeroSection/ImgHeroSection';

import './styleHeroSection.css';


function HeroSection({MsjBienvenida}) {

  return (
    <div className='HeroSection'>
      <ImgHeroSection/>
      <MsjBienvenida/> 
    </div>
  )
}

export default HeroSection
