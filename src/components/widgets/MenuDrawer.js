import React, { useContext } from 'react';

import { AppContext } from 'contexts/AppContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './MenuDrawer.scss';

const MenuDrawer = () => {

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
    <div className={`MenuDrawer ${state.menu.isOpen ? 'isOpen' : ''}`}>
      <div className={`MenuBar-hamburger no-desktop`} onClick={e => toggleMenu(e)}>
        <FontAwesomeIcon icon={['fa', 'times-circle']} size="2x" />
      </div>
      <ul className="MenuDrawerLinks">
        <li>I'm a link</li>
        <li>I'm a link</li>
        <li>I'm a link</li>
        <li>I'm a link</li>
        <li>I'm a link</li>
      </ul>
    </div>
  )
}

export default MenuDrawer;