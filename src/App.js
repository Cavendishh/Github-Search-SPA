import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  //Searches for github users
  searchUsers = async text => {
    const res = await axios.get(`
      https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_API_KEY}
    `)

    this.setState({ loading: false, users: res.data.items })
  }


  render() {
    return (
      <div className='App'>
        <Navbar />
        <Container>
            <Search searchUsers={this.searchUsers} />
          <Row>
            <Users loading={this.state.loading} users={this.state.users} />
          </Row>
        </Container>
      </div>
    )  
  }
}

export default App
