import React from 'react'
import spinner from '../../images/Ripple-1s-200px.gif'

 const Spinner = () => {
  const style = {
    width: '120px',
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

export default Spinner