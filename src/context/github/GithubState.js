import React, { useReducer } from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {
  SET_LOADING,
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types'

const GithubState = props => {
  const initialState = {
    loading: false,
    users: [],
    user: {},
    repos: []
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY || process.env.GITHUB_API_KEY
  const GITHUB_ID = process.env.REACT_APP_GITHUB_ID || process.env.GITHUB_ID

  //Search for github users
  const searchUsers = async text => {
    setLoading()

    const res = await axios.get(`
      https://api.github.com/search/users?q=${text}&client_id=${GITHUB_ID}&client_secret=${GITHUB_API_KEY}
    `)

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    })
  }

  //Get github user
  const getUser = async (username) => {
    setLoading()

    const res = await axios.get(`
      https://api.github.com/users/${username}?client_id=${GITHUB_ID}&client_secret=${GITHUB_API_KEY}
    `)
    
    dispatch({
      type: GET_USER,
      payload: res.data
    })
  }

  //Clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS })

  //Get user's public repositories
  const getUserRepos = async (username) => {
    setLoading()

    const res = await axios.get(`
      https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${GITHUB_ID}&client_secret=${GITHUB_API_KEY}
    `)
    
    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
  }

  //Set loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  return <GithubContext.Provider
    value={{
      loading: state.loading,
      users: state.users,
      user: state.user,
      repos: state.repos,
      searchUsers,
      clearUsers,
      getUser,
      getUserRepos
    }}
  >
    {props.children}
  </GithubContext.Provider>
}

export default GithubState