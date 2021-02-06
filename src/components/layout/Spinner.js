import React from 'react'
import SPINNER from 'react-bootstrap/Spinner'

export const Spinner = () =>
<SPINNER animation="border" role="status" style={{ margin: 'auto' }} className='mt-5'>
  <span className="sr-only">Loading...</span>
</SPINNER>

export default Spinner