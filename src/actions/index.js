import {
    FETCH_WEATHER_START,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,

    FETCH_FORECAST_START,
    FETCH_FORECAST_SUCCESS,
    FETCH_FORECAST_FAILURE,

    CHART_WIDGET_DATE,
    CALENDAR_WIDGET_DATE
} from './actionsTypes';


export const fetchWeatherApi = () =>  dispatch => {
    dispatch({type: FETCH_WEATHER_START})
        return fetch("https://api.weatherbit.io/v2.0/current?city=Dnipro&country=Ukraine&key=a307fa0bd54941f284d9c148bc173892")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: FETCH_WEATHER_SUCCESS,
                    payload: json,
                })
                return json;
            })
            .catch(error => dispatch({
                type: FETCH_WEATHER_FAILURE,
                payload: error,
            }));
}

export const fetchForecast = () =>  dispatch => {
    dispatch({type: FETCH_FORECAST_START})

    return fetch("https://api.weatherbit.io/v2.0/forecast/daily?&lat=48.4593&lon=35.03865&key=a307fa0bd54941f284d9c148bc173892")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            dispatch({
                type: FETCH_FORECAST_SUCCESS,
                payload: json,
            })
            return json;
        })
        .catch(error => dispatch({
            type: FETCH_FORECAST_FAILURE,
            payload: error,
        }));
}


const handleErrors=(response)=> {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}


export const chartWidget = (data) => async dispatch => {
    dispatch({
        type: CHART_WIDGET_DATE,
        payload: data,
    })
}


export const calendarWidget = (data) => async dispatch => {
    dispatch({
        type: CALENDAR_WIDGET_DATE,
        payload: data,
    })
}
