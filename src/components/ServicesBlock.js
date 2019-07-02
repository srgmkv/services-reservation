import React from 'react';
import { connect } from 'react-redux';
import { toFilterServiceList, toggleAppForm } from '../state-controls/actions';
import ListOfServices from './ListOfServices';
import Select from './Select';

const mapStateToProps = state => {
	return {
		servicesList: state.servicesList,
		filterConditions: state.filterConditions,
		filteredServicesList: state.filteredServicesList
	}
};

class ServicesBlock extends React.Component {

	// обработка изменения элементов (для фильтрации):
	// клик на элемент списка с типом услуг; поле поиска услуги по названию
	// по значению данных полей фильтруем представленные услуги  
	handleChange = (e) => {
		const { value, id } = e.target;
	  //передаем данные в редьюсер для фильтрации
		this.props.toFilterServiceList({...this.props.filterConditions, [id]: value}); 
	}

	handleClickByServiceItem = (elem) => { //обработка клика по услуге
		const data = {
			serviceId: elem.id,
			company: elem.company.name,
			serviceType: elem.type
		}
		this.props.toggleAppForm(data); //передаем объект с данными услуги в редъюсер и для формы бронирования
	}

	render() {
		// для выпадающего списка сделам массив уникальный значений типов услуг для дальнейщей фильтрации
		const serviceTypes = [...new Set(this.props.servicesList.map(el => el.type))];
		return (
			<>
				<Select name="sortByType"
					onChange={this.handleChange}
					header="choose your service"
					items={serviceTypes}
				/>

				<input type="text" id="sortByName" onChange={this.handleChange} />

				<ListOfServices
					items={this.props.filteredServicesList}
					onClick={this.handleClickByServiceItem}
				/>

			</>
		)

	}
}

export default connect(mapStateToProps, { toFilterServiceList, toggleAppForm })(ServicesBlock);
