import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
//Root Reduce
import rootReducer from './reducers';
//Redux Toolkit functions
import { configureStore } from '@reduxjs/toolkit';
//Router
import { BrowserRouter } from 'react-router-dom';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <BrowserRouter>
      <App /> 
     </BrowserRouter>  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

