// Test file - View Component - Main Page
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

it('Main renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<Router>
      <Main />
  	</Router>,
  	div
  );
  ReactDOM.unmountComponentAtNode(div);
});