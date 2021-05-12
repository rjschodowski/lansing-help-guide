import React from 'react'
import Layout from '../components/Layout'
import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import DirectionsIcon from '@material-ui/icons/Directions';
import LanguageIcon from '@material-ui/icons/Language';

const Food = () => {
    return (
       <Layout>
           <div className="flex justify-end">
                <div>
                    <p className="text-xs text-center">call</p>
                </div>
                <div>
                    <p className="text-xs text-center px-2">directions</p>
                </div>
                <div>
                    <p className="text-xs text-center pr-1">website</p>
                </div>
            </div>
           <div className="location-wrapper -mb-10">
                <ul className="flex items-baseline">
                    <li  className="flex-grow pr-8">
                        <a href="https://www.lansingmi.gov/530/Mobile-Food-Pantry" alt="Mobile Food Pantry website link" target="_blank" className="text-sm">Mobile Food Pantry</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5173641000" alt="call" target="_blank">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li className="pl-10">
                        <IconButton aria-label="Website">
                            <a href="https://www.lansingmi.gov/530/Mobile-Food-Pantry" alt="Mobile Food Pantry website link" target="_blank">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>
       </Layout>
    )
}

export default Food