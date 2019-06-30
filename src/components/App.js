import React from 'react';
import { connect } from 'react-redux';

import MainForm from './MainFom';
import ReservationForm from './ReservationForm';
import { getCalendarData, getServiceListData } from '../state-controls/actions';

const mapStateToProps = state => {
	return {
		isReservationFormShown: state.isReservationFormShown
	}
};

class App extends React.Component {

	componentDidMount() {
		this.props.getCalendarData();
		this.props.getServiceListData();
	}

	render() {
		return (
			<div className="App">
				{this.props.isReservationFormShown ? < ReservationForm /> : <MainForm />}
			</div>
			);
		}
	}
	
	
	export default connect(
		mapStateToProps,
	{getCalendarData, getServiceListData }
			)(App);
