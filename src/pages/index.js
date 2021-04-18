import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/food">Food</Link></li>
        <li><Link to="/medical">Medical</Link></li>
        <li><Link to="/shelter">Shelter</Link></li>
        <li><Link to="/safety">Safety</Link></li>
      </ul>
    </nav>
  )
}

export default IndexPage