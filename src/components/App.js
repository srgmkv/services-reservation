import React from 'react';
import { connect } from 'react-redux';
import ServicesBlock from './ServicesBlock';
import List from './List';
import { getCalendarData, getServiceListData } from '../state-controls/actions';

//import Form from './Form';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			dataIsLoaded: false
		}
	}

	componentDidMount() {
		this.props.getCalendarData();
		this.props.getServiceListData();
	}

	render() {
		return (
			<div className="App">
				CFT

				{this.state.dataIsLoaded && <div>Data is loaded</div>}
				<List />
				<ServicesBlock />
				{/*<Form />*/}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		calendar: state.calendar,
		serviceList: state.serviceList
	};
}
export default connect(
	mapStateToProps,
	{ getCalendarData, getServiceListData }
)(App);
