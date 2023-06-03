import React from 'react'
import HigherComp from './HigherComp'

function ClickComp({count, increment}) {
  console.log("clickComponent",count);
  return (
    <div className='FirstLeft'>
        <h1 className='CHead'>Click Me To see change <span id='mac'>{count}</span></h1>
        <div className='butt'>
          <button className='btn' onClick={increment}>Click</button>
        </div>
    </div>
  )
}

export default HigherComp(ClickComp)
