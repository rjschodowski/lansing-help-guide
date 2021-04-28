import React from 'react'
import Layout from "../components/layout"
import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import DirectionsIcon from '@material-ui/icons/Directions';
import LanguageIcon from '@material-ui/icons/Language';


const Shelter = () => {
    return (
        <Layout>
            <h1>Shelters</h1>
            <ul>
                <li>
                   <IconButton aria-label="Call">
                        <a href="tel:5174850145" alt="call" target="_blank">
                            <CallIcon />Call
                        </a>
                   </IconButton>
               </li>
               <li>
                   <IconButton>
                        <a href="https://goo.gl/maps/BkwfojRACQ7NWCGJA" alt="map directions" target="_blank">
                            <DirectionsIcon />Directions
                        </a>
                   </IconButton>
                </li>
               <li>
                   <IconButton>
                        <a href="https://bearescuer.org" alt="City Rescue Mission website link" target="_blank">
                            <LanguageIcon />Website
                        </a>
                    </IconButton>
                </li>
                <li>
                    <a href="https://bearescuer.org" alt="City Rescue Mission website link" target="_blank">City Rescue Mission</a>
                </li>
            </ul>
        </Layout>
    )
}

export default Shelter