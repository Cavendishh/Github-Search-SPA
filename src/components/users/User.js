import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Image from 'react-bootstrap/Image'

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
    this.props.getUserRepos(this.props.match.params.login)
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
  }

  render() {
    const {
      login,
      avatar_url,
      html_url,
      name,
      bio,
      blog,
      location,
      public_repos,
      public_gists,
      followers,
      following,
      hireable
    } = this.props.user

    const { loading, repos } = this.props

    if (loading) return <Spinner />

    return (
      <>
        <Link to='/'><Button variant='primary'>Back to results</Button></Link>
        Hireable: {''}
        {hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' />}

        <Row className='border'>
          <Col md={6} >
            <Card className='text-center'>
              <div>
                <Image src={avatar_url} roundedCircle style={{ width: '200px' }} alt='Github avatar' />
              </div>
              <Card.Title className='mt-4'>
                {name}
              </Card.Title>
              <Button variant='primary' href={html_url}>Go to Github profile</Button>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Title className='text-center'>
                Profile
              </Card.Title>
              <Card.Body>
                {bio && (
                <>
                  <h3>Bio</h3>
                  <p>
                    {bio}
                  </p>
                </>
                )}
                {!bio && (
                  <p>This user's bio is empty.</p>
                )}
                <ul>
                  {login && (<li>Username: {login}</li>)}
                  {location && (<li>Location: {location}</li>)}
                  {blog && (<li>Website: {blog}</li>)}
                </ul>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className='border text-center'>
            <Badge variant='primary'>Followers: {followers}</Badge>
            <Badge variant='secondary'>Following: {following}</Badge>
            <Badge variant='success'>Public Repositories: {public_repos}</Badge>
            <Badge variant='light'>Public Gists: {public_gists}</Badge>
          </Col>
        </Row>

        <Repos repos={repos} />
      </>
      
    )
  }
}

export default User
