import {
    CHART_WIDGET_DATE
} from '../actions/actionsTypes';
import {
    getChartWidgetData
} from '../selectors';


const initialState = {}


export default (state = initialState, {type, payload}) => {
    switch (type) {
        case CHART_WIDGET_DATE:
            return payload
        default:
            return state
    }
}
