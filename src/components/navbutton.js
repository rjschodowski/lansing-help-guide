import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Link from 'gatsby-link'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    btn: {
      width: '3.5rem',
      height: '3.5rem',
      borderRadius: '50%',
    },
  });

  const NavButton = (props) => {
    const classes = useStyles();

    return (
        <div className={props.style}>
            <div>
              <Link to="/health">
                <Button className={classes.btn} variant="contained" color="primary">               
                  <StaticImage src="../images/medical_services_white_24dp.svg" 
                    width={40}
                    alt="health icon"
                    placeholder="tracedSVG"
                    quality="40" />               
                </Button>
              </Link>
            </div>
            <div className="text-gray-600 font-bold px-1 pt-1 sm:text-center">{props.categoryName}</div>
            <hr className="bg-gray-200 mt-4"></hr>
          </div>
    )
  }

  export default NavButton