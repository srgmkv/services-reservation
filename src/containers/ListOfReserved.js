import React from 'react';
import { connect } from 'react-redux';
import { cancelService, updateCalendar } from '../state-controls/actions';
import updateCalFunc from './updateCalFunc';
import ReservedServices from '../components/ReservedServices';
import '../ Styles/ReservedServices.css';
//Компонент-контейнер содержит логику отрисовки списка заборонированных услуг

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
	//сортировка зарезервированных улсуг по дате
	const sorted = props.reservedServices.sort((a, b) => new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`))

	const removeService = (item) => {
		props.cancelService(item.id);
		props.updateCalendar(updateCalFunc(props.calendar, item));
	}

	return (
		<ReservedServices 
		items={sorted}
		onClick={removeService}
		/>
	)
};

const List = connect(mapStateToProps, mapDispatchToProps)(reservedServiceList);
export default List;