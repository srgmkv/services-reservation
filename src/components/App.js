import React from 'react';
import { connect } from 'react-redux';
import ServicesBlock from './ServicesBlock';
import List from './List';
import { getCalendarData, getServiceListData } from '../state-controls/actions';

//import Form from './Form';


class App extends React.Component {

	componentDidMount() {
		this.props.getCalendarData();
		this.props.getServiceListData();
	}

	render() {
		return (
			<div className="App">
				<List />
				<ServicesBlock />
				{/*<Form />*/}
			</div>
		);
	}
}


export default connect(
	null,
	{ getCalendarData, getServiceListData }
)(App);
