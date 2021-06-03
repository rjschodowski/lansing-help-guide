module.exports = {

  siteMetadata: {
    url: 'https://www.lansinghelpguide.com',
    title: 'Lansing Help Guide',
    description: 'Lansing Help Guide provides a quick starting point for Lansing newcomers in accessing help in times of need',
    author: 'R.J. Schodowski',
  },

  flags: {
    PRESERVE_WEBPACK_CACHE: true
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lansing Help Guide`,
        short_name: `Lansing Help Guide`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#3f51b5`,
        display: `standalone`,
        icon: `src/images/app-fav-icon.png`,
        include_favicon: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
