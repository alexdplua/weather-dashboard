import {
    FETCH_FORECAST_SUCCESS,
    FETCH_FORECAST_START
} from '../actions/actionsTypes';

const initialState = {
    fetch: false,
    data: null,
    error: null,
}


export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_FORECAST_START:
            return {...state, fetch: true}
        case FETCH_FORECAST_SUCCESS:
            return {...state, fetch: false, data: payload, error: null}
        default:
            return state
    }
}
