const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const host = process.env.BFF_YOUTUBE_URL || ''

function fetchYouTube() {
  if (host) {
    return fetch(host)
    .then(
      (res) => {
        res.text()
          .then((resp) => {
            if (resp) {
              const respData = JSON.parse(resp).data || { error: true };
              if (!respData.error) {
                fs.writeFile(path.join(
                  'bff-data',
                  'youtube.json',
                ), JSON.stringify(respData), (err) => {
                  if (err) {
                    /* eslint-disable no-console */
                    console.error(err);
                    /* eslint-enable */
                    process.exit(1);
                  }
                  /* eslint-disable no-console */
                  console.info('Success pre-render youtube data');
                  /* eslint-enable */
                });
              } else {
                console.log('The youtube endpoint returned unusable data..')
                fs.writeFile(path.join(
                  'bff-data',
                  'youtube.json',
                ), JSON.stringify({development: true}), (err) => {
                  if (err) {
                    /* eslint-disable no-console */
                    console.error(err);
                    /* eslint-enable */
                    process.exit(1);
                  }
                  /* eslint-disable no-console */
                  console.info('Success pre-render empty youtube data');
                  /* eslint-enable */
                });
              }
            } 
          })
        }
    )
    .catch(err => {
      console.error("Error when making BFF call... writing empty youtube.json", err)
      fs.writeFile(path.join(
        'bff-data',
        'youtube.json',
      ), JSON.stringify({development: true}), (err) => {
        if (err) {
          /* eslint-disable no-console */
          console.error(err);
          /* eslint-enable */
          process.exit(1);          
        }
        /* eslint-disable no-console */
        console.info('Success pre-render empty youtube data');
        /* eslint-enable */
      });
    })
  } else {
    console.log('No youtube data endpoint provided.')
    fs.writeFile(path.join(
      'bff-data',
      'youtube.json',
    ), JSON.stringify({development: true}), (err) => {
      if (err) {
        /* eslint-disable no-console */
        console.error(err);
        /* eslint-enable */
        process.exit(1);
      }
      /* eslint-disable no-console */
      console.info('Success pre-render empty youtube data');
      /* eslint-enable */
    });
  }         
}

module.exports = fetchYouTube;
