import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'icons/fontawesome';

import './MenuBar.scss';


const MenuBar = () => {

  return (
    <div className="MenuBar">
      <div className="MenuBar-title">
        <h1>Nicholas Hazel</h1>
      </div>
      <nav className="MenuBar-nav no-mobile">
        <a href="/">About</a>
        <a href="/">Projects</a>
        <a href="/">Testing</a>
        <a href="/">Connect</a>
      </nav>
      <div className="MenuBar-hamburger no-desktop">
        <FontAwesomeIcon icon={['fa', 'bars']} size="2x" />
      </div>
    </div>
  )
}

export default MenuBar;