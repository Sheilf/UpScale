import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Construction from './components/Construction/Construction';
import Nav from './components/Nav/Nav';
import Store from './components/Store/Store';
import Cart from './components/Cart/Cart';
import Marketplace from './components/Marketplace/Marketplace';
import Sell from './components/Sell/Sell'
import './styles/flexborder.css';
import {BrowserRouter, Route} from 'react-router-dom';




ReactDOM.render(
    <BrowserRouter>
        <div className="flex-border-column">
            <Nav />
            <Route exact path="/" component={App}></Route>
            <Route exact path="/store" component={Store}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route exact path="/marketplace" component={Marketplace}></Route>
            <Route exact path="/sell" component={Sell}></Route>
            <Route path="/construction/:id" component={Construction}></Route>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
