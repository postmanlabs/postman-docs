import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import uuidv4 from 'uuid/v4';
import Layout from '../components/layout';
import SEO from '../components/seo';

import upcomingEvents from '../../bff-data/events.json';

import HeroImage from '../assets/postman-workspaces-personal-postmanaut.png';
import AdminImage from '../assets/team-collaboration-postmanaut-pic.png';
import ResourceImage from '../assets/integrations-intro-pic.png';
import LearnImage from '../assets/postmanaut-intro-pic.png';

import { SecondaryCard, LandingCard } from '../components/MarketingPages/Cards';
import '../components/MarketingPages/Buttons.scss';

import './index.scss';

const heroBackground = {
  backgroundColor: '#eaf2f8',
};
const videoBackground = {
  backgroundColor: 'rgb(245, 248, 251)',
};

const getSupString = (dateOfMonth) => {
  if (dateOfMonth >= 4 && dateOfMonth <= 20) {
    return 'th';
  } if (dateOfMonth >= 24 && dateOfMonth <= 30) {
    return 'th';
  } if (dateOfMonth === 1 || dateOfMonth === 21 || dateOfMonth === 31) {
    return 'st';
  } if (dateOfMonth === 2 || dateOfMonth === 22) {
    return 'nd';
  } if (dateOfMonth === 3 || dateOfMonth === 23) {
    return 'rd';
  }
  return null;
};

class IndexPage extends React.Component {

  componentDidMount(){
    const pix = document.createElement('script');
    pix.language='JavaScript1.1'
    pix.src = '//pixel.mathtag.com/event/js?mt_id=1538259&mt_adid=244742&mt_exem=&mt_excl=&v1=&v2=&v3=&s1=&s2=&s3=';
    pix.async = true;
    document.body.appendChild(pix);
  }

  render() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // If, upcomingEvents is an array, sort the events array by date, and filter out past events.
    // Else, leave as is.. which is an object with upcomingEvents.development = true
    const sortedUpcomingEvents = Array.isArray(upcomingEvents)
      ? upcomingEvents.sort((a, b) => (new Date(a.date) - new Date(b.date)))
        .filter((event) => new Date(event.expiration) > new Date())
      : upcomingEvents;

