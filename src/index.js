import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './components/Form';

import App from './components/App';
import reducers from './reducers';

const store = createStore (reducers, {}, applyMiddleware())

ReactDOM.render(
    <div>
        <Provider store={store}><App/ ></Provider>
        <div>
            <Forms/>
        </div>
    </div>,
    document.querySelector('#root')
    );