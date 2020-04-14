import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const App = () => {
    return (
        <div className='App'>
            <Navbar dark color='primary'>
                <div className='container'>
                    <NavbarBrand href='/'>My Nav Bar</NavbarBrand>
                </div>
            </Navbar>
        </div>
    );
};

export default App;