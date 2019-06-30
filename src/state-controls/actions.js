import * as types from './action-types';

export function reserveService(payload) {
  return { type: types.RESERVE_SERVICE, payload }
};

export function toFilterServiceList(payload) {
  return { type: types.FILTER_SERVICE_LIST, payload }
};

export function toggleAppForm(payload) {
  return { type: types.TOGGLE_APP_FORM, payload }
};

export function getCalendarData() {
  return function (dispatch) {
    return fetch("http://localhost:3000/dates.json")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: types.CALENDAR_DATA_LOADED, payload: json });
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
/*
export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}


export function fetchArticleDetails() {
  return function(dispatch) {
    return axios.get("https://api.myjson.com/bins/19dtxc")
      .then(({ data }) => {
      dispatch(setArticleDetails(data));
    });
  };
}

import { SET_ARTICLE_DETAILS } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SET_ARTICLE_DETAILS:
      return { data: action.payload };
    default:
      return state;
  }
}*/