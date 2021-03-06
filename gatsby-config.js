module.exports = {
  siteMetadata: {
    title: `Robin Daugherty`,
    description: `Robin Daugherty is a software engineer.`,
    name: `Robin Daugherty`,
    email: `robin@robindaugherty.net`,
    githubHandle: `RobinDaugherty`,
    twitterHandle: `robnich`,
    pinterestUsername: `robnich`,
    linkedin: `robindaugherty`,
    stackoverflowCv: `robindaugherty`,
    bio: `Software engineer.`,
    gravatarEmailHash: `c03d217df4867dfb3b3674649fa92e5b`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages`,
        ignore: [`**/\.js`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-100453-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
