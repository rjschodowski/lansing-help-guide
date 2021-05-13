import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Link from 'gatsby-link'
import HeaderHome from '../components/headerHome'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
  btn: {
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '50%',
  },
  btn911: {
    width: '5rem',
    height: '2.5rem',
    justifyContent: 'center',
    marginLeft: '20%',
    fontWeight: '900',
    borderWidth: 1.5,
  },
})

const IndexPage = () => {
  const classes = useStyles()

  return (
    <div>
      <HeaderHome />
      <div className="my-12 mx-4">
        <div className="flex items-baseline justify-start sm:flex sm:justify-center mb-12">
          <div>
            <p className="text-sm font-bold italic">If you have an immediate emergency, dial</p>
          </div>
          <div>
            <Button className={classes.btn911} size="medium" variant="contained" color="secondary"><a href="tel:911" alt="call" target="_blank">911</a>
            </Button>
        </div>
        </div>
        <div className="sm:flex sm:justify-center sm:mt-40 sm:mb-16">
          <div className="flex flex-col">
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
            <div className="text-gray-600 px-1 pt-1 sm:text-center">Health</div>
          </div>
          <hr className="bg-gray-200 mt-4"></hr>

          <div className="sm:ml-32">
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
            <div className="text-gray-600 px-1 pt-1 sm:text-center">Safety</div>
          </div>
          <hr className="bg-gray-200 mt-4"></hr>
        </div>

        <div className="sm:flex sm:justify-center">
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
            <div className="text-gray-600 px-2 pt-1 sm:text-center">Food</div>
          </div>
          <hr className="bg-gray-200 mt-4"></hr>

          <div className="sm:ml-32">
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
            <div className="text-gray-600 px-1 pt-1 sm:text-center">Shelter</div>
          </div>
          <hr className="bg-gray-200 mt-4"></hr>
        </div>
      </div>
    </div>
  )
}

export default IndexPage