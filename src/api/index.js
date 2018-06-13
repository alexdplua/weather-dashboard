import {
    FETCH_WEATHER_SUCCESS
} from '../actions/actionsTypes';

export const fetchWeather = () => async dispatch => {
    const xhr = new XMLHttpRequest();
    // xhr.open('GET', "https://api.weatherbit.io/v2.0/current?city=Dnipro&country=Ukraine&key=a307fa0bd54941f284d9c148bc173892", true);
    xhr.send();

    xhr.onreadystatechange = processRequest;
    let result = null
    function processRequest(e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            result = JSON.parse(xhr.responseText);
            console.log('dispatch');
            dispatch({
                type: FETCH_WEATHER_SUCCESS,
                payload: result
            })
        }
    }
}
