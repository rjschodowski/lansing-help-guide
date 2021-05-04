import React from 'react'
import Layout from "../components/layout"
import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import DirectionsIcon from '@material-ui/icons/Directions';
import LanguageIcon from '@material-ui/icons/Language';
import SmsIcon from '@material-ui/icons/Sms';

const Safety = () => {
    return (
        <Layout>
            <ul>
                <li>
                    <a href="https://suicidepreventionlifeline.org/">National Suicide Prevention Lifeline</a>
                </li>
                <li>
                    <IconButton aria-label="Call">
                        <a href="tel:18002738255" alt="call" target="_blank">
                            <CallIcon />Call
                        </a>
                   </IconButton>
                </li>
                <li>
                    <IconButton aria-label="Online chat">
                        <a href="https://suicidepreventionlifeline.org/chat/" alt="online chat" target="_blank">
                            <SmsIcon />Online Chat
                        </a>
                    </IconButton>
                </li>
                <li>
                    <IconButton aria-label="website">
                        <a href="https://suicidepreventionlifeline.org/" alt="National Suicide Prevention website link" target="_blank">
                            <LanguageIcon />Website
                        </a>
                    </IconButton>
                </li>
                
                <li>
                    <a href="https://www.eveinc.org/" alt="COVID-19 testing search for locations website link" target="_blank">End Violent Encounters (EVE) 24 Hour Crisis Line</a>
                </li>
                <li>
                    <IconButton aria-label="Call">
                        <a href="tel:5173725572" alt="call" target="_blank">
                            <CallIcon />Call
                        </a>
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                        <a href="https://www.eveinc.org/" alt="End Violent Encounters website link" target="_blank">
                            <LanguageIcon />Website
                        </a>
                    </IconButton>
                </li>
            </ul>
        </Layout>
    )
}

export default Safety