import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './COMPONENTS/Header/Header';

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/checkout">
                        <h1>Checkout</h1>
                    </Route>

                    <Route path="/login">
                        <h1>login</h1>
                    </Route>

                    <Route path="/test">
                        <h1>test page</h1>
                    </Route>
                    {/* default path */}
                    <Route path="/">
                        <Header />

                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
