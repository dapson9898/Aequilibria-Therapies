import React from 'react'
import Dash from '../components/Dash'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'
import Services from '../components/Services'
import ServiceCard from '../components/ServiceCard'
import Partners from '../components/Partners'
import Patience from '../components/Patience'
import Rating from '../components/Rating'
import Appointment from '../components/Appointment'

const home = () => {
  
  return (
    <>
    <Dash />
    <Welcome />
    <Services />
    <Partners />
    <Patience />
    <Appointment />
    </>
  )
}

export default home
