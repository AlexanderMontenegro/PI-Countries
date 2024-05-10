import {SEARCH_PAIS_REQUEST,SEARCH_PAIS_SUCCESS,SEARCH_PAIS_FAILURE} from '../Actions/actions-type';

let initialState ={
    allPaises: [],
    allCiudades: [],
    allContinentes: [],
    loading: false,
    error: null
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_PAIS_REQUEST:
            return { ...state, loading: true, error: null };
        case SEARCH_PAIS_SUCCESS:
            return { ...state, loading: false, allPaises: action.payload, error: null };
        case SEARCH_PAIS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default rootReducer;