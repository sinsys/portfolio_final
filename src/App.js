// Root - App
import React from 'react';
import Router from 'routers/Router';
import MenuBar from 'components/widgets/MenuBar';

// Files / Assets
import './App.scss';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Router />
    </div>
  );
}

export default App;
