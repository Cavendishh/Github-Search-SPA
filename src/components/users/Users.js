import React, { useContext } from 'react'
import UserItem from './UserItem'
import Col from 'react-bootstrap/Col'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext'

const Users = () => {
  const githubContext = useContext(GithubContext)
  const { loading, users } = githubContext

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      {users.map(user => {
        return <Col sm={6} md={4} xl={3} key={user.id}><UserItem user={user}/></Col>
      })}
    </>
  )
}

export default Users
