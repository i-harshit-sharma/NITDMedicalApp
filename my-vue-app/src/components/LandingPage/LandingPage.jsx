import React from 'react'
import hero from '../../assets/hero.avif'
import { Footer } from '../Footer/Footer'
const LandingPage = () => {
  return (
    <div className='hero'>
       <img src={hero} alt="" />
       <Footer/>
    </div>
  )
}

export default LandingPage