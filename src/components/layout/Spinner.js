import React from 'react'
import spinner from './Ripple-1s-200px.gif'

export default () => {
  const style = {
    width: '150px',
    margin: 'auto',
    display: 'block',
    background: 'none repeat scroll 0 0 transparent'
  }

  return (
    <div>
      <img src={spinner} alt='Loading...' style={style} />
    </div>
  )
}