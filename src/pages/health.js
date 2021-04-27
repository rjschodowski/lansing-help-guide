import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import DirectionsIcon from '@material-ui/icons/Directions';

const Health = () => {
    return (
        <Layout>
            <h1>Health</h1>
            <h2>Hospitals</h2>
            <ul>
                <li>
                    <IconButton aria-label="Call">
                        <a href="tel:5173719500" alt="call" target="_blank">
                            <CallIcon />Call
                        </a>
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                        <Link to="https://goo.gl/maps/DBHUJ9jPWNPYEoTFA" alt="map directions" target="_blank">
                            <DirectionsIcon />Directions
                        </Link>
                    </IconButton>
                </li>
                <li>
                    <a href="https://www.sparrow.org/our-hospitals-and-services/sparrow-hospitals/sparrow-hospital" alt="Sparrow Hospital website link" target="_blank">Website</a>
                </li>
                <li>
                    <a href="https://www.sparrow.org/our-hospitals-and-services/sparrow-hospitals/sparrow-hospital" alt="Sparrow Hospital website link" target="_blank">Sparrow Hospital</a>
                </li>
           </ul>
           <h2>Medical Clinics</h2>
           <ul>
               <li>
                   <a href="tel:5178875922">Call</a>
               </li>
               <li>
                   <a href="https://goo.gl/maps/MLDaRQ9nnyWvwPzG7" alt="map directions" target="_blank">Directions</a>
               </li>
               <li>
                   <a href="https://carefreemedical.com/" alt="Carefree Medical website link" target="_blank">Website</a>
               </li>
                   <a href="https://carefreemedical.com/" alt="Carefree Medical website link" target="_blank">Carefree Medical</a>
           </ul>
           <h2>COVID-19</h2>
            <ul>
                <li>
                    <a href="https://www.solvhealth.com/search?cobrandedSrpLocation=MI" alt="COVID-19 testing search for locations website link" target="_blank">Testing Site Locator</a>
                </li>
                <li>
                    <a href="https://vaccinefinder.org/search/" alt="COVID-19 vaccine finder" target="_blank">Vaccine Finder</a>
                </li>
                <li>
                    <a href="https://www.michigan.gov/" alt="Michigan.gov COVID-19 Information Website" target="_blank">Michigan.gov COVID-19 Information Website</a>
                </li>
            </ul>
            <h2>Dental</h2>
            <ul>
                <li>
                    <a href="tel:5172725053">Call</a>
                </li>
                <li>
                    <a href="https://goo.gl/maps/GGGcXF6xbKG2gVEn8" alt="map directions" target="_blank">Directions</a>
                </li>
                <li>
                    <a href="https://carefreemedical.com/dental/" alt="Carefree Dental website link" target="_blank">Website</a>
                </li>
                <li>
                    <a href="https://carefreemedical.com/dental/" alt="Carefree Dental website link" target="_blank">Carefree Dental</a>
                </li>
            </ul>
            <h2>Mental Health</h2>          
        </Layout>
    )
}

export default Health