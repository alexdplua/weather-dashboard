import {
    FETCH_FORECAST_SUCCESS
} from '../actions/actionsTypes';

const initialState = {}


export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_FORECAST_SUCCESS:
            return payload
        default:
            return state
    }
}
