import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './Demo';
import Avatar from './Avatar';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<Demo name="PPS is mal"/>, document.getElementById('root'));
ReactDOM.render(<div>
	<Avatar  /> 
	<Demo name="I am Fuad"/>
	</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
