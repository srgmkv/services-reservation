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
  searchText: '',
  filteredServicesList: []
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

  if (action.type === types.SEARCH_TEXT) {
    const regex = new RegExp(`^${action.payload}`, 'i');
    const filteredServicesList = state.servicesList.filter(el => regex.test(el.company.name))
    return Object.assign({}, state, {
      searchText: action.payload,
      filteredServicesList: filteredServicesList
    });
  


}



return state;
};

export default rootReducer;