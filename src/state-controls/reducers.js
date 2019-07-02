import * as types from './action-types';

const initialState = {
	reservedServices: [
		{
			date: "03-06-2019",
			time: "16:00",
			serviceId: "hm6awg1lev",
			serviceType: "hair styling",
			company: "Glyph Salon",
			id: 1
		},
		{
			date: "03-06-2019",
			time: "16:00",
			serviceId: "hm6awg1lev",
			serviceType: "hair styfsdfling",
			company: "Glyph Sfalon",
			id: 1
		},
		{
			date: "03-06-2019",
			time: "16:00",
			serviceId: "hm6awg1lev",
			serviceType: "hair ",
			company: "Glyph ",
			id: 1
		},
		{
			date: "03-06-2019",
			time: "16:00",
			serviceId: "hm6awg1lev",
			serviceType: "hair styling",
			company: "Glydddh Sdalddon",
			id: 1
		},
		{
			date: "03-06-2019",
			time: "16:00",
			serviceId: "hm6awg1lev",
			serviceType: "haidadsdr stsdayling",
			company: "Glyd",
			id: 1
		}

	],
	calendar: {},
	servicesList: [],
	filterConditions: {
		sortByType: '',
		sortByName: ''
	},
	filteredServicesList: [],
	isReservationFormShown: false,
	isModalShown: false,
	dataToResForm: '',
	selectedDateTime:
	{
		date: '',
		time: ''
	}
};

function rootReducer(state = initialState, action) {

	if (action.type === types.SEND_SELECTED_DATE_TIME) {
		return Object.assign({}, state, {
			selectedDateTime: action.payload
		});
	}


	if (action.type === types.RESERVE_SERVICE) {
		return Object.assign({}, state, {
			reservedServices: state.reservedServices.concat(action.payload),
			selectedDateTime: { date: '', time: '' },
			filteredServicesList: state.servicesList

		});
	}

	if (action.type === types.CANCEL_SERVICE) {
		return Object.assign({}, state, {
			reservedServices: state.reservedServices
				.filter(el => el.id !== action.payload)

		});
	}

	if (action.type === types.UPDATE_CALENDAR) {
		return Object.assign({}, state, {
			calendar: action.payload

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
			isReservationFormShown: !state.isReservationFormShown,
			dataToResForm: action.payload || '',
			filteredServicesList: state.servicesList,
			selectedDateTime: { date: '', time: '' },
		}
	}

	if (action.type === types.TOGGLE_MODAL) {
		return {
			...state,
			isModalShown: !state.isModalShown
		}
	}

	return state;
};

export default rootReducer;