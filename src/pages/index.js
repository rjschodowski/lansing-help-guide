import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Link from 'gatsby-link'
import HeaderHome from '../components/headerHome'
import Footer from '../components/footer'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import SEO from '../components/seo'
import NavButton from '../components/navbutton'

const useStyles = makeStyles({
  btn: {
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '50%',
  },

  btn911: {
    width: '5rem',
    height: '2.5rem',
    fontWeight: '900',
    fontSize: '1.5rem',
    borderWidth: 1.5,
  },
});

const IndexPage = () => {
  const classes = useStyles();

  return (
    <div>
      <SEO title="Lansing Help Guide" />
      <HeaderHome />
      <div className="my-12 mx-12 flex flex-col">
        <div className="sm:flex sm:justify-center sm:mt-16 sm:mb-16">
          <NavButton categoryName="Health" style="flex flex-col" />
          

          <div className="sm:ml-32">
            <div>
              <Link to="/safety">
                <Button className={classes.btn} variant="contained" color="primary">               
                  <StaticImage src="../images/security_white_24dp.svg" 
                    width={40}
                    alt="safety icon"
                    placeholder="tracedSVG"
                    quality="40" />               
                </Button>
              </Link>
            </div>
            <div className="text-gray-600 font-bold px-1 pt-1 sm:text-center">Safety</div>
          </div>
          <hr className="bg-gray-200 mt-4"></hr>
        </div>

        <div className="sm:flex sm:justify-center">
          <div>
            <div>
              <Link to="/food">
                <Button className={classes.btn} variant="contained" color="primary">               
                  <StaticImage src="../images/food_bank_white_24dp.svg" 
                    width={40}
                    alt="food icon"
                    placeholder="tracedSVG"
                    quality="40" />               
                </Button>
              </Link>
            </div>
            <div className="text-gray-600 font-bold px-2 pt-1 sm:text-center">Food</div>
          </div>
          <hr className="bg-gray-200 mt-4"></hr>

          <div className="sm:ml-32">
            <div>
              <Link to="/shelter">
                <Button className={classes.btn} variant="contained" color="primary">               
                  <StaticImage src="../images/night_shelter_white_24dp.svg" 
                    width={40}
                    alt="shelter icon"
                    placeholder="tracedSVG"
                    quality="40" />               
                </Button>
              </Link>
            </div>
            <div className="text-gray-600 font-bold pt-1 sm:text-center">Shelter</div>
          </div>
          <hr className="bg-gray-200 mt-4"></hr>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage