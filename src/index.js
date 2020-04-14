import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './components/Form';

import App from './components/App';

ReactDOM.render(
    <div>
        <App/>
        <div>
            <Forms/>
        </div>
    </div>,
    document.querySelector('#root')
    );