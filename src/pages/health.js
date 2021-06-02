import React from 'react'
import Layout from '../components/layout'
import IconButton from '@material-ui/core/IconButton'
import CallIcon from '@material-ui/icons/Call'
import DirectionsIcon from '@material-ui/icons/Directions'
import LanguageIcon from '@material-ui/icons/Language'
import { makeStyles } from '@material-ui/core/styles'
import Seo from '../components/seo'

const useStyles = makeStyles((theme) => ({
    root: {
        paddingRight: 0,
    },
}));


export default function HealthPage() {
    const classes = useStyles();
    return (
        <Layout pageTitle="HEALTH">
            <Seo title="Lansing Help Guide - Health" />
            <h4 className="text-blue-500 mb-4">Hospitals</h4>
            <div className="location-wrapper -mb-5">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://www.sparrow.org/our-hospitals-and-services/sparrow-hospitals/sparrow-hospital" alt="Sparrow Hospital website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Sparrow Hospital</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5173641000" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li className="lg:mx-8">
                        <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/6qW9rouF4SS9QD9R9" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className={classes.root} aria-label="website">
                            <a href="https://www.sparrow.org/our-hospitals-and-services/sparrow-hospitals/sparrow-hospital" alt="Sparrow Hospital website link" target="_blank" rel="noreferrer">
                            <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper mb-4">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://www.mclaren.org/lansing/mclaren-greater-lansing-home" alt="Sparrow Hospital website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">McLaren Greater Lansing Hospital</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5179756000" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li className="lg:mx-8">
                        <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/XG6nho3HYy1RHdHL8" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className={classes.root} aria-label="website">
                            <a href="https://www.mclaren.org/lansing/mclaren-greater-lansing-home" alt="McLaren Greater Lansing Hospital website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
           </div>

           <h4 className="text-blue-500 mb-4">Medical Clinics</h4>
           <div className="location-wrapper -mb-5">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://carefreemedical.com/" alt="Carefree Medical website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Carefree Medical</a>
                    </li>
                <li>
                    <IconButton aria-label="Call">
                            <a href="tel:5178875922" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                    </IconButton>
                </li>
                <li className="lg:mx-8">
                    <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/MLDaRQ9nnyWvwPzG7" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                    </IconButton>
                    </li>
                <li>
                    <IconButton className={classes.root} aria-label="Website">
                            <a href="https://carefreemedical.com/" alt="Carefree Medical website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper -mb-5">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://hd.ingham.org/seekingcare/communityhealthcenters/LocationsHours/WillowHealthCenter.aspx" alt="Willow Health Center website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Willow Health Center</a>
                    </li>
                <li>
                    <IconButton aria-label="Call">
                            <a href="tel:5177023500" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                    </IconButton>
                </li>
                <li className="lg:mx-8">
                    <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/vGwHDpmsFQUJEiKD7" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                    </IconButton>
                    </li>
                <li>
                    <IconButton className={classes.root} aria-label="Website">
                            <a href="https://hd.ingham.org/seekingcare/communityhealthcenters/LocationsHours/WillowHealthCenter.aspx" alt="Willow Health Center website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>
            
            <div className="location-wrapper mb-4">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://www.cristoreycommunity.org/family-health-center/health-services/health-center/" alt="Cristo Rey Family Health Center website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Cristo Rey Family Health Center</a>
                    </li>
                <li>
                    <IconButton aria-label="Call">
                            <a href="tel:5173711700" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                    </IconButton>
                </li>
                <li className="lg:mx-8">
                    <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/856EQx1a7gwzn8gk9" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                    </IconButton>
                    </li>
                <li>
                    <IconButton className={classes.root} aria-label="Website">
                            <a href="https://www.cristoreycommunity.org/family-health-center/health-services/health-center/" alt="Cristo Rey Family Health Center website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

           <h4 className="text-blue-500 mb-4">COVID-19</h4>
           <div className="location-wrapper -mb-5">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://www.solvhealth.com/search?cobrandedSrpLocation=MI" alt="COVID-19 testing search for locations website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Testing Site Locator</a>
                    </li>
                    <li>
                        <IconButton className={classes.root} aria-label="Website">
                            <a href="https://www.solvhealth.com/search?cobrandedSrpLocation=MI" alt="COVID-19 testing search for locations website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper -mb-5">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://vaccinefinder.org/search/" alt="COVID-19 vaccine finder" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Vaccine Finder</a>
                    </li>
                    <li>
                        <IconButton className={classes.root} aria-label="Website">
                            <a href="https://vaccinefinder.org/search/" alt="COVID-19 vaccine finder" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>
            
            <div className="location-wrapper mb-4">
                <ul className="flex items-baseline">
                    <li className="flex-grow pr-8">
                        <a href="https://www.michigan.gov/" alt="Michigan.gov COVID-19 Information Website" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Michigan.gov COVID-19<br></br>Information Website</a>
                    </li>
                    <li>
                        <IconButton className={classes.root} aria-label="Website">
                            <a href="https://www.michigan.gov/" alt="Michigan.gov COVID-19 Information Website" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <h4 className="text-blue-500 mb-4">Mental Health and Substance Abuse</h4>
            <div className="location-wrapper -mb-5">   
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="http://www.ceicmh.org/services/cs" alt="Community Mental Health 24-Hour Crisis Services website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Community Mental Health 24-Hour Crisis Services</a>
                    </li>
                    <li>
                        <IconButton className={classes.root} aria-label="Call">
                            <a href="tel:5173468460" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li className="lg:mx-8">
                    <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/Nji9RRuAzsKZMWXd7" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className={classes.root} aria-label="Website">
                            <a href="http://www.ceicmh.org/services/cs" alt="Community Mental Health 24-Hour Crisis Services website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper -mb-5">    
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="http://www.ceicmh.org/services/amhs" alt="Community Mental Health Adult Mental Health Services" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Community Mental Health Adult Mental Health Services</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5173468318" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li className="lg:mx-8">
                    <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/Nji9RRuAzsKZMWXd7" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className={classes.root} aria-label="Website">
                            <a href="http://www.ceicmh.org/services/amhs" alt="Community Mental Health Adult Mental Health Services" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper mb-4">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://www.cristoreycommunity.org/family-health-center/health-services/6658-2/" alt="Cristo Rey Community Center Counseling and Substance Abuse Programs website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Cristo Rey Community Center Counseling and <br></br>Substance Abuse Programs</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                                <a href="tel:5173724700" alt="call" target="_blank" rel="noreferrer">
                                    <CallIcon />
                                </a>
                        </IconButton>
                    </li>
                    <li className="lg:mx-8">
                        <IconButton aria-label="Directions">
                                <a href="https://goo.gl/maps/dzzcGKqrr9G51fd37" alt="map directions" target="_blank" rel="noreferrer">
                                    <DirectionsIcon />
                                </a>
                        </IconButton>
                        </li>
                    <li>
                        <IconButton className={classes.root} aria-label="Website">
                                <a href="https://www.cristoreycommunity.org/family-health-center/health-services/6658-2/" alt="Cristo Rey Community Center Counseling and Substance Abuse Programs website link" target="_blank" rel="noreferrer">
                                    <LanguageIcon />
                                </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <h4 className="text-blue-500 mb-4">Dental</h4>
            <div className="location-wrapper -mb-5">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://carefreemedical.com/dental/" alt="Carefree Dental website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Carefree Dental</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5172725053" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li className="lg:mx-8">
                        <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/GGGcXF6xbKG2gVEn8" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className={classes.root} aria-label="Website">
                            <a href="https://carefreemedical.com/dental/" alt="Carefree Dental website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper -mb-5">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://www.facebook.com/CFD.Lansing" alt="Cedar Family Dental Facebook website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Cedar Family Dental</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5173942226" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li className="lg:mx-8">
                        <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/F44U7eV6ZseEGEsb6" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className={classes.root} aria-label="Website">
                            <a href="https://www.facebook.com/CFD.Lansing" alt="Cedar Family Dental Facebook website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

             <div className="location-wrapper mb-4">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://destinydentalcare.com/" alt="Destiny Dental website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Destiny Dental</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5178820800" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li className="lg:mx-8">
                        <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/dsVAypUVB9mty5xt7" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className={classes.root} aria-label="Website">
                            <a href="https://destinydentalcare.com/" alt="Destiny Dental website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>     
        </Layout>
    )
}
