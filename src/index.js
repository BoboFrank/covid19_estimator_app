import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import reactAppView from './components/reactAppView';

let viewTree = React.createElement(reactAppView, null);
let where = document.querySelector('#root');

ReactDOM.render(viewTree, where);
/* The code below replaces the first statement which the ReactDOM.render call takes.
let viewTree= React.createElement(ReactAppView, null);
The ReactDOM.render call now takes the code below
ReactDOM.render(viewTree, document.querySelector('#root')); */