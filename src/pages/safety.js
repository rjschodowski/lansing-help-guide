import React from 'react'
import Layout from "../components/layout"
import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import DirectionsIcon from '@material-ui/icons/Directions';
import LanguageIcon from '@material-ui/icons/Language';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';

const Safety = () => {
    return (
        <Layout>
            <h1>Safety</h1>
            <ul>
                <li>
                    <IconButton aria-label="Call">
                        <a href="tel:5173725572" alt="call" target="_blank">
                            <CallIcon />Call
                        </a>
                    </IconButton>
                </li>
                <li>
                    <IconButton aria-label="Online chat">
                        <a href="https://www.resourceconnect.com/eve/chat" alt="online chat" target="_blank">
                            <QuestionAnswerOutlinedIcon />Online Chat
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
                <li>
                    <a href="https://www.eveinc.org/" alt="COVID-19 testing search for locations website link" target="_blank">End Violent Encounters (EVE) 24 Hour Crisis Line</a>
                </li>
            </ul>
        </Layout>
    )
}

 {/* <li>
                    <a href="tel:5173725572">Call</a>
                </li>
                <li>
                    <a href="" alt="End Violent Encounters website link" target="_blank">Website</a>
                </li>
                <li>
                <a href="https://www.eveinc.org/" alt="End Violent Encounters website link" target="_blank">End Violent Encounters</a>
                </li> */}

export default Safety