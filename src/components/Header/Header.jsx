import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import './Header.scss';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch, SearchBox, Hits, Configure, Pagination,
} from 'react-instantsearch-dom';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import DynamicLink from '../Shared/DynamicLink';
import postmanLogo from '../../images/postman-logo-horizontal-orange.svg';

import { CustomHits } from '../Search/searchPreview';

const ClickOutHandler = require('react-onclickout');

const algoliaClient = algoliasearch('4A5N71XYH0', 'bf5cf4783437b12c2dca33724c9c04b0');

// removes empty query searches from analytics
const searchClient = {
  search(requests) {
    const newRequests = requests.map((request) => {
      // test for empty string and change request parameter: analytics
      if (!request.params.query || request.params.query.length === 0) {
        request.params.analytics = false;
      }
      return request;
    });
    return algoliaClient.search(newRequests);
  },
};

// changes button in navbar based on cookie presence
const LoginCheck = (props) => {
  const { cookie } = props;

  if (cookie !== 'yes') {
    return (
      <a
        href="https://identity.getpostman.com/login"
        className="btn btn__primary"
        target="_blank"
        rel="noreferrer"
        onClick={() => {
          // To stop the page reloading
          // e.preventDefault()
          // Lets track that custom click
          trackCustomEvent({
            // string - required - The object that was interacted with (e.g.video)
            category: 'lc-top-nav',
            // string - required - Type of interaction (e.g. 'play')
            action: 'Click',
            // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
            label: 'sign-in-button-clicked',
          });
        }}
      >
        Sign In
      </a>
    );
  }
  return (
    <a
      href="https://go.postman.co/build"
      className="btn btn__primary"
      onClick={() => {
        // To stop the page reloading
        // e.preventDefault()
        // Lets track that custom click
        trackCustomEvent({
          // string - required - The object that was interacted with (e.g.video)
          category: 'lc-top-nav',
          // string - required - Type of interaction (e.g. 'play')
          action: 'Click',
          // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
          label: 'launch-postman-button-clicked',
        });
      }}
    >
      Launch Postman
    </a>
  );
};

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.getCookie = this.getCookie.bind(this);
    const { data } = this.props;

    this.state = {
      data: JSON.parse(data),
      isToggledOn: 'unset',
      hasInput: false,
      refresh: false,
      visibleHelloBar: 0,
    };
  }


  componentDidMount() {
    const helloBarCountValue = Number(localStorage.getItem('hellobarcount'));
    this.setState({
      visibleHelloBar: helloBarCountValue,
    });
  }

  getCookie = (a) => {
    if (typeof document !== 'undefined') {
      const b = document.cookie.match(`(^|;)\\s*${a}\\s*=\\s*([^;]+)`);
      return b ? b.pop() : '';
    }
    return false;
  };

  // toggles the hamburger menu
  toggleMenu = () => {
    this.setState((state) => {
      if (state.isToggledOn === 'unset') {
        return ({
          isToggledOn: true,
        });
      }
      return ({
        isToggledOn: !state.isToggledOn,
      });
    });
  }

  // click out search results box
  onClickOut = () => {
    document.getElementsByClassName('ais-SearchBox-input')[0].value = '';
    this.setState(() => ({
      hasInput: false,
    }));
  }


  render() {
    const {
      isToggledOn, refresh, hasInput, data, visibleHelloBar,
    } = this.state;
    return (
      <header className="header text-center navbar navbar-expand-xl navbar-light">
        <div className="navbar-brand header__brand">
          <Link
            className="header__homelink"
            to="/"
          >
            <img className="header__logo" src={postmanLogo} alt="postman logo" />
            <span className="header__title">{data.title}</span>
          </Link>
        </div>

        {/* hamburger toggle */}
        <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`header__right-links justify-content-end navbar-nav mr-auto navbar-collapse collapse show
            ${(isToggledOn === true) ? 'animate-open' : ''}
            ${(isToggledOn === false) ? 'animate-close' : ''}
            ${isToggledOn === 'unset' ? 'closed' : ''}
            overlay${!visibleHelloBar ? ' noBar' : ''}
            `}
          id="navbarSupportedContent"
        >
          {/* Aloglia Widgets */}
          <div className="form-inline header__search">
            <ClickOutHandler onClickOut={this.onClickOut}>
              <InstantSearch
                searchClient={searchClient}
                indexName="docs"
                refresh={refresh}
              >
                <Configure hitsPerPage={5} />

                {/* forcefeed className because component does not accept natively as prop */}
                <SearchBox
                  className="searchbox"
                  class="ais-SearchBox-input"
                  submit={<></>}
                  reset={<></>}
                  translations={{
                    placeholder: 'Search Postman Docs',
                  }}
                  onKeyUp={(event) => {
                    this.setState({
                      hasInput: event.currentTarget.value.length > 2,
                    });
                  }}
                />


                <div className={!hasInput ? 'input-empty' : 'input-value'}>
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <CustomHits hitComponent={Hits} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <Pagination />
                      </div>
                    </div>
                  </div>
                </div>
              </InstantSearch>

            </ClickOutHandler>
          </div>
          {data.links.map((link) => (
            <div className="nav-item" key={link.name}>
              {link.cta ? <LoginCheck cookie={this.getCookie('getpostmanlogin')} /> : <DynamicLink className="nav-link" url={link.url} name={link.name} />}
            </div>
          ))}
        </div>
      </header>
    );
  }
}

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      headerLinks {
        value
      }
    }`);
  return (
    <HeaderComponent data={data.headerLinks.value} />
  );
};

export default Header;
