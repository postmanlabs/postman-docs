/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CookieAlert from './CookieAlert';
import './layout.scss';

const Layout = ({ children }) => (
  <>
    {/* <div className="container-fluid"> */}
    <div className="layout-wrapper">
      <Header />
      <main>{children}</main>
      <CookieAlert />
      <Footer />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
