import React from 'react'
import Layout from "../components/layout"
import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import DirectionsIcon from '@material-ui/icons/Directions';
import LanguageIcon from '@material-ui/icons/Language';

const Shelter = () => {
    return (
        <Layout pageTitle="SHELTER">
            <div className="location-wrapper -mb-5">
                <ul className="flex items-baseline">
                    <li className="flex-grow pr-4">
                        <a href="https://bearescuer.org" alt="City Rescue Mission website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">City Rescue Mission</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                                <a href="tel:5174850145" alt="call" target="_blank" rel="noreferrer">
                                    <CallIcon />
                                </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="directions">
                                <a href="https://goo.gl/maps/BkwfojRACQ7NWCGJA" alt="map directions" target="_blank" rel="noreferrer">
                                    <DirectionsIcon />
                                </a>
                        </IconButton>
                        </li>
                    <li>
                        <IconButton aria-label="website">
                            <a href="https://bearescuer.org" alt="City Rescue Mission website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper -mb-5">
                <ul className="flex items-baseline">
                    <li className="flex-grow pr-4">
                        <a href="https://www.adventhouse.com/?q=day-shelter-and-food" alt="Advent House Day Shelter website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Advent House Day Shelter (weekends only)</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                                <a href="tel:5174854722" alt="call" target="_blank" rel="noreferrer">
                                    <CallIcon />
                                </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="directions">
                                <a href="https://goo.gl/maps/nMFWV6SzXYVjWgN88" alt="map directions" target="_blank" rel="noreferrer">
                                    <DirectionsIcon />
                                </a>
                        </IconButton>
                        </li>
                    <li>
                        <IconButton aria-label="website">
                            <a href="https://www.adventhouse.com/?q=day-shelter-and-food" alt="Advent House Day Shelter website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper -mb-5">
                <ul className="flex items-baseline">
                    <li className="flex-grow pr-4">
                        <a href="https://holycrossservices.org/programs/homeless-services/" alt="
New Hope Community Center of Holy Cross Services website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">
New Hope Community Center of Holy Cross Services</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                                <a href="tel:5174844414" alt="call" target="_blank" rel="noreferrer">
                                    <CallIcon />
                                </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="directions">
                                <a href="https://goo.gl/maps/n3myu927AxAvJcQh9" alt="map directions" target="_blank" rel="noreferrer">
                                    <DirectionsIcon />
                                </a>
                        </IconButton>
                        </li>
                    <li>
                        <IconButton aria-label="website">
                            <a href="https://holycrossservices.org/programs/homeless-services/" alt="New Hope Community Center of Holy Cross Services website link website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper mb-4">
                <ul className="flex items-baseline">
                <li className="flex-grow">
                    <a
                    href="https://www.eveinc.org/"
                    alt="End Violent Encounters (EVE) website link"
                    target="_blank" rel="noreferrer"
                    className="text-base sm:text-sm"
                    >
                    End Violent Encounters (EVE) Domestic Violence Emergency Shelter (women and children only)
                    </a>
                </li>
                <li>
                    <IconButton aria-label="Call">
                    <a href="tel:5173725572" alt="call" target="_blank" rel="noreferrer">
                        <CallIcon />
                    </a>
                    </IconButton>
                </li>
                <li className="pl-11">
                    <IconButton aria-label="Website">
                    <a
                        href="https://www.eveinc.org/"
                        alt="End Violent Encounters website link"
                        target="_blank" rel="noreferrer"
                    >
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