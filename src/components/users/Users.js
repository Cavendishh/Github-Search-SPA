import React from 'react'
import UserItem from './UserItem'
import Col from 'react-bootstrap/Col'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />
  }
  console.log(users)
  return (
    <>
      {users.map(user => {
        return <Col sm={6} md={4} xl={3} key={user.id}><UserItem user={user}/></Col>
      })}
    </>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Users
