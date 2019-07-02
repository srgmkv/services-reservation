import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";

import './ Styles/index.css'
import './ Styles/AvailableService.css';

import App from './containers/App';
import store from './state-controls/store';

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));