import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

const RepoItem = ({ repo }) => {
  return (
    <Card>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </Card>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem