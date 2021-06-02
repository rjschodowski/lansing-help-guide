import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import ogImage from '../images/app-fav-icon.png'

export default function SEO( description, meta, title ) {
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
                url
              }
            }
          }
        `
      )
    
      const metaDescription = description || site.siteMetadata.description

    return (
        <Helmet
        title={title}
        meta={[
            {
                name: `description`,
                content: `metaDescription`,
            },
            {
                property: `og:title`,
                content: title,
            },
            {
                property: `og:description`,
                content: metaDescription,
            },
            {
                property: `og:type`,
                content: `progressive web app`,
            },
            {
                property: `og:image`,
                content: `${site.siteMetadata.url}${ogImage}`,
            }
        ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    meta: [],
    description: ``,
  }
  
  SEO.propTypes = {
    description: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
  }