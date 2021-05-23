import React from 'react'
import Layout from '../components/layout'
import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import DirectionsIcon from '@material-ui/icons/Directions';
import LanguageIcon from '@material-ui/icons/Language';

const Health = () => {
    return (
        <Layout pageTitle="HEALTH">
            <div className="flex justify-end mt-12">
                <div>
                    <p className="text-xs text-center">call</p>
                </div>
                <div>
                    <p className="text-xs text-center px-1.5">directions</p>
                </div>
                <div>
                    <p className="text-xs text-center pr-1">website</p>
                </div>
            </div>
            <h4 className="text-blue-500 ml-4 mr-4 mb-2">Hospitals</h4>
            <div className="location-wrapper -mb-10">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://www.sparrow.org/our-hospitals-and-services/sparrow-hospitals/sparrow-hospital" alt="Sparrow Hospital website link" target="_blank" rel="noreferrer" className="text-sm">Sparrow Hospital</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5173641000" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/DBHUJ9jPWNPYEoTFA" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="website">
                            <a href="https://www.sparrow.org/our-hospitals-and-services/sparrow-hospitals/sparrow-hospital" alt="Sparrow Hospital website link" target="_blank" rel="noreferrer">
                            <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper -mb-4">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://www.mclaren.org/lansing/mclaren-greater-lansing-home" alt="Sparrow Hospital website link" target="_blank" rel="noreferrer" className="text-sm">McLaren Greater Lansing Hospital</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5179756000" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/XG6nho3HYy1RHdHL8" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="website">
                            <a href="https://www.mclaren.org/lansing/mclaren-greater-lansing-home" alt="McLaren Greater Lansing Hospital website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
           </div>

           <h4 className="text-blue-500 ml-4 mr-4 mb-2">Medical Clinics</h4>
           <div className="location-wrapper -mb-10">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://carefreemedical.com/" alt="Carefree Medical website link" target="_blank" rel="noreferrer" className="text-sm">Carefree Medical</a>
                    </li>
                <li>
                    <IconButton aria-label="Call">
                            <a href="tel:5178875922" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                    </IconButton>
                </li>
                <li>
                    <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/MLDaRQ9nnyWvwPzG7" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                    </IconButton>
                    </li>
                <li>
                    <IconButton aria-label="Website">
                            <a href="https://carefreemedical.com/" alt="Carefree Medical website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>
            
            <div className="location-wrapper -mb-4">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://www.cristoreycommunity.org/family-health-center/health-services/health-center/" alt="Cristo Rey Family Health Center website link" target="_blank" rel="noreferrer" className="text-sm">Cristo Rey Family Health Center</a>
                    </li>
                <li>
                    <IconButton aria-label="Call">
                            <a href="tel:5173711700" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                    </IconButton>
                </li>
                <li>
                    <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/856EQx1a7gwzn8gk9" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                    </IconButton>
                    </li>
                <li>
                    <IconButton aria-label="Website">
                            <a href="https://www.cristoreycommunity.org/family-health-center/health-services/health-center/" alt="Cristo Rey Family Health Center website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

           <h4 className="text-blue-500 ml-4 mr-4 mb-2">COVID-19</h4>
           <div className="location-wrapper -mb-10">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://www.solvhealth.com/search?cobrandedSrpLocation=MI" alt="COVID-19 testing search for locations website link" target="_blank" rel="noreferrer" className="text-sm">Testing Site Locator</a>
                    </li>
                    <li>
                        <IconButton aria-label="Website">
                            <a href="https://www.solvhealth.com/search?cobrandedSrpLocation=MI" alt="COVID-19 testing search for locations website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper -mb-10">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://vaccinefinder.org/search/" alt="COVID-19 vaccine finder" target="_blank" rel="noreferrer" className="text-sm">Vaccine Finder</a>
                    </li>
                    <li>
                        <IconButton aria-label="Website">
                            <a href="https://vaccinefinder.org/search/" alt="COVID-19 vaccine finder" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>
            
            <div className="location-wrapper -mb-2">
                <ul className="flex items-baseline">
                    <li className="flex-grow pr-8">
                        <a href="https://www.michigan.gov/" alt="Michigan.gov COVID-19 Information Website" target="_blank" rel="noreferrer" className="text-sm">Michigan.gov COVID-19<br></br>Information Website</a>
                    </li>
                    <li>
                        <IconButton aria-label="Website">
                            <a href="https://www.michigan.gov/" alt="Michigan.gov COVID-19 Information Website" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <h4 className="text-blue-500 ml-4 mr-4 mb-2">Mental Health</h4>
            <div className="location-wrapper -mb-10">   
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="http://www.ceicmh.org/services/cs" alt="Community Mental Health 24-Hour Crisis Services website link" target="_blank" rel="noreferrer" className="text-sm">Community Mental Health 24-Hour Crisis Services</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5173468460" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                    <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/Nji9RRuAzsKZMWXd7" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="Website">
                            <a href="http://www.ceicmh.org/services/cs" alt="Community Mental Health 24-Hour Crisis Services website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper -mb-10">    
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="http://www.ceicmh.org/services/amhs" alt="Community Mental Health Adult Mental Health Services" target="_blank" rel="noreferrer" className="text-sm">Community Mental Health Adult Mental Health Services</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5173468318" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                    <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/Nji9RRuAzsKZMWXd7" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="Website">
                            <a href="http://www.ceicmh.org/services/amhs" alt="Community Mental Health Adult Mental Health Services" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper -mb-4">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://www.cristoreycommunity.org/family-health-center/health-services/6658-2/" alt="Cristo Rey Community Center Counseling and Substance Abuse Programs website link" target="_blank" rel="noreferrer" className="text-sm">Cristo Rey Community Center Counseling and <br></br>Substance Abuse Programs</a>
                    </li>
                <li>
                    <IconButton aria-label="Call">
                            <a href="tel:5173724700" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                    </IconButton>
                </li>
                <li>
                    <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/dzzcGKqrr9G51fd37" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                    </IconButton>
                    </li>
                <li>
                    <IconButton aria-label="Website">
                            <a href="https://www.cristoreycommunity.org/family-health-center/health-services/6658-2/" alt="Cristo Rey Community Center Counseling and Substance Abuse Programs website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <h4 className="text-blue-500 ml-4 mr-4 mb-2">Dental</h4>
            <div className="location-wrapper -mb-10">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://carefreemedical.com/dental/" alt="Carefree Dental website link" target="_blank" rel="noreferrer" className="text-sm">Carefree Dental</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5172725053" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/GGGcXF6xbKG2gVEn8" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="Website">
                            <a href="https://carefreemedical.com/dental/" alt="Carefree Dental website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

             <div className="location-wrapper -mb-4">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://destinydentalcare.com/" alt="Destiny Dental website link" target="_blank" rel="noreferrer" className="text-sm">Destiny Dental</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5178820800" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/dsVAypUVB9mty5xt7" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="Website">
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

export default Health