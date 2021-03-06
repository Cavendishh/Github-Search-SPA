import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

const UserItem = ({user: { login, avatar_url, html_url }}) => {
  return (
    <Card className='text-center'>
      <div className='text-center'>
        <Image src={avatar_url} roundedCircle style={{ width: '60px' }} alt='Github avatar' />
      </div>
      <h3>{login}</h3>
      <Link to={`/user/${login}`}><Button variant='primary'>Details</Button></Link>
    </Card>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem