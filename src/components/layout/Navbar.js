import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import NAVBAR from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navbar = ({ icon, title }) => {
  return (
    <NAVBAR bg='primary' expand='md' variant='dark' sticky='top'>
      <NAVBAR.Brand>
        <h1>
          <i className={icon}></i>
          {title}
        </h1>
      </NAVBAR.Brand>
      <NAVBAR.Toggle aria-controls="basic-navbar-nav" />
      <NAVBAR.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </Nav>
      </NAVBAR.Collapse>
    </NAVBAR>
  )
}

Navbar.defaultProps = {
  title: 'Github Search',
  icon: 'fab fa-github mr-3'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar


