/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  lang, meta, title, slug,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'google-site-verification',
          content: '58TM3lGyGn6c2Bj0PvPQSNzrd9_yBsHs2BjJ6KMHlRU',
        },
        {
          property: 'og:url',
          content: 'https://learning.postman.com',
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:site_name',
          content: 'Postman Learning Center',
        },
        {
          property: 'og:image',
          content: 'https://www.postman.com/img/v2/logo-glyph.png',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          property: 'twitter:domain',
          content: 'https://learning.postman.com',
        },
        {
          property: 'og:image',
          content: 'https://www.postman.com/img/v2/logo-glyph.png',
        },
        {
          property: 'twitter:site',
          content: '@getpostman',
        },
      ].concat(meta)}
    >
      {/* fonts */}
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap" rel="stylesheet" />
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
      <link rel="canonical" href={`https://learning.postman.com${slug}`} />
      {/* Algolia IE11 support */}
      <script src="https://polyfill.io/v3/polyfill.min.js?features=default,Array.prototype.find,Array.prototype.includes" />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
