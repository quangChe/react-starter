import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App testing="This is a test from index.js" />, document.getElementById('root'));
registerServiceWorker();
