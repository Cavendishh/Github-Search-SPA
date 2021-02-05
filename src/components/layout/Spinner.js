import React from 'react'
import spinner from '../../assets/images/spinner.gif'
import Image from 'react-bootstrap/Image'

export const Spinner = () => <>
  <Image src={spinner} alt='Loading API data' style={{ width: '175px', display: 'block', margin: 'auto'}} />
</>

export default Spinner