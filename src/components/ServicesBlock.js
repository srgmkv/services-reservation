import React from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../state-controls/actions';

const mapStateToProps = state => {
	return {
		servicesList: state.servicesList,
		searchText: state.searchText,
		filteredServicesList: state.filteredServicesList
	}

};

function mapDispatchToProps(dispatch) {
	return {
		filterByName: value => dispatch(filterByName(value))
	};
}

class ServicesBlock extends React.Component {

	handleChange = (e) => {
		const value = e.target.value;
		this.props.filterByName(value);
	}

	render() {
		return (
			<>
				<select className="select-by-type">
					<option>choose your service</option>
					{[...new Set(this.props.servicesList.map(el => el.type))].map(el => <option>{el}</option>)}
				</select>

				<input type="text" id="text" onChange={this.handleChange} />

				<div className="services-block">
					{this.props.filteredServicesList.map(el => (
						<div className="service-item" key={Math.round(Math.random() * 1e8)}>
							<p>{el.type}</p>
							<p>{el.price} &#x20bd;</p>
							<p>{el.company.name}</p>
						</div>
					))}
				</div>
			</>
		)

	}
}


export default connect(mapStateToProps, mapDispatchToProps )(ServicesBlock);
