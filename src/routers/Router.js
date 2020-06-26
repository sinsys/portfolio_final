// Router - Basic routing
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from 'components/views/Main';

const Router = () => {
  return (
    <Switch>
      <Route
        exact path="/"
        component={Main}
      />
    </Switch>
  );
}

export default Router;