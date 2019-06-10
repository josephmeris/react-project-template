//entry point
import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './landingpage/LandingPage';
import SomeComponent from './somecomponent/SomeComponent';

function App() {
    return (
        <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/somecomponent" component={SomeComponent} />
        </div>
    )
}

export default App;