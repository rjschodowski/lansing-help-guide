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
          <NavButton
            containerStyle="flex flex-col"
            categoryLink="/health" 
            categoryName="Health" 
            nameStyle="text-gray-600 font-bold px-1 pt-1 sm:text-center" 
            hrStyle="bg-gray-200 mt-4" 
            >
              <StaticImage src="../images/medical_services_white_24dp.svg" 
                    width={40}
                    alt="health icon"
                    placeholder="tracedSVG"
                    quality="40" />
            </NavButton>

            <NavButton
              containerStyle="sm:ml-32"
              categoryLink="/safety" 
              categoryName="Safety" 
              nameStyle="text-gray-600 font-bold px-1 pt-1 sm:text-center" 
              hrStyle="bg-gray-200 mt-4" 
            >
              <StaticImage src="../images/security_white_24dp.svg" 
                    width={40}
                    alt="safety icon"
                    placeholder="tracedSVG"
                    quality="40" />
            </NavButton>          
        </div>

        <div className="sm:flex sm:justify-center">
          <NavButton
            categoryLink="/food" 
            categoryName="Food" 
            nameStyle="text-gray-600 font-bold px-2 pt-1 sm:text-center" 
            hrStyle="bg-gray-200 mt-4" 
          >
              <StaticImage src="../images/food_bank_white_24dp.svg" 
                width={40}
                alt="food icon"
                placeholder="tracedSVG"
                quality="40" />
          </NavButton>         

          <NavButton
            containerStyle="sm:ml-32"
            categoryLink="/shelter" 
            categoryName="Shelter" 
            nameStyle="text-gray-600 font-bold pt-1 sm:text-center" 
            hrStyle="bg-gray-200 mt-4" 
          >
            <StaticImage src="../images/night_shelter_white_24dp.svg" 
              width={40}
              alt="shelter icon"
              placeholder="tracedSVG"
              quality="40" />
          </NavButton>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage