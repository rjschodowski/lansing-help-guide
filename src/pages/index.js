import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Link from 'gatsby-link'
import HeaderHome from '../components/headerHome'

const IndexPage = () => {
  return (
    <div>
      <HeaderHome />
      <nav>
        <ul>
          <li><Link to="/food"><StaticImage src="../images/food_bank-24px.svg" 
                   width={40}
                   alt="food icon"
                   placeholder="tracedSVG"
                   quality="40" />Food</Link></li>
          <li><Link to="/health">Health</Link></li>
          <li><Link to="/shelter">Shelter</Link></li>
          <li><Link to="/safety">Safety</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default IndexPage