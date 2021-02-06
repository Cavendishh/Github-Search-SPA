import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

const RepoItem = ({ repo }) => {
  return (
    <Card>
      <span style={{ fontSize: '1.75rem' }}>
        <a href={repo.html_url}>{repo.name}</a>
        <span style={{ fontSize: '0.9rem' }} className='text-muted'> Last updated on {repo.updated_at.substring(0,10)}</span>
      </span>
    </Card>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem