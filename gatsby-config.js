const queries = require('./src/utils/algolia');

// require('dotenv').config({
//   path: `.env.${process.env.GATSBY_ACTIVE_ENV}`,
// });

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Postman Learning Center',
    description: '',
    author: 'Postman',
    siteUrl: 'https://learning.postman.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-43979731-4',
        // eslint-disable-next-line max-len
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 1000,
        // Defers execution of google analytics script after page load
        defer: true,
      },
    },
    'gatsby-plugin-polyfill-io',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-M42M5N',
        includeInDevelopment: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          // {
          //   resolve: 'gatsby-remark-embed-video',
          //   options: {
          //     width: 700,
          //     ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
          //     height: 400, // Optional: Overrides optional.ratio
          //     // Optional: Will remove related videos from the end of an embedded YouTube video.
          //     related: false,
          //     noIframeBorder: true, // Optional: Disable insertion of <style> border: 0
          //   },
          // },
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Postman Learning Center',
        short_name: 'Postman Learning Center',
        start_url: '/',
        background_color: '#FF6C37',
        theme_color: '#FF6C37',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-meta-redirect',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://learning.postman.com',
        sitemap: 'https://learning.postman.com/sitemap.xml',
        resolveEnv: () => process.env.GATSBY_ACTIVE_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sri',
      options: {
        hash: 'sha512', // 'sha256', 'sha384' or 'sha512' ('sha512' = default)
        crossorigin: false, // Optional
      },
    },
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        whitelist: ['MUNCHKIN_ID'],
      },
    },
    {
      resolve: 'gatsby-plugin-gdpr-cookies',
      options: {
        googleAnalytics: {
          trackingId: 'UA-43979731-4',
          anonymize: true,
        },
        environments: ['production', 'development'],
      },
    },
    {
      resolve: 'gatsby-plugin-newrelic',
      options: {
        configs: {
          production: {
            instrumentationType: 'proAndSPA',
            accountId: process.env.RELIC_ACCOUNT_ID,
            trustKey: process.env.RELIC_TRUST_KEY,
            agentID: process.env.RELIC_PRODUCTION_AGENT_ID,
            licenseKey: process.env.RELIC_LICENSE_KEY,
            applicationID: process.env.RELIC_PRODUCTION_APPLICATION_ID,
            beacon: 'bam.nr-data.net',
            errorBeacon: 'bam.nr-data.net',
          },
        },
      },
    },
  ],
};
