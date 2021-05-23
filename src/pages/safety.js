import React from "react"
import Layout from "../components/layout"
import IconButton from "@material-ui/core/IconButton"
import CallIcon from "@material-ui/icons/Call"
import DirectionsIcon from "@material-ui/icons/Directions"
import LanguageIcon from "@material-ui/icons/Language"
import SmsIcon from "@material-ui/icons/Sms"
import IconCategories from '../components/iconcategories'

const Safety = () => {
  return (
    <Layout pageTitle="SAFETY">
      <IconCategories />
      <h4 className="text-blue-500 ml-4 mr-4 mb-2">Mental Health Safety</h4>
      <div className="location-wrapper -mb-10">
        <ul className="flex items-baseline">
          <li className="flex-grow pr-8">
            <a
              href="https://suicidepreventionlifeline.org/"
              alt="National Suicide Prevention website link"
              target="_blank" rel="noreferrer"
              className="text-base sm:text-sm"
            >
              National Suicide Prevention Lifeline
            </a>
          </li>
          <li>
            <IconButton aria-label="Call">
              <a href="tel:18002738255" alt="call" target="_blank" rel="noreferrer">
                <CallIcon />
              </a>
            </IconButton>
          </li>
          <li>
            <IconButton aria-label="Online chat">
              <a
                href="https://suicidepreventionlifeline.org/chat/"
                alt="online chat"
                target="_blank" rel="noreferrer"
              >
                <SmsIcon />
              </a>
            </IconButton>
          </li>
          <li>
            <IconButton aria-label="website">
              <a
                href="https://suicidepreventionlifeline.org/"
                alt="National Suicide Prevention website link"
                target="_blank" rel="noreferrer"
              >
                <LanguageIcon />
              </a>
            </IconButton>
          </li>
        </ul>
      </div>
      
      <div className="location-wrapper -mb-4">   
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="http://www.ceicmh.org/services/cs" alt="Community Mental Health 24-Hour Crisis Services website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Community Mental Health 24-Hour Crisis Services</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5173468460" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                    <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/Nji9RRuAzsKZMWXd7" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton aria-label="Website">
                            <a href="http://www.ceicmh.org/services/cs" alt="Community Mental Health 24-Hour Crisis Services website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

      <h4 className="text-blue-500 ml-4 mr-4 mb-2">Domestic Violence Help</h4>
      <div className="location-wrapper -mb-10">
        <ul className="flex items-baseline">
          <li className="flex-grow">
            <a
              href="https://www.eveinc.org/"
              alt="End Violent Encounters (EVE) 24 Hour Crisis Line website link"
              target="_blank" rel="noreferrer"
              className="text-base sm:text-sm"
            >
              End Violent Encounters (EVE) 24 Hour Crisis Line
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

      <div className="location-wrapper -mb-4">
        <ul className="flex items-baseline">
          <li className="flex-grow">
            <a
              href="https://www.michigan.gov/voices4/"
              alt="Michigan Sexual Assault Hotline (VOICES4) website link"
              target="_blank" rel="noreferrer"
              className="text-base sm:text-sm"
            >
              Michigan Sexual Assault Hotline (VOICES4)
            </a>
          </li>
          <li>
            <IconButton aria-label="Call">
              <a href="tel:8558642374" alt="call" target="_blank" rel="noreferrer">
                <CallIcon />
              </a>
            </IconButton>
          </li>
          <li className="pl-11">
            <IconButton aria-label="Website">
              <a
                href="https://www.michigan.gov/voices4/"
                alt="Michigan Sexual Assault Hotline (VOICES4) website link"
                target="_blank" rel="noreferrer"
              >
                <LanguageIcon />
              </a>
            </IconButton>
          </li>
        </ul>
      </div>

      <h4 className="text-blue-500 ml-4 mr-4 mb-2">Human Trafficking Help</h4>
      <div className="location-wrapper -mb-10">
        <ul className="flex items-baseline">
          <li className="flex-grow">
            <a
              href="https://humantraffickinghotline.org/"
              alt="National Human Trafficking Hotline website link"
              target="_blank" rel="noreferrer"
              className="text-base sm:text-sm"
            >
              National Human Trafficking Hotline
            </a>
          </li>
          <li>
            <IconButton aria-label="Call">
              <a href="tel:18883737888" alt="call" target="_blank" rel="noreferrer">
                <CallIcon />
              </a>
            </IconButton>
          </li>
          <li>
            <IconButton aria-label="Online chat">
              <a
                href="https://humantraffickinghotline.org/chat"
                alt="online chat"
                target="_blank" rel="noreferrer"
              >
                <SmsIcon />
              </a>
            </IconButton>
          </li>
          <li>
            <IconButton aria-label="Website">
              <a
                href="https://humantraffickinghotline.org/"
                alt="National Human Trafficking Hotline website link"
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

export default Safety
