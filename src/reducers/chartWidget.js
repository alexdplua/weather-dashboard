import {
    CHART_WIDGET_DATE
} from '../actions/actionsTypes';
import moment from 'moment';


const initialState = moment()


export default (state = initialState, {type, payload}) => {
    switch (type) {
        case CHART_WIDGET_DATE:
            return payload
        default:
            return state
    }
}
