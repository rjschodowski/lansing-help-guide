import React from 'react'
import Layout from "../components/Layout"
import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import DirectionsIcon from '@material-ui/icons/Directions';
import LanguageIcon from '@material-ui/icons/Language';


const Shelter = () => {
    return (
        <Layout>
            <div className="flex justify-end">
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
            <div className="location-wrapper -mb-10">
                <ul className="flex items-baseline">
                    <li className="flex-grow pr-4">
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
                        <IconButton aria-label="directions">
                                <a href="https://goo.gl/maps/BkwfojRACQ7NWCGJA" alt="map directions" target="_blank">
                                    <DirectionsIcon />
                                </a>
                        </IconButton>
                        </li>
                    <li>
                        <IconButton aria-label="website">
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