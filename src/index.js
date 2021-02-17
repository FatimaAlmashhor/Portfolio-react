import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/styles/main.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Cursor from './components/Cursor/Cursor'
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Cursor />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
