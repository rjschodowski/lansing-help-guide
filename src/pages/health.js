import React from 'react'
import Layout from '../components/Layout'
import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import DirectionsIcon from '@material-ui/icons/Directions';
import LanguageIcon from '@material-ui/icons/Language';

const Health = () => {
    return (
        <Layout>
            <h4 className="ml-4 mr-4 mb-2">Hospitals</h4>
            <div className="location-wrapper -mb-10">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://www.sparrow.org/our-hospitals-and-services/sparrow-hospitals/sparrow-hospital" alt="Sparrow Hospital website link" target="_blank" className="text-sm">Sparrow Hospital</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5173641000" className="text-xs" alt="call" target="_blank">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/DBHUJ9jPWNPYEoTFA" className="text-xs" alt="map directions" target="_blank">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="website">
                            <a href="https://www.sparrow.org/our-hospitals-and-services/sparrow-hospitals/sparrow-hospital" className="text-xs" alt="Sparrow Hospital website link" target="_blank">
                            <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper -mb-4">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://www.mclaren.org/lansing/mclaren-greater-lansing-home" alt="Sparrow Hospital website link" target="_blank" className="text-sm">McLaren Greater Lansing Hospital</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5179756000" alt="call" target="_blank">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/XG6nho3HYy1RHdHL8" alt="map directions" target="_blank">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="website">
                            <a href="https://www.mclaren.org/lansing/mclaren-greater-lansing-home" alt="McLaren Greater Lansing Hospital website link" target="_blank">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
           </div>

           <h4 className="ml-4 mr-4 mb-2">Medical Clinics</h4>
           <div className="location-wrapper -mb-10">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://carefreemedical.com/" alt="Carefree Medical website link" target="_blank" className="text-sm">Carefree Medical</a>
                    </li>
                <li>
                    <IconButton aria-label="Call">
                            <a href="tel:5178875922" alt="call" target="_blank">
                                <CallIcon />
                            </a>
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                            <a href="https://goo.gl/maps/MLDaRQ9nnyWvwPzG7" alt="map directions" target="_blank">
                                <DirectionsIcon />
                            </a>
                    </IconButton>
                    </li>
                <li>
                    <IconButton>
                            <a href="https://carefreemedical.com/" alt="Carefree Medical website link" target="_blank">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

           <h4 className="ml-4 mr-4 mt-8 mb-2">COVID-19</h4>
           <div className="location-wrapper -mb-10">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://www.solvhealth.com/search?cobrandedSrpLocation=MI" alt="COVID-19 testing search for locations website link" target="_blank" className="text-sm">Testing Site Locator</a>
                    </li>
                    <li>
                        <IconButton>
                            <a href="https://www.solvhealth.com/search?cobrandedSrpLocation=MI" alt="COVID-19 testing search for locations website link" target="_blank">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper -mb-10">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://vaccinefinder.org/search/" alt="COVID-19 vaccine finder" target="_blank" className="text-sm">Vaccine Finder</a>
                    </li>
                    <li>
                        <IconButton>
                            <a href="https://vaccinefinder.org/search/" alt="COVID-19 vaccine finder" target="_blank">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>
            
            <div className="location-wrapper -mb-4">
                <ul className="flex items-baseline">
                    <li className="flex-grow pr-8">
                        <a href="https://www.michigan.gov/" alt="Michigan.gov COVID-19 Information Website" target="_blank" className="text-sm">Michigan.gov COVID-19 Information Website</a>
                    </li>
                    <li>
                        <IconButton>
                            <a href="https://www.michigan.gov/" alt="Michigan.gov COVID-19 Information Website" target="_blank">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <h4 className="ml-4 mr-4 mb-2">Mental Health</h4>
            <div className="location-wrapper -mb-10">   
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="http://www.ceicmh.org/services/cs" alt="Community Mental Health 24-Hour Crisis Services website link" target="_blank" className="text-sm">Community Mental Health 24-Hour Crisis Services</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5173468460" alt="call" target="_blank">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                    <IconButton>
                            <a href="https://goo.gl/maps/Nji9RRuAzsKZMWXd7" alt="map directions" target="_blank">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <a href="http://www.ceicmh.org/services/cs" alt="Community Mental Health 24-Hour Crisis Services website link" target="_blank">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper -mb-4">    
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="http://www.ceicmh.org/services/amhs" alt="Community Mental Health Adult Mental Health Services" target="_blank" className="text-sm">Community Mental Health Adult Mental Health Services</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5173468318" alt="call" target="_blank">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                    <IconButton>
                            <a href="https://goo.gl/maps/Nji9RRuAzsKZMWXd7" alt="map directions" target="_blank">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <a href="http://www.ceicmh.org/services/amhs" alt="Community Mental Health Adult Mental Health Services" target="_blank">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <h4 className="ml-4 mr-4 mb-2">Dental</h4>
            <div className="location-wrapper -mb-10">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://carefreemedical.com/dental/" alt="Carefree Dental website link" target="_blank" className="text-sm">Carefree Dental</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5172725053" alt="call" target="_blank">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <a href="https://goo.gl/maps/GGGcXF6xbKG2gVEn8" alt="map directions" target="_blank">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <a href="https://carefreemedical.com/dental/" alt="Carefree Dental website link" target="_blank">
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