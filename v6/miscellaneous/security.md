---

title: "Security"
page_id: "security"
tags: 
  - "app"
warning: false
---

Security is one of the biggest considerations in everything we do. If you have any questions after reading this, or encounter any issues, please contact us at [security@getpostman.com][0].

### SSL & Secure Websockets

HTTPS is enforced for our website and provisioning interfaces. All communication with our Sync service occurs over Secure Websockets, using 2048-bit digital signatures and 128-bit encryption. We also use HTTP Strict Transport Security to ensure the app never interacts with the Sync server over insecure HTTP. Our servers are also protected against CSRF (Cross Site Request Forgery) and CSWSH (Socket Hijacking) attacks.

### AWS Security & Platform Best Practices

Postman servers are hosted on Amazon Web Services. You can read about their [security measures][1] in place to protect our infrastructure. We have also followed all [platform best practices][2] to ensure your data stays secure with us.

### Server side encryption for private user data

Environment and global variables are specific to a user, not shared with anyone unless you explicitly download a file, and share it through another medium. All variables are encrypted at the server, with the AES-256-GCM algorithm, before being stored in the database.

We encourage users to store sensitive API data, such as authentication keys and passwords using the use of environment and global variables. Instructions on using environment variables can be found [here][3].

Postman uses the NodeJS Crypto library for server side encryption and the CryptoJS library for client side encryption.

We will soon offer support for client-side encryption, using a passphrase that you select. The environments will be 256-bit encrypted before being sent to the server. Any such encrypted environments will require the passphrase to decrypt, and the passphrase will not be stored anywhere.

### Contact Us

If you've found a vulnerability in our service or website, or want additional information regarding how we manage security, please send an email to [security@getpostman.com][0]. We will review it and respond to you within 24 hours.


[0]: mailto:security@getpostman.com
[1]: http://aws.amazon.com/security/
[2]: http://aws.amazon.com/security/security-resources/
[3]: https://www.getpostman.com/docs/environments
