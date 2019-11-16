import React, { Component } from 'react';
import ReactGA from 'react-ga';

const trackingID = 'UA-43979731-4';
ReactGA.initialize(trackingID);

export default class OutBoundLink extends Component {
  render() {
    const outbound = (eventLabel) => {
      ReactGA.event({
        category: 'Outbound',
        action: 'click',
        label: eventLabel,
      });
    };

    const {
      children, to, label, ...restProps
    } = this.props;
    return (
      <a
        {...restProps}
        href={to}
        target="_blank"
        onClick={() => outbound(label)}
      >
        {children}
      </a>
    );
  }
}
