import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
// import studentReducer from './redux/reducers/studentReducer';
// import courseReducer from './redux/reducers/courseReducer';
import { Provider } from 'react-redux';
// import rootReducer from './redux/reducers/index';
// import store from './store/features';
import studentReducer from './store/features/studentSlice'


const store = configureStore({//here I initialize the global store state
  reducer: {
    student: studentReducer,
    middleware: [thunk],
  }
});

// const store = configureStore({
//   reducer: studentReducer, courseReducer,
//   // reducer:rootReducer ,
//   middleware: [thunk],
//   // enhancers: [composeWithDevTools()],
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


