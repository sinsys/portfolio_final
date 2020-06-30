// Root - App
import React from 'react';
import MenuDrawer from 'components/widgets/MenuDrawer';
import MenuBar from 'components/widgets/MenuBar';
import Router from 'routers/Router';

import { AppContextProvider } from 'contexts/AppContext';

// Files / Assets
import './App.scss';

function App() {

  return (
    <div className="App">
      <AppContextProvider>
        <MenuDrawer />
        <MenuBar />
        <Router />
      </AppContextProvider>

    </div>
  );
}

export default App;
