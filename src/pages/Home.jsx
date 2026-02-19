import React from 'react'
import Dash from '../components/Dash'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'
import Services from '../components/Services'
import ServiceCard from '../components/ServiceCard'
import Partners from '../components/Partners'
import Patience from '../components/Patience'

const home = () => {
  
  return (
    <>
    <Dash/>
    <Welcome />
    <Services />
    <Partners />
    <Patience />
    <Footer />
    </>
  )
}

export default home
