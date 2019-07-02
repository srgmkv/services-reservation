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

//Компонент-контейнер для полей фильтрации и отрисовки каталога услуг
const ServicesBlock = (props) => {

	// обработка изменения элементов (для фильтрации):
	// клик на элемент списка с типом услуг; поле поиска услуги по названию компании.
	// По значению данных полей фильтруем отображение услуг
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
					header="Sort by type"
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
