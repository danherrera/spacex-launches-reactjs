import React, { useState } from 'react'
import './Checkbox.css'

export default function Checkbox (props) {
  const [checked, setChecked] = useState(false)
  const { label, handleCheckChange } = props

  function toggleCheck () {
    const newCheckedState = !checked
    try {
      setChecked(newCheckedState)
      handleCheckChange(newCheckedState)
    } catch (err) {
      console.log(`Error toggling check\n${err.message}`)
    }
  }

  return (
    <label className='launch-options-checkbox'>
      <input className='checkbox-input' type='checkbox' checked={checked} onChange={toggleCheck} />
      <span>{label}</span>
    </label>
  )
}
