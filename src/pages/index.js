import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Link from 'gatsby-link'
import HeaderHome from '../components/headerHome'
import Button from '@material-ui/core/Button'

const IndexPage = () => {
  return (
    <div>
      <HeaderHome />
      <Button >
        Hello World
      </Button>
      <nav>
        <button>
          <Link to="/food">
            <StaticImage src="../images/food_bank-24px.svg" 
                   width={40}
                   alt="food icon"
                   placeholder="tracedSVG"
                   quality="40" />
            Food
          </Link>
        </button>
        <button>
          <Link to="/health">
            <StaticImage src="../images/health_and_safety-24px.svg" 
                   width={40}
                   alt="health icon"
                   placeholder="tracedSVG"
                   quality="40" />
            Health
          </Link>
        </button>
        <button>
          <Link to="/shelter">
            <StaticImage src="../images/night_shelter-24px.svg" 
                   width={40}
                   alt="shelter icon"
                   placeholder="tracedSVG"
                   quality="40" />
            Shelter
          </Link>
        </button>
        <button>
          <Link to="/safety">
            <StaticImage src="../images/shield-24px.svg" 
                   width={40}
                   alt="food icon"
                   placeholder="tracedSVG"
                   quality="40" />
            Safety
          </Link>
        </button>
      </nav>
    </div>
  )
}

export default IndexPage