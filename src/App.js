// Root - App
import React, { useRef, useState } from 'react';
import Router from 'routers/Router';
import MenuBar from 'components/widgets/MenuBar';

import useFullscreenStatus from 'hooks/fullscreen';

// Files / Assets
import './App.scss';

function App() {

  const maximizableElement = useRef(null);
  let isFullscreen, setIsFullscreen;
  let errorMessage;

  try {
    [isFullscreen, setIsFullscreen] = useFullscreenStatus(maximizableElement);
  } catch (e) {
    errorMessage = "Fullscreen not supported";
    isFullscreen = false;
    setIsFullscreen = undefined;
  }

  return (
    <div className="App" ref={maximizableElement}>
      <MenuBar />
      <Router />
    </div>
  );
}

export default App;
