import React from 'react'

const Buton = ({func1, func2,count}) => {
  return (
    <div>
        <h1>counter:{count}</h1>
        <button onClick={func1}>increament</button>
        <button onClick={func2}>decreament</button>
    </div>
  )
}

export default Buton