import React from 'react'
import HeaderText from './HeaderText'
import HeaderParagraph from './HeaderParagraph'
import ServiceCard from './ServiceCard'

const Partners = () => {
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
      <div className="partners" style={{
        backgroundColor: "#fff",
        width: "100%",
        minHeight: "50vh",
        padding: "50px 10px",
      }}>
        <HeaderText title="Why Choose Aequilibria" />
        <HeaderParagraph title="Your trusted partner in holistic health and wellness" />
        <div className="cards" style={style}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        </div>

      </div>
    </>
  )
}

export default Partners
