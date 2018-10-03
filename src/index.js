// @flow
import React from 'react';
import ReactDOM from 'react-dom';
//$FlowFixMe
import * as serviceWorker from './serviceWorker';
import {App} from './app';

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.render(<App />, rootElement);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
