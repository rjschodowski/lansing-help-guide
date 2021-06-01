import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import ogImage from '../images/app-fav-icon.png'

export default function SEO() {
    return (
        <Helmet
        title="Lansing Help Guide"
        meta={[
            {
                property: `og:title`,
                content: "Lansing Help Guide",
            },
            {
                property: `og:type`,
                content: `progressive web app`,
            },
            {
                property: `og:image`,
                content: ``
            }
        ]}
        />
    )
};