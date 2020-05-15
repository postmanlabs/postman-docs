const path = require('path');
const fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem');
const glob = require('glob');
const uuidv4 = require('uuid/v4');
const frontmatter = require('@github-docs/frontmatter');
const redirects = require('./redirects');
const HeaderJson = require('./src/components/Header/Header.data.json');
const FooterJson = require('./src/components/Footer/Footer.data.json');

const ignorePaths = [
  '/docs/postman/team-library/activity-feed-and-restoring-collections/',
  '/docs/postman/team-library/searching/',
  '/docs/postman/team-library/setting-up-team-library/',
  '/docs/postman/team-library/sharing/',
  '/docs/postman/team-library/conflicts/',
  '/docs/postman/team-library/sharing-collections-in-workspaces-for-version-5/',
  '/docs/administration/migrating-to-v7/',
];


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect, createPage } = actions;

  redirects.forEach(({ from, to }) => {
    createRedirect({
      fromPath: from,
      isPermanent: true,
      redirectInBrowser: true,
      toPath: to,
    });
  });

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.fields.slug.includes('-')) {
      const underscoreSlug = node.fields.slug.replace(/-/g, '_');

      createRedirect({
        fromPath: underscoreSlug,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: node.fields.slug,
      });
    }
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/doc.jsx'),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};


exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const prepareNode = (obj, name) => {
    const data = {
      key: uuidv4(),
      value: JSON.stringify(obj),
    };
    const node = JSON.stringify(data);
    const nodeMeta = {
      id: createNodeId(`my-data-${data.key}`),
      parent: null,
      children: [],
      internal: {
        type: name,
        mediaType: 'text/json',
        content: node,
        contentDigest: createContentDigest(data),
      },
    };

    const output = { ...data, ...nodeMeta };
    return output;
  };

  const getDirectories = (src) => glob.sync(`${src}/**/*`);
  const paths = getDirectories('./src/pages/docs')
    .filter((val) => val.slice(-3) === '.md')
    .map((val) => {
      const { data } = frontmatter(fs.readFileSync(val));
      const order = data.order || 200;
      return [val, order];
    })
    .sort((a, b) => Number(a[1]) - Number(b[1]))
    .map((val) => {
      let newVal = '';
      newVal = val[0].replace(/\.\/src\/pages/g, '');
      newVal = newVal.substring(0, newVal.length - 3);
      newVal = newVal.slice(-5) === 'index' ? newVal.substring(0, newVal.length - 5) : newVal;
      return `${newVal}/`;
    })
    .filter((val) => !ignorePaths.includes(val));

  const output = {};

  paths.forEach((val) => {
    let split = val.split('/');
    split = split.filter((url) => url !== '');

    let current = output;
    split.forEach((part) => {
      current[part] = current[part] || {};
      current = current[part];
    });
    current.url = `/${split.join('/')}/`;
  });


  const { createNode } = actions;

  createNode(prepareNode(output.docs, 'leftNavLinks'));
  createNode(prepareNode(HeaderJson, 'headerLinks'));
  createNode(prepareNode(FooterJson, 'FooterLinks'));
};
