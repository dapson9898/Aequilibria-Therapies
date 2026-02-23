import React from 'react'

const Button = (props) => {
  return (
    <>
      <button style={{backgroundColor: props.bgColor, color: props.color}}>Explore All Services</button>
    </>
  )
}

export default Button