    return (
      <Layout>
        <SEO title="Home" slug="/" />
        <section className="row section" style={heroBackground}>
          <div className="col-sm-12 col-md-5 col-lg-6 align-self-center">
            <h1>Postman Learning Center</h1>
            <p>
              Learn how to use Postman.
              {' '}
              <br />
              Check out the docs and support resources!
            </p>
            <a href="/docs/getting-started/introduction/" className="btn btn__primary mb-5">Explore the docs</a>
          </div>
          <div className="col-sm-12 col-md-7 col-lg-6 align-self-center">
            <img src={HeroImage} width="637" height="411" className="hero-image img-fluid" alt="Postmanaut sitting at computer. Illustration." />
          </div>
        </section>
  
        <section className="row section">
          <div className="col-sm-12 text-center">
            <h2 className="mb-5">Design, develop, and collaborate on your API projects</h2>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
                <LandingCard
                  title="Get Started"
                  description="Send your first API request in Postman in just a few clicks!"
                  cta="Send a request"
                  link="/docs/getting-started/sending-the-first-request/"
                  icon={LearnImage}
                />
              </div>
              <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
                <LandingCard
                  title="Test"
                  description="Write test scripts and build automation into your workflow."
                  link="/docs/writing-scripts/intro-to-scripts/"
                  cta="Create tests"
                  icon={ResourceImage}
                />
              </div>
              <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
                <LandingCard
                  title="Admin"
                  description="Administer your account and set up your team for success."
                  link="/docs/administration/managing-your-team/managing-your-team/"
                  cta="Manage Postman"
                  icon={AdminImage}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
                <SecondaryCard
                  title="Community"
                  description="Connect to the Postman community on our forum."
                  cta="Visit Forum"
                  ctaLink="https://community.postman.com/"
                />
              </div>
              <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
                <SecondaryCard
                  title="Postman Network"
                  description="Find templates, workspaces, and APIs you can interact with inside Postman."
                  cta="Browse Postman"
                  ctaLink="https://www.postman.com/explore"
                />
              </div>
              <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
                <SecondaryCard
                  title="Videos"
                  description="Learn Postman skills from our video playlists."
                  cta="Watch Videos"
                  ctaLink="https://www.youtube.com/postmanapidevelopment"
                />
              </div>
            </div>
          </div>
        </section>
  
        <section className="row section" style={videoBackground}>
          <div className="col-lg-4 order-lg-1">
            <h2>Intro to Postman</h2>
            <p>Learn the Postman fundamentals in this video course for beginners.</p>
            <p className="mb-4">Send and authorize a request, write test scripts, and chain requests together.</p>
          </div>
          <div className="col-lg-8 order-lg-13">
            <div className='embed-responsive embed-responsive-16by9'>
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/7E60ZttwIpY?rel=0" allowfullscreen></iframe>
            </div>
          </div>
        </section>
        <section className="row section">
          <div className="col-md-4">
            <h2>Upcoming Postman Livestreams</h2>
            <p>
              <a href="https://www.twitch.tv/getpostman" target="_blank" rel="noopener noreferrer">Follow us</a>
              {' '}
              on Twitch or
              {' '}
              <a href="https://www.youtube.com/channel/UCocudCGVb3MmhWQ1aoIgUQw" target="_blank" rel="noopener noreferrer">subscribe</a>
              {' '}
              to our YouTube channel so you don’t miss when we go live.
            </p>
          </div>
          <div className="col-md-8">
            {/* If there are events in the events.json array */}
            {sortedUpcomingEvents.length > 0 ? (
              // Map over, get the appropriate sup text value, and render event.
              sortedUpcomingEvents.map((event) => {
                const dateObject = new Date(event.date);
                return (
                  <p key={uuidv4()}>
                    <strong>
                      {`${months[dateObject.getUTCMonth()]} ${dateObject.getDate()}`}
                      <sup>{getSupString(dateObject.getDate())}</sup>
                      {' '}
                      -
                    </strong>
                    {' '}
                    <OutboundLink href={event.link} target="_blank" rel="noopener noreferrer">
                      {event.title}
                    </OutboundLink>
                    {`: ${event.description}`}
                  </p>
                );
              })
            ) : (
              <>
                {/* If there are no events, and events.json is an object where development eq true */}
                {(!Array.isArray(upcomingEvents) && upcomingEvents.development) ? (
                  <div className="events__alert" role="alert">
                    <p>
                      You are currently in develop mode. Dynamic events will not be displayed locally.
                      <a style={{ fontSize: 'inherit' }} href="https://github.com/postmanlabs/postman-docs/blob/develop/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">See Contributing doc for details</a>
                      .
                    </p>
                  </div>
                ) : (
                  <>
                    {/* else we know we have 0 upcoming events, and we are not in development mode */}
                    <p>We currently have no upcoming events...check back later.</p>
                  </>
                )}
              </>
            )}
          </div>
        </section>
  
        <section className="row section justify-content-center">
          <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
            <SecondaryCard
              title="Postman support"
              description="Reach out to our support team."
              cta="Open a ticket"
              ctaLink="https://support.postman.com/hc/en-us/requests/new/"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
            <SecondaryCard
              title="Bugs and feature requests"
              description="Check out the app support repo."
              cta="Make a request"
              ctaLink="https://github.com/postmanlabs/postman-app-support/"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
            <SecondaryCard
              title="Product roadmap"
              description="Find out what we&apos;re working on."
              cta="See the roadmap"
              ctaLink="https://trello.com/b/4N7PnHAz/postman-roadmap-for-developers"
            />
          </div>
        </section>
      </Layout>
    );
  }  
};

export default IndexPage;
