import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Card from "./card.js"  <--   This goes in CardList now.
//import {robots} from "./robots.js";  <--  This goes in CardList now. UNLESS CardList module assigns it, as shown/done.
// CardList was moved to App.js 
import * as serviceWorker from './serviceWorker';
import "tachyons";
import App from "./Containers/app.js";

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
