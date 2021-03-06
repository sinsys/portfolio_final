// View Component - Main
import React from 'react';

// Component imports
import Hero from 'components/sections/Hero';

// Files / Assets
import './Main.scss';

const Main = () => {
  return (
    <div className="Main">
      <Hero />
      <div className="filler">Hi</div>
      <Hero />

    </div>
  );
}

export default Main;