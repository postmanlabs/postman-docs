const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const host = process.env.BFF_BLOG_URL || ''

function fetchBlogPosts() {
  if (host) {
    return fetch(host)
    .then(
      (res) => {
        res.text()
          .then((resp) => {
            if (resp) {
              const respData = JSON.parse(resp).data || { error: true };
              if (!respData.error && respData.items) {
                fs.writeFile(path.join(
                  'bff-data',
                  'blog.json',
                ), JSON.stringify(respData), (err) => {
                  if (err) {
                    /* eslint-disable no-console */
                    console.error(err);
                    /* eslint-enable */
                    process.exit(1);
                    throw err;
                  }
                  /* eslint-disable no-console */
                  console.info('Success pre-render blog data');
                  /* eslint-enable */
                });
              } else {
                console.log('The blog endpoint returned unusable data..')
                fs.writeFile(path.join(
                  'bff-data',
                  'blog.json',
                ), JSON.stringify({}), (err) => {
                  if (err) {
                    /* eslint-disable no-console */
                    console.error(err);
                    /* eslint-enable */
                    process.exit(1);
                    throw err;
                  }
                  /* eslint-disable no-console */
                  console.info('Success pre-render empty blog data');
                  /* eslint-enable */
                });
              }
            } 
          })
        }
    )
    .catch(err => {
      console.error("Error when making BFF call... writing empty blog.json", err)
      fs.writeFile(path.join(
        'bff-data',
        'blog.json',
      ), JSON.stringify({}), (err) => {
        if (err) {
          /* eslint-disable no-console */
          console.error(err);
          /* eslint-enable */
          process.exit(1);
          throw err;
        }
        /* eslint-disable no-console */
        console.info('Success pre-render empty blog data');
        /* eslint-enable */
      });
    })
  } else {
    console.log('No Blog data endpoint provided.')
    fs.writeFile(path.join(
      'bff-data',
      'blog.json',
    ), JSON.stringify({}), (err) => {
      if (err) {
        /* eslint-disable no-console */
        console.error(err);
        /* eslint-enable */
        process.exit(1);
        throw err;
      }
      /* eslint-disable no-console */
      console.info('Success pre-render empty blog data');
      /* eslint-enable */
    });
  }         
}

module.exports = fetchBlogPosts;
