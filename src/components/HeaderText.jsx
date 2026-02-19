import React from 'react'

const HeaderText = (props) => {
    const style = {
        fontSize: "42px",
        textAlign: "center",
        marginBottom: "10px"
    }
  return (
    <>
      <h2 style={style}>{props.title}</h2>
    </>
  )
}

export default HeaderText
