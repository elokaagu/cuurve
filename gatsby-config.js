module.exports = {
  siteMetadata: {
    title: "alpha",
  },
  plugins: [
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
    `gatsby-plugin-styled-components`,
  ],
};
