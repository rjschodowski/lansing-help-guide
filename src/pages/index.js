import React from 'react'
import Link from 'gatsby-link'
import HeaderHome from '../components/headerHome'

const IndexPage = () => {
  return (
    <div>
      <HeaderHome />
      <nav>
        <ul>
          <li><Link to="/food">Food</Link></li>
          <li><Link to="/health">Health</Link></li>
          <li><Link to="/shelter">Shelter</Link></li>
          <li><Link to="/safety">Safety</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default IndexPage