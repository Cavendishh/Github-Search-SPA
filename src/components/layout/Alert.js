import React from 'react'
import ALERT from 'react-bootstrap/Alert'

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <ALERT variant={alert.type}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </ALERT>
    )
  )
}

export default Alert
