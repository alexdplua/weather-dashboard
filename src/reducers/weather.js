import {
    FETCH_WEATHER_SUCCESS
} from '../actions/actionsTypes';

const initialState = {
    fetch: true,
    data: null,
    error: null,
}



export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_WEATHER_SUCCESS:
            return {...state, fetch: false, data: payload, error: null}
        default:
            return state
    }
}
