import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Link from 'gatsby-link'
import Layout from '../components/Layout'
import HeaderHome from '../components/headerHome'
import Button from '@material-ui/core/Button'

const IndexPage = () => {
  return (
    <Layout>
      <HeaderHome />
      <div>
        <div>
          <div>
            <div>
              <Link to="/health">
                <Button variant="contained" color="secondary">               
                  <StaticImage src="../images/medical_services_white_24dp.svg" 
                    width={40}
                    alt="health icon"
                    placeholder="tracedSVG"
                    quality="40" />               
                </Button>
              </Link>
            </div>
            <div>Health</div>
          </div>
          <hr></hr>

          <div>
            <div>
              <Link to="/safety">
                <Button variant="contained" color="secondary">               
                  <StaticImage src="../images/security_white_24dp.svg" 
                    width={40}
                    alt="safety icon"
                    placeholder="tracedSVG"
                    quality="40" />               
                </Button>
              </Link>
            </div>
            <div>Safety</div>
          </div>
        </div>
        <hr></hr>

        <div>
          <div>
            <div>
              <Link to="/food">
                <Button variant="contained" color="secondary">               
                  <StaticImage src="../images/food_bank_white_24dp.svg" 
                    width={40}
                    alt="food icon"
                    placeholder="tracedSVG"
                    quality="40" />               
                </Button>
              </Link>
            </div>
            <div>Food</div>
          </div>
          <hr></hr>

          <div>
            <div>
              <Link to="/shelter">
                <Button variant="contained" color="secondary">               
                  <StaticImage src="../images/night_shelter_white_24dp.svg" 
                    width={40}
                    alt="shelter icon"
                    placeholder="tracedSVG"
                    quality="40" />               
                </Button>
              </Link>
            </div>
            <div>Shelter</div>
          </div>
          <hr></hr>

        </div>
      </div>
    </Layout>
  )
}

export default IndexPage