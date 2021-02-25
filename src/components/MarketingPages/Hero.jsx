import React from 'react';

const Hero = ({ title, text }) => (
  <div className="row text-center hero">
    <div className="col-12">
      <h1>{title}</h1>
    </div>
    <div className="col-12">
      <p>{text}</p>
    </div>
  </div>
);

export default Hero;
