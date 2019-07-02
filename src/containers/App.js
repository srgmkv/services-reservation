import React from 'react';
import { connect } from 'react-redux';

import MainForm from '../components/MainFom';
import ReservationForm from '../containers/ReservationForm';
import { getCalendarData, getServiceListData } from '../state-controls/actions';

const mapStateToProps = state => {
	return {
		resFormShown: state.isReservationFormShown
	}
};

//Базовый компонент
class App extends React.Component {
//загрузим даннные с информацией об услугах и информацию о доступности их к заказу
	componentDidMount() {
		this.props.getCalendarData();
		this.props.getServiceListData();
	}

	render() {
		return (
			<div className="App"> 
			{/*в приложении 2 страницы: главная с инфо об услугах 
			 и форма бронированияс выбором даты и времени,
			 с помощью значения из состояния будем скрывать или показывать их*/}
				{this.props.resFormShown ? < ReservationForm /> : <MainForm />}
			</div>
			);
		}
	}
	
	
	export default connect(
		mapStateToProps,
	{getCalendarData, getServiceListData }
			)(App);
