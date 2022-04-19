import './styleHeroSection.css';

import { Container } from '@mui/material';
import ImgHeroSection from '../imgHeroSection/ImgHeroSection';
import React from 'react'

function HeroSection({MsjBienvenida}) {

  return (
    <Container maxWidth="xl">
      <ImgHeroSection/>
      <MsjBienvenida/> 
    </Container>
  )
}

export default HeroSection
