import React from 'react'

const Input = (props) => {
  return (
    <div>
      <input type={props.type} name={props.name} id={props.id} onChange={props.onChange} value={props.value} maxLength={props.maxLength}></input>
    </div>
  )
}

export default Input
