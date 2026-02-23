import React from 'react'
import HeaderParagraph from './HeaderParagraph'
import HeaderText from './HeaderText'
import Button from './Button'

const Appointment = () => {
    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 0"
    }
  return (
    <>
      <div className="appointment" style={style}>
        <HeaderText title="Ready to Begin Your Healing Journey?" color="white"/>
        <HeaderParagraph title="Take the first step towards optimal health and wellness today" color="white"/>
        <Button bgColor="white" color="#0d9488"/>
      </div>
    </>
  )
}

export default Appointment
