module.exports = {
  
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lansing Community Resources`,
        short_name: `Lansing Community Resources`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#3f51b5`,
        display: `standalone`,
        icon: `src/images/security_white_24dp.svg`,
        include_favicon: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
