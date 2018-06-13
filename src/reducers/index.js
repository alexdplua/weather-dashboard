import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import weather from './weather';
import forecast from './forecast';
import chartWidget from './chartWidget';

export default combineReducers({
    routing: routerReducer,
    weather,
    forecast,
    chartWidget
});
