import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { defineCustomElements } from 'iris-sdk/components/loader';

ReactDOM.render(<App testing="This is a test from index.js" />, document.getElementById('root'));
registerServiceWorker();
defineCustomElements(window);
