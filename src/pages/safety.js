import React from 'react'
import Layout from '../components/Layout'
import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import DirectionsIcon from '@material-ui/icons/Directions';
import LanguageIcon from '@material-ui/icons/Language';
import SmsIcon from '@material-ui/icons/Sms';

const Safety = () => {
    return (
        <Layout>
            <div className="location-wrapper -mb-10">
                <ul className="flex items-baseline">
                    <li className="flex-grow pr-8">
                        <a href="https://suicidepreventionlifeline.org/" alt="National Suicide Prevention website link" target="_blank" className="text-sm">National Suicide Prevention Lifeline</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:18002738255" alt="call" target="_blank">
                                <CallIcon />
                            </a>
                        </IconButton>
                        <p className="text-xs text-center">call</p>
                    </li>
                    <li>
                        <IconButton aria-label="Online chat">
                            <a href="https://suicidepreventionlifeline.org/chat/" alt="online chat" target="_blank">
                                <SmsIcon />
                            </a>
                        </IconButton>
                        <p className="text-xs text-center">chat</p>
                    </li>
                    <li>
                        <IconButton aria-label="website">
                            <a href="https://suicidepreventionlifeline.org/" alt="National Suicide Prevention website link" target="_blank">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                        <p className="text-xs text-center">website</p>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper">    
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://www.eveinc.org/" alt="COVID-19 testing search for locations website link" target="_blank" className="text-sm">End Violent Encounters (EVE) 24 Hour Crisis Line</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5173725572" alt="call" target="_blank">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li className="pl-12">
                        <IconButton>
                            <a href="https://www.eveinc.org/" alt="End Violent Encounters website link" target="_blank">
                                <LanguageIcon />    
                            </a>
                        </IconButton>
                    </li>
                </ul>
                </div>
        </Layout>
    )
}

export default Safety