import React, { useState } from 'react'

function HigherComp(MyComp) {
    const NewComp=()=>{
        const [count,setCount]=useState(0);
        const increment=()=>{
            setCount(count+1);
        }
        return <MyComp count={count} increment={increment}/>
    }
  return NewComp;
}
export default HigherComp
