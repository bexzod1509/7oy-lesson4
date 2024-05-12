import React from 'react'
import "./Empty.css"

const Empty = ({text}) => {
  return (
    <div className='empty'>
        <h2>{text}</h2>
        <p>Lorem ipsum dolor sit.</p>
    </div>
  )
}

export default Empty