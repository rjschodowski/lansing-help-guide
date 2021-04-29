import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Link from 'gatsby-link'
import HeaderHome from '../components/headerHome'
import Button from '@material-ui/core/Button'

const IndexPage = () => {
  return (
    <div>
      <HeaderHome />
      <div>
        <div>
          <div>
            <div>
              <Link to="/shelter">
                <Button variant="contained">               
                  <StaticImage src="../images/night_shelter-24px.svg" 
                    width={40}
                    alt="shelter icon"
                    placeholder="tracedSVG"
                    quality="40" />               
                </Button>
              </Link>
            </div>
            <div>Shelter</div>
          </div>
          <div>
            <div>
              <Link to="/shelter">
                <Button variant="contained">               
                  <StaticImage src="../images/night_shelter-24px.svg" 
                    width={40}
                    alt="shelter icon"
                    placeholder="tracedSVG"
                    quality="40" />               
                </Button>
              </Link>
            </div>
            <div>Shelter</div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <Link to="/shelter">
                <Button variant="contained">               
                  <StaticImage src="../images/night_shelter-24px.svg" 
                    width={40}
                    alt="shelter icon"
                    placeholder="tracedSVG"
                    quality="40" />               
                </Button>
              </Link>
            </div>
            <div>Shelter</div>
          </div>
          <div>
            <div>
              <Link to="/shelter">
                <Button variant="contained">               
                  <StaticImage src="../images/night_shelter-24px.svg" 
                    width={40}
                    alt="shelter icon"
                    placeholder="tracedSVG"
                    quality="40" />               
                </Button>
              </Link>
            </div>
            <div>Shelter</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default IndexPage