import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
import Layout from '../components/layout';
import Hero from '../components/MarketingPages/Hero';
import SEO from '../components/seo';
import Slider from '../components/MarketingPages/Slider';
import { LabeledCard, SecondaryCard } from '../components/MarketingPages/Cards';
import teachingSpaceman from '../assets/teaching-spaceman.svg';

const divStyle = {
  background: '#1c272b',
  padding: '80px',
  marginBottom: '80px',
};
const divStyleHeading = {
  color: 'white',
};
const divStyle2 = {
  background: '#eaf2f8',
  marginTop: '80px',
  padding: '80px 115px',
};
const videoStyle = {
  padding: '0px 40px',
};
const advancedStyle = {
  padding: '80px 40px',
};
const labeledStyle = {
  width: '100%',
};

const GettingStartedPage = () => (
  <Layout>
    <SEO title="Getting Started" slug="/getting-started/" />
    <Hero title="Get Started with Postman" />
    <Slider />

    <section className="row get-started__background d-flex flex-fill" style={divStyle}>
      <div className="col-md-4" style={divStyleHeading}>
        <h2>2. Try it Yourself</h2>
        <p>
          We&apos;ve curated our best blog posts, tutorials, videos,
          and docs to help you get started quickly with Postman.
        </p>
      </div>
      <div className="col-xs-12 col-sm-9 col-md-4" style={labeledStyle}>
        <LabeledCard
          link="https://www.youtube.com/watch?v=YKalL1rVDOE&list=PLM-7VG-sgbtBsenu0CM-UF3NZj3hQFs7E"
          label="Checklist"
          title="The First Five Things to Try if You’re New to Postman"
          description="If you're new to Postman, get up to speed quickly with this checklist."
        />
      </div>
      <div className="col-xs-12 col-sm-9 col-md-4" style={labeledStyle}>
        <LabeledCard
          link="https://blog.postman.com/2018/04/25/how-postman-feeds-my-sushi-addiction"
          label="Tutorial"
          title="How Postman Feeds My Sushi Addiction"
          description="Use Postman to create your very own restaurant selector."
        />
      </div>
    </section>

    <section className="row" style={videoStyle}>
      <div className="col-md-8 col-sm-auto">
        <ResponsiveEmbed
          src="https://www.youtube.com/embed/YKalL1rVDOE?list=PLM-7VG-sgbtBsenu0CM-UF3NZj3hQFs7E"
          allowFullScreen
        />
      </div>
      <div className="col-md-4 col-sm-auto">
        <h2>3. Watch the New to Postman Playlist</h2>
        <p>Learn how simple it is to validate an API response in Postman.</p>
        <a className="btn btn__secondary-dark btn__left" href="https://www.youtube.com/embed/YKalL1rVDOE?list=PLM-7VG-sgbtBsenu0CM-UF3NZj3hQFs7E">Watch the entire playlist</a>
      </div>
    </section>

    <section className="row" style={divStyle2}>
      <div className="col-md-5 offset-md-1">
        <h2>4. Learn About Postman Key Concepts</h2>
        <p>Get familiar with Postman fundamentals and learn more about how Postman works.</p>
        <a className="btn btn__secondary-dark btn__left" href="/concepts/">Learn More</a>
      </div>
      <div className="col-md-5">
        <img src={teachingSpaceman} alt="Teaching Spaceman" />
      </div>
    </section>

    <section className="row text-center" style={advancedStyle}>
      <div className="col-md-12">
        <h2>5. Dig Deeper Into Advanced Features</h2>
      </div>
      <div className="row justify-content-around offset-lg-2">
        <SecondaryCard
          title="From Our Blog"
          description="Learn how Postman seamlessly integrates with your favorite platforms."
          cta="Read the Blog"
          ctaLink="https://blog.postman.com"
        />

        <SecondaryCard
          title="Tutorial"
          description="Learn how to integrate Postman tests with your own CI/CD pipeline."
          cta="Learn More"
          ctaLink="https://www.youtube.com/watch?v=3pMyO5ggq8I"
        />

        <SecondaryCard
          title="From Our Docs"
          description="Use the Postman sandbox to run tests and control your workflow."
          cta="Read the Docs"
          ctaLink="https://learning.postman.com/docs/postman/scripts/postman-sandbox-api-reference/"
        />
      </div>
    </section>
  </Layout>
);

export default GettingStartedPage;
