import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import reducers from './redux/reducers/studentReducers';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore, applyMiddleware } from 'redux';

// const store = createStore(reducers, applyMiddleware(thunk));

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
  // enhancers: [composeWithDevTools()],
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


