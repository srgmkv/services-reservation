import React from 'react';
import { connect } from 'react-redux';

import MainForm from '../components/MainFom';
import ReservationForm from '../components/ReservationForm';
import { getCalendarData, getServiceListData } from '../state-controls/actions';

const mapStateToProps = state => {
	return {
		resFormShown: state.isReservationFormShown
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
				{this.props.resFormShown ? < ReservationForm /> : <MainForm />}
			</div>
			);
		}
	}
	
	
	export default connect(
		mapStateToProps,
	{getCalendarData, getServiceListData }
			)(App);
