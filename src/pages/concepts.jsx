import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/MarketingPages/Hero';
import SEO from '../components/seo';
import { IconCard } from '../components/MarketingPages/Cards';

import newToPostman from '../assets/concept/new-to-postman.svg';
import workspaces from '../assets/concept/workspaces.svg';
import collectionIcon from '../assets/concept/collection.svg';
import environmentsIcon from '../assets/concept/environment.svg';
import testsIcon from '../assets/concept/tests.svg';
import syncIcon from '../assets/concept/sync.svg';
import runIcon from '../assets/concept/run.svg';
import docsIcon from '../assets/concept/docs.svg';
import mockIcon from '../assets/concept/mock.svg';


const ConceptPage = () => (
  <Layout>
    <SEO title="Concepts" slug="/concepts/" />

    <Hero title=" Postman Concepts" text="Get easy, API-First solutions with the industry’s only Complete API Development Environment." />
    <IconCard
      icon={newToPostman}
      items="3 items"
      title="New to Postman"
      description="Postman is the only complete API development environment used by 5 million developers."
      heading1="Blog"
      link1="First 5 things to try if youre new to Postman"
      href1="/"
      heading2="Blog"
      link2="How Postman feeds my sushi addiction"
      href2="/"
      heading3="Video"
      link3="New to Postman? First 5 things to try"
      href3="/"
    />

    <IconCard
      icon={workspaces}
      items="2 items"
      title="Postman Workspaces"
      description="Personal and team workspacesUse Postman Workspaces to organize your work and manage collaboration with the rest of your team."
      heading1="Blog"
      link1="Personal and team workspaces"
      href1="/"
      heading2="Video"
      link2="Collaboration with others"
      href2="/"
    />

    <IconCard
      icon={collectionIcon}
      items="2 items"
      title="Postman Collections"
      description="Postman Collections are executable descriptions of your API. Go ahead and organize your requests and mirror your specific workflows."
      heading1="Blog"
      link1="The Good Collection"
      href1="/"
      heading2="Docs"
      link2="Creating, sharing, and managing collections"
      href2="/"
    />

    <IconCard
      icon={environmentsIcon}
      items="3 items"
      title="Postman Environments"
      description="Make assertions about the correctness of your API responses, pass data between requests, and add dynamic behavior to requests and collections."
      heading1="Blog"
      link1="Using environments and variables"
      href1="/"
      heading2="docs"
      link2="Variable syntax and scope"
      href2="/"
      heading3="docs"
      link3="Creating, sharing, and managing environments"
      href3="/"
    />

    <IconCard
      icon={testsIcon}
      items="3 items"
      title="Tests and Scripts"
      description="Postman Environments are a convenient way to share your team’s server configurations, replicate user credentials for testing, or hide your personal secrets."
      heading1="Blog"
      link1="Writing tests"
      href1="http://blog.getpostman.com/2017/10/25/writing-tests-in-postman/"
      heading2="Blog"
      link2="Chaining requests"
      href2="http://blog.getpostman.com/2018/03/19/how-to-make-money-using-postman-chaining-requests/"
      heading3="Blog"
      link3="Test automation"
      href3="http://blog.getpostman.com/2017/08/23/integrate-api-tests-with-postman-newman-and-travis-ci/"
    />

    <IconCard
      icon={syncIcon}
      items="2 items"
      title="Syncing"
      description="Back up and save your Postman data to the cloud."
      heading1="docs"
      link1="Sync changes to your Postman account"
      href1="https://learning.getpostman.com/docs/postman/launching-postman/syncing/"
      heading2="docs"
      link2="Sync changes with your Postman team"
      href2="https://learning.getpostman.com/docs/postman/workspaces/using-workspaces/"
    />

    <IconCard
      icon={runIcon}
      items="3 items"
      title="Running a Collection"
      description="Run a collection as a series of requests against a corresponding environment."
      heading1="docs"
      link1="Run locally in the Postman app with the Collection Runner"
      href1="https://learning.getpostman.com/docs/postman/collection-runs/starting-a-collection-run/"
      heading2="docs"
      link2="Run locally with the open-source Newman CLI"
      href2="https://learning.getpostman.com/docs/postman/collection-runs/command-line-integration-with-newman/"
      heading3="video"
      link3="Run on Postman cloud with Postman Monitors"
      href3="https://youtu.be/3nOP_TYTuA8"
    />

    <IconCard
      icon={docsIcon}
      items="2 items"
      title="Documenting APIs"
      description="Use a Postman mock server to simulate a server response before building out the real endpoint."
      heading1="website"
      link1="Browse the API Network to see who’s running in Postman"
      href1="hhttps://www.getpostman.com/api-network/"
      heading2="video"
      link2="API documentation with Postman"
      href2="https://youtu.be/Ayo_KdLLcTA"
    />

    <IconCard
      icon={mockIcon}
      items="3 items"
      title="Mock an API Response"
      description="Run a collection as a series of requests against a corresponding environment."
      heading1="blog"
      link1="Mock responses with examples"
      href1="http://blog.getpostman.com/2017/05/17/mock-responses-in-postman-by-using-examples/"
      heading2="docs"
      link2="Intro to mock servers"
      href2="https://learning.getpostman.com/docs/postman/mock-servers/intro-to-mock-servers/"
      heading3="video"
      link3="Fake APIs for real developers"
      href3="https://youtu.be/fgtDZPOPzLU"
    />

  </Layout>
);

export default ConceptPage;
