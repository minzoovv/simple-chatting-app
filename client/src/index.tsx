import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import socketio from 'socket.io-client';

import * as serviceWorker from './serviceWorker';
import GlobalStyles from './component/global-style';

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const socket = socketio.connect(process.env.REACT_APP_SERVER_HOST);
(() => {
  socket.emit('init', { name: 'bella' });
  socket.on('welcome', msg => {
    console.log(msg);
  });
})();

serviceWorker.unregister();
