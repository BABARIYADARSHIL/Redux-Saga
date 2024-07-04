import React, { useState } from 'react'
import Input from '../Component/Input'

const Task = () =>{
    const [Number,  setNumber] = useState()

    const handelInput =(e)=>{
        setNumber(e.target.value)
    }
    const handelClick =() => {
      const New = +Number 
            setNumber("C"+(New + 1))
            // console.log("C" + Number)
    }
  return (
    <>
      <Input
      type="Number"
      maxLength="3"
      
      onChange={handelInput}
      />

      <p>{Number}</p>
      <button onClick={handelClick}> Click</button>
    </>
  )
}

export default Task
