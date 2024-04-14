import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './StationPageK/store'
import { Provider } from 'react-redux';

// import Station from './Components/Station';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <Station/> */}
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
