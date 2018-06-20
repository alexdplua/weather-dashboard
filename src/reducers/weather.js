import {
    FETCH_WEATHER_START,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE
} from '../actions/actionsTypes';

const initialState = {
    fetch: false,
    data: null,
    error: null,
}


export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_WEATHER_START:
            return Object.assign({}, state, {
                fetch: true,
                error: null
            })

        case FETCH_WEATHER_SUCCESS:
            return Object.assign(...state, {fetch: false, data: payload, error: null})
        default:
            return state
    }
}
