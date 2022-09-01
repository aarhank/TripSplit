import React from 'react'
import "./index.css"

export default function FilledBox({text}) {
  return (
    <div className='filledbox'>
        <p className='box-text'>{text}</p>
    </div>
  )
}