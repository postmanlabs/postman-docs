
import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieAlert = () => (
  <div className="CookieWrapper">
    <CookieConsent
      location="bottom"
      buttonText="Accept and Close"
      cookieName="gatsby-gdpr-google-analytics"
      style={{
        display: 'block',
        background: 'white',
        // width: '100%',
        // height: '100%',
        // left: 0,
        position: 'static',
        color: '#282828',
        padding: '20px 50px',
        textAlign: 'center',
        fontSize: '16px',
        lineHeight: '24px',
        boxShadow: '0px 4px 26.91px rgba(0, 0, 0, 0.15)',
      }}
      buttonStyle={{
        display: 'block',
        textAlign: 'center',
        margin: '0 auto',
        background: '#1C272B',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
        borderRadius: '3px',
        color: '#fff',
        padding: '13px 24px',
        fontWeight: '500',
      }}
    >
      This website uses cookies to ensure you get the best experience on our website.
      {' '}
      <strong><a href="https://www.postman.com/licenses/privacy/#Automatic" rel="noopener" target="_blank" style={{ color: 'black', textDecoration: 'underline' }}>Learn more</a></strong>
    </CookieConsent>
  </div>
);

export default CookieAlert;
