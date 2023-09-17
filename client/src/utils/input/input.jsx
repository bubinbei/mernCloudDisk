import React from 'react'
import './input.css'

export default function input(props) {
  return (
      <input  onChange={e=> props.setValue(e.target.value)} 
              value={props.value}
              type={props.type} 
              placeholder={props.placeholder}/>
  )
}
