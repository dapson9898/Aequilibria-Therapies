import React from 'react'
import './styles/Services.css'
import HeaderText from './HeaderText'
import GrayBg from './GrayBg'
import HeaderParagraph from './HeaderParagraph'
import ServiceCard from './ServiceCard'
import Button from './Button'

const Services = () => {
  const style = {
    width: "100%",
    background: "transparent",
    padding: "0 10%",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "space-evenly",
    margin: "50px 0",
  }
  return (
    <>
      <div className='services'>
        <HeaderText title="Our Healing Services" />
        <HeaderParagraph title="Comprehensive holistic therapies tailored to your unique wellness needs" />
      <div className="cards" style={style}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <div className="btn" style={{display: "flex",justifyContent: "center" }}>
        <Button />
      </div>
      </div>
    </>
  )
}

export default Services
