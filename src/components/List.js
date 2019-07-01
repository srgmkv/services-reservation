import React from 'react';
import { connect } from 'react-redux';
import { cancelService, updateCalendar } from '../state-controls/actions';
import dfs from './dfs';


const mapStateToProps = state => {
	return {
		reservedServices: state.reservedServices,
		calendar: state.calendar
	}
};

function mapDispatchToProps(dispatch) {
	return {
		cancelService: (value) => dispatch(cancelService(value)),
		updateCalendar: (value) => dispatch(updateCalendar(value))
	};
}

const reservedServiceList = (props) => {
	const sorted = props.reservedServices.sort((a, b) => new Date(`${b.date} ${b.time}`) - new Date(`${a.date} ${a.time}`))

	const removeService = (item) => {
		const { date, time, id, serviceId } = item
		props.cancelService(id);
		const dataForUpdateCalendar = { serviceId, date, time }
		props.updateCalendar(dfs(props.calendar, dataForUpdateCalendar));

	}

	return (
		<div className="reserved-services-list">
			<div id="reserved-list-header">My reservations</div>

			{sorted
				.map(el => (
					<div className="reserved-item" id={el.id}
						key={Math.round(Math.random() * 1e8)}>
						{el.serviceType} {el.company} {el.date} {el.time}
						<span className="cancel" onClick={() => removeService(el)}>cancel</span>
					</div>
				))}

		</div>
	)
};

const List = connect(mapStateToProps, mapDispatchToProps)(reservedServiceList);
export default List;