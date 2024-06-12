

import { 
    GET_ACTIVITIES, DELETE_ACTIVITIES, GET_COUNTRIES, 
    GET_COUNTRY_DETAIL, CREATE_ACTIVITY, SEARCH_COUNTRY,
    FILTER_COUNTRY, ORDER_BY_NAME 
} from "../Actions/actions-type";

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001';

export const getCountries = () => async (dispatch) => {
    const { data } = await axios.get('/countries');
    return dispatch({ type: GET_COUNTRIES, payload: data });
};

export const getCountryDetail = (id) => async (dispatch) => {
    const { data } = await axios.get(`/countries/${id}`);
    return dispatch({ type: GET_COUNTRY_DETAIL, payload: data });
};

export const createActivity = (payload) => async (dispatch) => {
    try {
        const { data } = await axios.post('/activities', payload);
        return dispatch({ type: CREATE_ACTIVITY, payload: data });
    } catch (error) {
        console.error('Error in createActivity:', error.response.data);
    }
};

export const getActivities = () => async (dispatch) => {
    const { data } = await axios.get('/activities');
    return dispatch({ type: GET_ACTIVITIES, payload: data });
};



export const deleteActivities = (name) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`http://localhost:3001/activities/${name}`, {
          method: "DELETE",
        });
        const data = await response.json();
        dispatch({ type: "DELETE_ACTIVITY", payload: name });
      } catch (error) {
        console.error("Error deleting activity:", error);
      }
    };
  };
  

export const searchCountry = (name) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/countries?name=${name}`);
        return dispatch({ type: SEARCH_COUNTRY, payload: data });
    } catch (error) {
        console.error('Error in searchCountry:', error.response.data);
    }
};

export const countryFilter = (payload) => {
    return { type: FILTER_COUNTRY, payload };
};

export const ordeByName = (payload) => {
    return { type: ORDER_BY_NAME, payload };
};
