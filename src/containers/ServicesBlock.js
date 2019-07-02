import React from 'react';
import { connect } from 'react-redux';
import { toFilterServiceList, toggleAppForm } from '../state-controls/actions';
import ListOfServices from '../components/ListOfServices';
import Select from '../components/Select';

const mapStateToProps = state => {
	return {
		servicesList: state.servicesList,
		filterConditions: state.filterConditions,
		filteredServicesList: state.filteredServicesList
	}
};

const ServicesBlock = (props) => {

	// обработка изменения элементов (для фильтрации):
	// клик на элемент списка с типом услуг; поле поиска услуги по названию
	// по значению данных полей фильтруем представленные услуги  
	const handleChange = (e) => {
		const { value, id } = e.target;
		//передаем данные в редьюсер для фильтрации
		props.toFilterServiceList({ ...props.filterConditions, [id]: value });
	}

	const handleClickByServiceItem = (elem) => { //обработка клика по услуге
		const data = {
			serviceId: elem.id,
			company: elem.company.name,
			serviceType: elem.type
		}
		props.toggleAppForm(data); //передаем объект с данными услуги в редъюсер и для формы бронирования
	}

	// сделам массив уникальный значений типов услуг для дальнейщей фильтрации для селекта
	const serviceTypes = [...new Set(props.servicesList.map(el => el.type))];
	return (
		<>
			<div className="inputs">
				<Select name="sortByType"
					onChange={handleChange}
					header="Type of service"
					items={serviceTypes}
				/>

				<input type="text" id="sortByName" onChange={handleChange} placeholder="search by company" />
			</div>
			<ListOfServices
				items={props.filteredServicesList}
				onClick={handleClickByServiceItem}
			/>
		</>
	)
}

export default connect(mapStateToProps, { toFilterServiceList, toggleAppForm })(ServicesBlock);
