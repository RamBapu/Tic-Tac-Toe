import React from 'react'

const Square = ({value,onClick}) => {
  return (
    <div className={`square ${value === "X" ? ` fc-aqua` : ` fc-white`}`}
     onClick={onClick}>{value}</div>
  )
}

export default Square