import React from 'react';
import {connect} from 'react-redux';

import List from './List';
import { getCalendarData, getServiceListData } from '../state-controls/actions';

//import Form from './Form';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			dataIsLoaded: false,
			endedWithError: false
		}
	}

	componentDidMount() {
		this.props.getCalendarData();
		this.props.getServiceListData();

		(async () => {
			try {
				await fetch("https://jsonplaceholder.typicode.com/posts")
					.then(resp => {
						if (!resp.ok) {
							throw new Error(`${resp.status} when downloading ${resp.url}`)
						}
					})
				await fetch("https://jsonplaceholder.typicode.com/posts")
					.then(resp => {
						if (!resp.ok) {
							throw new Error(`${resp.status} when downloading ${resp.url}`)
						}
					})

				await this.setState({ dataIsLoaded: true })
			} catch (e) {

				console.log('e = ', e)
				this.setState({ endedWithError: true })

			}
		})();
	}

	render() {
		return (
			<div className="App">
				CFT
        {this.state.endedWithError && <div>Error when downloading data</div>}
				{this.state.dataIsLoaded && <div>Data is loaded</div>}
				<List />
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
