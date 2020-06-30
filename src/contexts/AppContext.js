// Context - Used for global data management
// Core imports
import React, { createContext, useReducer } from 'react';

// Initialize our context
const AppContext = createContext();

// Set an initial load state for context
let initialState = {
  menu: {
    isOpen: false
  }
};

// Construct explicit dispatch actions
const reducer = (state, action) => {
  switch (action.type) {
    case 'open-menu':
      return {
        ...state,
        menu: {
          isOpen: true
        }
      };
    case 'close-menu':
      return {
        ...state,
        menu: {
          isOpen: false
        }
      };
    default: {
      return initialState;
    }
  }
};

// Setup a Provider React element
const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {state, dispatch};
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
};

const AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };