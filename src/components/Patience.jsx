import React from 'react'
import HeaderText from './HeaderText'
import HeaderParagraph from './HeaderParagraph'
import Rating from './Rating'

const Patience = () => {
  return (
    <>
      <div className="partners" style={{
        backgroundColor: "#f9fafb",
        width: "100%",
        minHeight: "50vh",
        padding: "50px 10px",
      }}>
        <HeaderText title="What Our Patients Say" />
        <HeaderParagraph title="Real stories of healing and transformation" />
        <Rating />
      </div>
    </>
  )
}

export default Patience
