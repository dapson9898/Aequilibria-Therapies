import React from 'react'

const HeaderParagraph = (props) => {
    const style = {
        fontSize: "18px",
        letterSpacing: "1px",
        marginBottom: "60px",
        lineHeight: "22px",
        textAlign: "center",
        color: props.color || "gray",
        fontWeight: "bold"
    }
  return (
    <>
      <p style={style}>{props.title}</p>
    </>
  )
}

export default HeaderParagraph
