import React from 'react';
import { connect } from 'react-redux';

import MainForm from './MainFom';
import ReservationForm from './ReservationForm';
import { getCalendarData, getServiceListData } from '../state-controls/actions';

class App extends React.Component {

	componentDidMount() {
		this.props.getCalendarData();
		this.props.getServiceListData();
	}

	render() {
		return (
			<div className="App">
				<MainForm />
			</div>
		);
	}
}


export default connect(
	null,
	{ getCalendarData, getServiceListData }
)(App);
