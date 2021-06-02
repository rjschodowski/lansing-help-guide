import React from 'react'
import Layout from '../components/layout'
import IconButton from '@material-ui/core/IconButton'
import CallIcon from '@material-ui/icons/Call'
import DirectionsIcon from '@material-ui/icons/Directions'
import LanguageIcon from '@material-ui/icons/Language'
import { makeStyles } from '@material-ui/core/styles'
import Seo from '../components/seo'

const useStyles = makeStyles((theme) => ({
    root: {
        paddingRight: 0,
    },
  }));

export default function FoodPage() {
    const classes = useStyles();
    return (
       <Layout pageTitle="FOOD">
           <Seo title="Lansing Help Guide - Food" />
           <div className="location-wrapper -mb-5">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://www.lansingmi.gov/530/Mobile-Food-Pantry" alt="Mobile Food Pantry website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Mobile Food Pantry</a>
                    </li>
                    <li className="pr-12 lg:mr-16">
                        <IconButton aria-label="Call">
                            <a href="tel:5174834477" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className={classes.root} aria-label="Website">
                            <a href="https://www.lansingmi.gov/530/Mobile-Food-Pantry" alt="Mobile Food Pantry website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper -mb-5">
                <ul className="flex items-baseline">
                    <li className="flex-grow pr-4">
                        <a href="https://www.adventhouse.com/?q=day-shelter-and-food" alt="Advent House Day Shelter website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Advent House Day Shelter and Food</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                                <a href="tel:5174854722" alt="call" target="_blank" rel="noreferrer">
                                    <CallIcon />
                                </a>
                        </IconButton>
                    </li>
                    <li className="lg:mx-8">
                        <IconButton aria-label="directions">
                                <a href="https://goo.gl/maps/nMFWV6SzXYVjWgN88" alt="map directions" target="_blank" rel="noreferrer">
                                    <DirectionsIcon />
                                </a>
                        </IconButton>
                        </li>
                    <li>
                        <IconButton className={classes.root} aria-label="website">
                            <a href="https://www.adventhouse.com/?q=day-shelter-and-food" alt="Advent House Day Shelter website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper -mb-5">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://www.cristoreycommunity.org/family-health-center/6593-2/" alt="Cristo Rey Food Access Programs website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Cristo Rey Food Access Programs</a>
                    </li>
                    <li className="pr-1">
                        <IconButton aria-label="Call">
                            <a href="tel:5173724700" alt="call" target="_blank" rel="noreferrer">
                                    <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li className="lg:mx-8">
                        <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/dzzcGKqrr9G51fd37" alt="map directions" target="_blank" rel="noreferrer">
                                    <DirectionsIcon />
                            </a>
                        </IconButton>
                        </li>
                    <li>
                        <IconButton className={classes.root} aria-label="Website">
                            <a href="https://www.cristoreycommunity.org/family-health-center/6593-2/" alt="Cristo Rey Food Access Programs website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper -mb-5">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="https://greaterlansingfoodbank.org/" alt="Greater Lansing Food Bank website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Greater Lansing Food Bank</a>
                    </li>
                    <li className="pr-1">
                        <IconButton aria-label="Call">
                            <a href="tel:5178537800" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li className="lg:mx-8">
                        <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/RZiESf2BtrceJQQYA" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className={classes.root} aria-label="Website">
                            <a href="https://greaterlansingfoodbank.org/" alt="Greater Lansing Food Bank website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>

            <div className="location-wrapper mb-4">
                <ul className="flex items-baseline">
                    <li className="flex-grow">
                        <a href="http://www.oursaviorlansing.org/food-bank/" alt="Our Savior Food Bank website link" target="_blank" rel="noreferrer" className="text-base sm:text-sm">Our Savior Food Bank</a>
                    </li>
                    <li className="pr-1">
                        <IconButton aria-label="Call">
                            <a href="tel:5178827750" alt="call" target="_blank" rel="noreferrer">
                                <CallIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li className="lg:mx-8">
                        <IconButton aria-label="Directions">
                            <a href="https://goo.gl/maps/88FAQHL5JTtWYAWY8" alt="map directions" target="_blank" rel="noreferrer">
                                <DirectionsIcon />
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className={classes.root} aria-label="Website">
                            <a href="http://www.oursaviorlansing.org/food-bank/" alt="Our Savior Food Bank website link" target="_blank" rel="noreferrer">
                                <LanguageIcon />
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>
       </Layout>
    )
}

