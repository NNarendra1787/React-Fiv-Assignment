import React from 'react'
import HigherComp from './HigherComp'

function OverComp({count, increment}) {
  return (
    <div className='FirstRight'>
      <h1>This component show when it hover <span id='mac1'>{count}</span>  </h1>
      <div className='butt'>
        <button onMouseOver={increment} className='btn'>Come To Close </button>
      </div>
    </div>
  )
}

export default HigherComp(OverComp)
