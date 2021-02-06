import React, { useContext } from 'react'
import ALERT from 'react-bootstrap/Alert'
import AlertContext from '../../context/alert/alertContext'

const Alert = () => {
  const alertContext = useContext(AlertContext)
  const { alert } = alertContext

  return (
    alert !== null && (
      <ALERT variant={alert.type}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </ALERT>
    )
  )
}

export default Alert
