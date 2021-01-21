require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

if (!process.env.GITHUB_TOKEN) {
  console.error('Make sure you provide a GITHUB_TOKEN env variable!');
  throw new Error('Make sure you provide a GITHUB_TOKEN env variable!');
}

module.exports = {
  siteMetadata: {
    title: `Nicholas Myers`,
    description: `Nicholas Myers Web Developer Portfolio`,
    author: `Nicholas Myers`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nicholas Myers`,
        short_name: `Nicholas Myers`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        },
        fetchOptions: {}
      }
    },

    // This setup will prevent web crawlers like google from indexing us
    // Turning this off will open you up to crawlers and let you be SEOd
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: '*', disallow: '/' }]
      }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
