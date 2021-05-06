import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Link from 'gatsby-link'
import HeaderHome from '../components/headerHome'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
  btn: {
    width: '3.25rem',
    height: '3.25rem',
    borderRadius: '50%',
  }
})

const IndexPage = () => {
  const classes = useStyles()

  return (
    <div>
      <HeaderHome />
      <div>
        <div>
          <div>
            <div>
              <Link to="/health">
                <Button className={classes.btn} variant="contained" color="secondary">               
                  <StaticImage src="../images/medical_services_white_24dp.svg" 
                    width={40}
                    alt="health icon"
                    placeholder="tracedSVG"
                    quality="40" />               
                </Button>
              </Link>
            </div>
            <div className="text-gray-600">Health</div>
          </div>
          <hr className="bg-gray-200"></hr>

          <div>
            <div>
              <Link to="/safety">
                <Button className={classes.btn} variant="contained" color="secondary">               
                  <StaticImage src="../images/security_white_24dp.svg" 
                    width={40}
                    alt="safety icon"
                    placeholder="tracedSVG"
                    quality="40" />               
                </Button>
              </Link>
            </div>
            <div className="text-gray-600">Safety</div>
          </div>
        </div>
        <hr className="bg-gray-200"></hr>

        <div>
          <div>
            <div>
              <Link to="/food">
                <Button className={classes.btn} variant="contained" color="secondary">               
                  <StaticImage src="../images/food_bank_white_24dp.svg" 
                    width={40}
                    alt="food icon"
                    placeholder="tracedSVG"
                    quality="40" />               
                </Button>
              </Link>
            </div>
            <div className="text-gray-600">Food</div>
          </div>
          <hr className="bg-gray-200"></hr>

          <div>
            <div>
              <Link to="/shelter">
                <Button className={classes.btn} variant="contained" color="secondary">               
                  <StaticImage src="../images/night_shelter_white_24dp.svg" 
                    width={40}
                    alt="shelter icon"
                    placeholder="tracedSVG"
                    quality="40" />               
                </Button>
              </Link>
            </div>
            <div className="text-gray-600">Shelter</div>
          </div>
          <hr className="bg-gray-200"></hr>

        </div>
      </div>
    </div>
  )
}

export default IndexPage