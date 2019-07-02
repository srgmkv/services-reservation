import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import './index.css'

import './index.css';
import App from './containers/App';
//import "./state-controls/index";
import store from './state-controls/store';

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));