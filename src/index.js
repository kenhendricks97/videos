import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; //import app component

//place app component and query selector and look for element id called root
ReactDOM.render(
    <App />, //calling app component to run it
    document.querySelector('#root')
);
