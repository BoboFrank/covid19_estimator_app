import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const App = () => {
    return (
        <div className='App'>
            <Navbar light color='light'>
                <div className='container'>
                    <NavbarBrand href='/'>My Covid Estimator APP</NavbarBrand>
                </div>
            </Navbar>
        </div>
    );
};

export default App;