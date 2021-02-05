import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export class Search extends Component {
  state = {
    text: ''
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })
  onSubmit = e => {
    e.preventDefault()
    this.props.searchUsers(this.state.text)
    this.setState( { text: '' })
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group as={Row} controlId='searchForm'>
          {/* <Form.Label column sm={2}>
            Search
          </Form.Label> */}
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
    )
  }
}

export default Search