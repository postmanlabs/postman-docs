const sendmail = require('sendmail')();

sendmail({
  from: 'christina.hastenrath@getpostman.com',
  to: 'christina.hastenrath@getpostman.com',
  subject: 'test sendmail',
  attachments: [
    {
      path: './email.txt',
    },
  ],
}, (err, reply) => {
  console.log(err && err.stack);
  console.dir(reply);
});
