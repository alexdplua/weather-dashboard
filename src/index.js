import './scss/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import reducers from './reducers'

import Layout from './components/layout';
import Row from './components/row';
import WeatherWidgetContainer from './components/weatherWidget';
import ChartContainer from './components/chart';
import CalendarContainer from './components/calendar';
import ChartWidget from './components/chart/chartWidget';
import CalendarWidget from './components/calendar/calendarWidget';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

// const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
    <Provider store={store}>
        <Layout>
            <WeatherWidgetContainer/>
            <div className={'row'}>
                <ChartContainer/>
                <ChartWidget/>
            </div>
            <div className={'row'}>
                <CalendarContainer/>
                <CalendarWidget/>
            </div>
        </Layout>
    </Provider>,
    document.getElementById('root')
);






