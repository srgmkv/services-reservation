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
		props.cancelService(item.id);
		props.updateCalendar(dfs(props.calendar, item));
	}

	return (
		<div className="reserved-services-list">
			<div id="reserved-list-header">My reservations</div>

			{sorted
				.map(el => (
					<div className="reserved-item" id={el.id}
						key={el.id}>
						{el.serviceType} {el.company} {el.date} {el.time}
						<span className="cancel" onClick={() => removeService(el)}>cancel</span>
					</div>
				))}

		</div>
	)
};

const List = connect(mapStateToProps, mapDispatchToProps)(reservedServiceList);
export default List;