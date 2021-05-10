import React from 'react'
import Layout from "../components/Layout"
import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import DirectionsIcon from '@material-ui/icons/Directions';
import LanguageIcon from '@material-ui/icons/Language';


const Shelter = () => {
    return (
        <Layout>
            <div className="location-wrapper -mb-10">
                <ul className="flex items-baseline">
                    <li className="flex-grow pr-8">
                        <a href="https://bearescuer.org" alt="City Rescue Mission website link" target="_blank" className="text-sm">City Rescue Mission</a>
                    </li>
                    <li>
                    <IconButton aria-label="Call">
                            <a href="tel:5174850145" alt="call" target="_blank">
                                <CallIcon />
                            </a>
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                            <a href="https://goo.gl/maps/BkwfojRACQ7NWCGJA" alt="map directions" target="_blank">
                                <DirectionsIcon />
                            </a>
                    </IconButton>
                    </li>
                <li>
                    <IconButton>
                            <a href="https://bearescuer.org" alt="City Rescue Mission website link" target="_blank">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}

export default Shelter