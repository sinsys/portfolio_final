// Test file - View Component - Main Page
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './Hero';

it('Main renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  	<Router>
      <Hero />
  	</Router>,
  	div
  );
  ReactDOM.unmountComponentAtNode(div);
});