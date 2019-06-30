import * as types from './action-types';

const initialState = {
	reservedServices: [
		{
			serviceType: 'hair styling',
			date: '01-06-2019',
			time: '19:00'
		},
		{
			serviceType: 'make up',
			date: '02-06-2019',
			time: '13:00'
		},
		{
			serviceType: 'skin care',
			date: '01-06-2019',
			time: '15:00'
		}
	],
	calendar: [],
	servicesList: [],
	filterConditions: {
		sortByType: '',
		sortByName: ''
	},
	filteredServicesList: [],
	isReservationFormShown: false
};

function rootReducer(state = initialState, action) {

	if (action.type === types.RESERVE_SERVICE) {
		return Object.assign({}, state, {
			reservedServices: state.reservedServices.concat(action.payload)
		});
	}

	if (action.type === types.CALENDAR_DATA_LOADED) {
		return Object.assign({}, state, {
			calendar: state.calendar.concat(action.payload)
		});
	}

	if (action.type === types.SERVICES_DATA_LOADED) {
		const initList = state.servicesList.concat(action.payload)
		return Object.assign({}, state, {
			servicesList: initList,
			filteredServicesList: initList
		});
	}

	if (action.type === types.FILTER_SERVICE_LIST) {
		const nameValue = action.payload.sortByName;
		const typeValue = action.payload.sortByType;

		const searchFunction = (name, type) => {
			const regexName = new RegExp(`^${name}`, 'i');
			const regexType = new RegExp(`^${type}`, 'i');
			return state.servicesList
				.filter(el => regexName.test(el.company.name))
				.filter(el => regexType.test(el.type))
		}

		return Object.assign({}, state, {
			filterConditions: action.payload,
			filteredServicesList: searchFunction(nameValue, typeValue)
		});
	}

	if (action.type === types.TOGGLE_APP_FORM) {
		return {
			...state,
			isReservationFormShown: !state.isReservationFormShown
		}
	}

	return state;
};

export default rootReducer;