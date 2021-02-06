import React from 'react'
import Search from '../users/Search'
import Users from '../users/Users'
import Row from 'react-bootstrap/Row'

const Home = () => {
  return (
    <>
      <Search />
      <Row>
        <Users />
      </Row>
    </>
  )
}

export default Home