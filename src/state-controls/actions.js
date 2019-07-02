import * as types from './action-types';

export function reserveService(payload) {
  return { type: types.RESERVE_SERVICE, payload }
};

export function cancelService(payload) {

  console.log('id',payload )
  return { type: types.CANCEL_SERVICE, payload }
};

export function toFilterServiceList(payload) {
  return { type: types.FILTER_SERVICE_LIST, payload }
};

export function toggleAppForm(payload) {
  return { type: types.TOGGLE_APP_FORM, payload }
};

export function toggleModal(payload) {
  return { type: types.TOGGLE_MODAL, payload }
};

export function sendDateTime(payload) {
  return { type: types.SEND_SELECTED_DATE_TIME, payload }
};

export function updateCalendar(payload) {
  return { type: types.UPDATE_CALENDAR, payload }
};

export function getCalendarData() {
  return function (dispatch) {
    return fetch("http://localhost:3000/dates.json")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: types.UPDATE_CALENDAR, payload: json });
      });
  };
}

export function getServiceListData() {
  return function (dispatch) {
    return fetch("http://localhost:3000/services.json")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: types.SERVICES_DATA_LOADED, payload: json });

      });
  };
}