import axios from 'axios';
import {
    SEARCH_PAIS_REQUEST,
    SEARCH_PAIS_SUCCESS,
    SEARCH_PAIS_FAILURE
} from './actions-type';

export const searchPais = (query) => {
    return async (dispatch) => {
        dispatch({ type: SEARCH_PAIS_REQUEST });

        try {
            const response = await axios.get(`URL_DE_TU_API/search?query=${query}`);
            dispatch({
                type: SEARCH_PAIS_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: SEARCH_PAIS_FAILURE,
                payload: error.message
            });
        }
    };
};