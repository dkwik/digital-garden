module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/03-evergreen`,
        rootNote: `/about`,
      },
    },
  ],
  siteMetadata: {
    title: `Daniel Kwik`,
  },
}
