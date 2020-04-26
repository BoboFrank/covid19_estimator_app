import React from 'react';
import App from './App';
import Forms from './Form';
import Footer from './footer';

const reactAppView =()=> {
    return (
        <div>
            <App />
            <Forms />
            <Footer title='Search'/>
        </div>   
    );
}
export default reactAppView;