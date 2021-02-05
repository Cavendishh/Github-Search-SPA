import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import About from './components/routes/About'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }

  //Searches for github users
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(`
      https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_API_KEY}
    `)

    this.setState({ loading: false, users: res.data.items })
  }

  //Clear all users from the state
  clearUsers = () => this.setState({ users: [], loading: false })
  
  //Set alerts
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })
    setTimeout(() => {
      this.setState({ alert: null })
    }, 2000);
  }
  
  //Get single user from github
  getUser = async (username) => {
    this.setState({ loading: true })

    const res = await axios.get(`
      https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_API_KEY}
    `)
    
    this.setState({ loading: false, user: res.data })
  }

  //Get user's public repositories
  getUserRepos = async (username) => {
    this.setState({ loading: true })

    const res = await axios.get(`
      https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_API_KEY}
    `)
    
    this.setState({ loading: false, repos: res.data })
  }

  render() {
    const  { users, user, loading, repos } = this.state

    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Container>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <>
                  <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false} setAlert={this.setAlert} />
                  <Row>
                    <Users loading={loading} users={users} />
                  </Row>
                </>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <User { ...props } getUser={this.getUser} getUserRepos={this.getUserRepos} user={user} repos={repos} loading={loading} />
              )} />
            </Switch>
          </Container>
        </div>
      </Router>
    )  
  }
}

export default App
