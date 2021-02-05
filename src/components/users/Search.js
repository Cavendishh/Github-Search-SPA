import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

export class Search extends Component {
  state = {
    text: ''
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })
  onSubmit = e => {
    e.preventDefault()
    if (this.state.text === '') {
      return this.props.setAlert('Search field empty', 'danger')
    }
    this.props.searchUsers(this.state.text)
    this.setState( { text: '' })
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  }

  render() {
    const { showClear, clearUsers } = this.props

    return (
      <>
        <Form onSubmit={this.onSubmit}>
          <Form.Group as={Row} controlId='searchForm'>
            <Col sm={12}>
              <Form.Control
                type='text' 
                name='text'
                placeholder='Search user(s)...' 
                style={{ block: true }} 
                value={this.state.text} 
                onChange={this.onChange}
              ></Form.Control>
            </Col>
            <Col sm={12} className='mt-2'>
            <Button variant='primary' type='submit' block>Search</Button>
            </Col>
          </Form.Group>
        </Form>
        {showClear && <Button variant='danger' onClick={clearUsers} block>Clear</Button>}
      </>
    )
  }
}

export default Search