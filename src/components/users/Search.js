import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  const [text, setText] = useState('')

  const onChange = e => setText(e.target.value)
  
  const onSubmit = e => {
    e.preventDefault()
    if (text === '') {
      return alertContext.setAlert('Search field empty', 'danger')
    }
    githubContext.searchUsers(text)
    setText('')
  }

    return (
      <>
        <Form onSubmit={onSubmit}>
          <Form.Group as={Row} controlId='searchForm'>
            <Col sm={12}>
              <Form.Control
                type='text' 
                name='text'
                placeholder='Search user(s)...' 
                style={{ block: true }} 
                value={text} 
                onChange={onChange}
              ></Form.Control>
            </Col>
            <Col sm={12} className='mt-2'>
            <Button variant='primary' type='submit' block>Search</Button>
            </Col>
          </Form.Group>
        </Form>
        {githubContext.users.length > 0 && <Button variant='danger' onClick={githubContext.clearUsers} block>Clear</Button>}
      </>
    )
  }

export default Search