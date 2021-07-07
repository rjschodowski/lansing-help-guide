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
        <div className={props.containerStyle}>
            <div>
              <Link to={props.categoryLink}>
                <Button className={classes.btn} variant="contained" color="primary">               
                  <StaticImage src="../images/medical_services_white_24dp.svg" 
                    width={40}
                    alt="health icon"
                    placeholder="tracedSVG"
                    quality="40" />               
                </Button>
              </Link>
            </div>
            <div className={props.nameStyle}>{props.categoryName}</div>
            <hr className={props.hrStyle}></hr>
          </div>
    )
  }

  export default NavButton