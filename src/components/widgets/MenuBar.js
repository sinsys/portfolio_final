import React, { useContext } from 'react';

import { AppContext } from 'contexts/AppContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'icons/fontawesome';

import './MenuBar.scss';


const MenuBar = () => {

  const {state, dispatch} = useContext(AppContext);

  const toggleMenu = () => {

    state.menu.isOpen
      ? dispatch({
          type: 'close-menu'
        })
      : dispatch({
          type: 'open-menu'
        });

  }

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
      <div className={`MenuBar-hamburger no-desktop ${state.menu.isOpen ? 'isOpen' : ''}`} onClick={e => toggleMenu(e)} >
        <FontAwesomeIcon icon={['fa', 'bars']} size="2x" />
      </div>
    </div>
  )
}

export default MenuBar;