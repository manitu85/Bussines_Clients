import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Alert = props => {
  const { message, messageType } = props
  return (
    <div
      className={classnames('alert', {
        'alert-success text-center': messageType === 'success',
        'alert-danger text-center': messageType === 'error'
      })}
    >
      {message}
    </div>
  )
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  messageType: PropTypes.string.isRequired
}

export default Alert
