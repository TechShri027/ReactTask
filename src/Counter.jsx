import React from 'react'

const Counter = ({increase, decrease, count}) => {
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default Counter