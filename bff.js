const sh = require('shelljs');
const pingWebHook = require('./scripts/pingWebHook');
const fetchBlogPosts = require('./scripts/fetchBlogPosts');
const fetchEvents = require('./scripts/fetchEvents')
const fetchYouTube = require('./scripts/fetchYouTube');

const prefetch = async (dir, response) => {
  sh.exec('mkdir -p bff-data');
  await pingWebHook();
  fetchBlogPosts();
  fetchEvents();
  fetchYouTube();
};

prefetch();