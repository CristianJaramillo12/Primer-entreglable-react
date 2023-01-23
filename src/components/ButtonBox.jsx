import React from 'react'

const ButtonBox = ({handleCLick, colorRandom}) => {
  return (
    <button style={{background: colorRandom}} className='box_btn' onClick={handleCLick}>&#62;</button>
  )
}

export default ButtonBox