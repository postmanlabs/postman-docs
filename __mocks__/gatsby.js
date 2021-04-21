const React = require('react');

const gatsby = jest.requireActual('gatsby');

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) => React.createElement('a', {
      ...rest,
      href: to,
    }),
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn().mockImplementation(() => ({
    allMarkdownRemark: {
      nodes: [
        {
          fields: { slug: '/docs/foo/slug/' },
          frontmatter: { title: 'slug' },
          id: 'jfkdlsajfkldsa',
        },
        {
          fields: { slug: '/docs/foo/nested/nestedslug/' },
          frontmatter: { title: 'nested slug' },
          id: 'jfkdlsajfkldsfa',
        },
        {
          fields: { slug: '/docs/bar/otherslug/' },
          frontmatter: { title: 'otherslug' },
          id: 'jfkdlsajfkldsfa',
        },
      ],
    },
    leftNavLinks: {
      value: '{"docs":{"foo":{"slug":{"url":"/docs/foo/slug/"},"nested":{"nestedslug":{"url":"/docs/foo/nested/nestedslug/"}}},"bar":{"otherslug":{"url":"/docs/bar/otherslug/"}}}}',
    },
    headerLinks: {
      value: '{"links":[{"name":"Docs","url":"/docs/getting-started/introduction/"},{"name":"Admin","url":"/docs/administration/managing-your-team/managing-your-team/"},{"name":"Developer","url":"/docs/developer/resources-intro/"},{"name":"Docs","url":"/docs/"},{"name":"Dashboard","url":"https://go.postman.co/","cta":true}],"title":"Learning Center"}',
    },
    footerLinks: {
      value: '{"columns":[{"name":"Product","children":[{"url":"https://www.postman.com/product/api-client","name":"API Client"},{"url":"https://www.postman.com/automated-testing","name":"Automated Testing"},{"url":"https://www.postman.com/features/mock-api","name":"Design & Mock"},{"url":"https://www.postman.com/api-documentation-generator","name":"Documentation"},{"url":"https://www.postman.com/api-monitor","name":"Monitors"},{"url":"https://www.postman.com/product/api-versioning","name":"Version Control"},{"url":"https://www.postman.com/product/workspaces","name":"Workspaces"}]},{"name":"Resources","children":[{"url":"https://www.postman.com/downloads/","name":"Download the App"},{"url":"https://www.postman.com/downloads/release-notes","name":"Release Notes"},{"url":"https://www.postman.com/integrations/","name":"Integrations"},{"url":"https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a","name":"Postman API"},{"url":"https://github.com/postmanlabs","name":"Open-Source"},{"url":"https://status.getpostman.com/","name":"System Status"}]},{"name":"Use Cases","children":[{"url":"https://getpostman.com/use-cases/","name":"Overview"},{"url":"https://getpostman.com/use-cases/api-development","name":"Development"},{"url":"https://www.postman.com/use-cases/api-testing","name":"Testing"},{"url":"https://www.postman.com/use-cases/product-management","name":"Product Management"}]},{"name":"Pricing","children":[{"url":"https://www.postman.com/pricing","name":"Overview"},{"url":"https://www.postman.com/postman-enterprise","name":"Postman Enterprise"}]},{"name":"Support","children":[{"url":"https://www.postman.com/support","name":"Support"},{"url":"https://pages.getpostman.com/Resellers-Support.html","name":"Resellers Support"},{"url":"/","name":"Learning Center"},{"url":"https://www.postman.com/resources/videos-tutorials/","name":"Videos & Tutorials"},{"url":"https://www.postman.com/community","name":"Community Content"},{"url":"https://community.postman.com/","name":"Postman Community"}]},{"name":"Company","children":[{"url":"https://www.postman.com/about-postman","name":"About"},{"url":"https://www.postman.com/jobs/","name":"Jobs"},{"url":"https://www.postman.com/contact","name":"Contact"},{"url":"https://blog.postman.com/","name":"Blog"},{"url":"https://www.postman.com/resources/press-releases/","name":"Resources"},{"url":"https://store.getpostman.com/","name":"Swag Shop"},{"url":"https://www.postman.com/post-con-2019","name":"POST/CON 2019"}]}],"copyright":[{"type":"notice","text":"© Postman, Inc. All rights reserved"},{"type":"link","url":"https://getpostman.com/security","name":"Security"},{"type":"link","url":"https://www.postman.com/licenses/privacy","name":"Privacy"},{"type":"link","url":"https://www.postman.com/licenses/postman_eula","name":"EULA"}]}',
    },
  })),
};
