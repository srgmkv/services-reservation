import React from 'react';
import { connect } from 'react-redux';
import { toFilterServiceList, toggleAppForm } from '../state-controls/actions';

const mapStateToProps = state => {
	return {
		servicesList: state.servicesList,
		filterConditions: state.filterConditions,
		filteredServicesList: state.filteredServicesList,
		isReservationFormShown: state.isReservationFormShown
	}
};

/* function mapDispatchToProps(dispatch) {
	return {
		toFilterServiceList: value => dispatch(toFilterServiceList(value)),
		toggleAppForm: (value) => dispatch(toggleAppForm(value))
	};
} */

class ServicesBlock extends React.Component {

	handleChange = (e) => {
		const { value, id } = e.target;

		const objCreator = (property) => (
			{
				...this.props.filterConditions,
				[property]: value
			}
		);
		this.props.toFilterServiceList(objCreator(id));
	}

	handleClickByServiceItem = (elem) => {
		const data = {
			serviceId: elem.id,
			company: elem.company.name,
			serviceType: elem.type
		}
		this.props.toggleAppForm(data);
	}

	render() {
		const serviceTypes = [...new Set(this.props.servicesList.map(el => el.type))];
		return (
			<>
				<select className="select-by-type" id="sortByType" onChange={this.handleChange}>
					<option value={''}>choose your service</option>
					{
						serviceTypes.map((el, index) => <option key={index}>{el}</option>)
					}
				</select>

				<input type="text" id="sortByName" onChange={this.handleChange} />

				<div className="services-block">
					{this.props.filteredServicesList.map((el, index) => (

						<div className={`service-item ${el.type.replace(' ', '')}`}
							key={index}
							onClick={() => this.handleClickByServiceItem(el)}>
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

export default connect(mapStateToProps, { toFilterServiceList, toggleAppForm })(ServicesBlock);
