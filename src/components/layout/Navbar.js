import React from 'react'
import PropTypes from 'prop-types'
import NAVBAR from 'react-bootstrap/Navbar'

const Navbar = ({ icon, title }) => {
  return (
    <NAVBAR bg='primary' variant='dark'>
      <NAVBAR.Brand>
        <h1>
          <i className={icon}></i>
          {title}
        </h1>
      </NAVBAR.Brand>
    </NAVBAR>
  )
}

Navbar.defaultProps = {
  title: 'Github Search',
  icon: 'fab fa-github'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar


