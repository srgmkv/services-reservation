import React from 'react';
import { connect } from 'react-redux';
import { toFilterServiceList } from '../state-controls/actions';

const mapStateToProps = state => {
	return {
		servicesList: state.servicesList,
		filterConditions: state.filterConditions,
		filteredServicesList: state.filteredServicesList
	}

};

function mapDispatchToProps(dispatch) {
	return {
		toFilterServiceList: value => dispatch(toFilterServiceList(value))
	};
}

class ServicesBlock extends React.Component {

	handleChange = (e) => {
		const { value, id } = e.target;

		const objCreator = (property) => (
			Object.assign({}, this.props.filterConditions, {
				[property]: value
			})
		)

		this.props.toFilterServiceList(objCreator(id));
	}
	handleServiceClick = (e) => {
		//e.target
		console.log('e.target', e.target.closest('.service-item').id)

	}
	render() {
		const serviceTypes = [...new Set(this.props.servicesList.map(el => el.type))];
		return (
			<>
				<select className="select-by-type" id="sortByType" onChange={this.handleChange}>
					<option value={''}>choose your service</option>
					{
						serviceTypes.map(el => (
							<option key={Math.round(Math.random() * 1e8)}>
								{el}
							</option>
						))
					}
				</select>

				<input type="text" id="sortByName" onChange={this.handleChange} />

				<div className="services-block">
					{
						this.props.filteredServicesList.map(el => (
							<div className={`service-item ${el.type.replace(' ', '')}`}
								key={Math.round(Math.random() * 1e8)}
								id={el.id}
								onClick={this.handleServiceClick}
							>
								<p>{el.type}</p>
								<p>{el.price} &#x20bd;</p>
								<p>{el.company.name}</p>
							</div>
						))
					}
				</div>
			</>
		)

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicesBlock);
