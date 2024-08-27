import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
export default function ArrowButton({onClick, disabled}) {
  return (
    <button onClick={onClick} className='btn-next' disabled={disabled}>
      <FaAngleRight  style={{ color: 'white', fontSize: '26px' }}/>
    </button>
  )
}
