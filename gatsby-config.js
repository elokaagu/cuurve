module.exports = {
  siteMetadata: {
    title: "alpha",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/icon.png",
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `ar2ubdnx`,
        dataset: `production`,
        graphqlTag: "default",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
  ],
};
