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

export const fetchWeatherApi = () => async dispatch => {
    dispatch({type: FETCH_WEATHER_START})
    try {
        const response = await fetchWeather1();
        console.log('response', response);
        dispatch({
            type: FETCH_WEATHER_SUCCESS,
            payload: response
        })
    } catch  (err) {
        dispatch({
            type: FETCH_WEATHER_FAILURE,
            payload: err,
        })
    }
}

export const fetchWeather1 = () => {
    return fetch('https://api.weatherbit.io/v2.0/current?city=Dnipro&country=Ukraine&key=a307fa0bd54941f284d9c148bc173892')
        .then(response => response.json())
        .then(data => {
            /*this.props.fetchWeatherApi(data)
            this.setState({data: data, isLoading: false})*/
            // return data
            return {
                count: 1,
                data: [{
                    app_temp:
                        19.2,
                    city_name:
                        'Dnipro',
                    clouds:
                        100,
                    country_code:
                        'UA',
                    datetime:
                        '2018-06-08:06',
                    dewpt:
                        6.7,
                    dhi:
                        124.81,
                    dni:
                        736.221,
                    elev_angle:
                        40.1333,
                    ghi:
                        599.547,
                    h_angle:
                        -33.8,
                    lat:
                        48.4593,
                    lon:
                        35.03865,
                    ob_time:
                        '2018-06-08 06:30',
                    pod:
                        'd',
                    precip:
                        2.22045e-16,
                    pres:
                        1004.4,
                    rh:
                        42,
                    slp:
                        1022,
                    snow:
                        0,
                    state_code:
                        '04',
                    station:
                        'UKDD',
                    sunrise:
                        '01:38',
                    sunset:
                        '17:38',
                    temp:
                        20,
                    timezone:
                        'Europe/Kiev',
                    ts:
                        1528439400,
                    uv:
                        6.76378,
                    vis:
                        1.5,
                    weather:
                        {icon: 'r01d', code: '500', description: 'Light rain'},
                    wind_cdir:
                        'E',
                    wind_cdir_full:
                        'east',
                    wind_dir:
                        80,
                    wind_spd:
                        2
                }]
            }

        });
}

/*
export const fetchWeatherApi = (data) => dispatch => {
    dispatch({
        type: FETCH_WEATHER_SUCCESS,
        payload: data
    })
}
*/


export const fetchWeather = () => async dispatch => {
    dispatch({type: FETCH_WEATHER_START})
    try {
        // const weather = fetchWeatherApi()
        // const xhr = new XMLHttpRequest();
        // xhr.open('GET', "https://api.weatherbit.io/v2.0/current?city=Dnipro&country=Ukraine&key=a307fa0bd54941f284d9c148bc173892", true);
        // xhr.send();

        const data = {
            count: 1,
            data: [{
                app_temp:
                    19.2,
                city_name:
                    'Dnipro',
                clouds:
                    100,
                country_code:
                    'UA',
                datetime:
                    '2018-06-08:06',
                dewpt:
                    6.7,
                dhi:
                    124.81,
                dni:
                    736.221,
                elev_angle:
                    40.1333,
                ghi:
                    599.547,
                h_angle:
                    -33.8,
                lat:
                    48.4593,
                lon:
                    35.03865,
                ob_time:
                    '2018-06-08 06:30',
                pod:
                    'd',
                precip:
                    2.22045e-16,
                pres:
                    1004.4,
                rh:
                    42,
                slp:
                    1022,
                snow:
                    0,
                state_code:
                    '04',
                station:
                    'UKDD',
                sunrise:
                    '01:38',
                sunset:
                    '17:38',
                temp:
                    20,
                timezone:
                    'Europe/Kiev',
                ts:
                    1528439400,
                uv:
                    6.76378,
                vis:
                    1.5,
                weather:
                    {icon: 'r01d', code: '500', description: 'Light rain'},
                wind_cdir:
                    'E',
                wind_cdir_full:
                    'east',
                wind_dir:
                    80,
                wind_spd:
                    2
            }]
        }


        dispatch({
            type: FETCH_WEATHER_SUCCESS,
            payload: data
        })

        /*const processRequest = e => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const result = JSON.parse(xhr.responseText);
                console.log('dispatch');
                dispatch({
                    type: FETCH_WEATHER_SUCCESS,
                    payload: result
                })
            }
        }
        xhr.onreadystatechange = processRequest;*/
    } catch (err) {
        dispatch({
            type: FETCH_WEATHER_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const fetchForecast = () => async dispatch => {
    dispatch({type: FETCH_FORECAST_START})
    try {
        /* const xhr = new XMLHttpRequest();
         xhr.open('GET', 'https://api.weatherbit.io/v2.0/forecast/daily?&lat=48.4593&lon=35.03865&key=a307fa0bd54941f284d9c148bc173892', true);
         xhr.send();*/

        const data =
            {
                'data': [{
                    'wind_cdir': 'SSE',
                    'app_min_temp': 22,
                    'wind_gust_spd': 12.0177,
                    'rh': 59,
                    'wind_spd': 2.57768,
                    'pop': 10,
                    'wind_cdir_full': 'south-southeast',
                    'app_max_temp': 27.7,
                    'slp': 1004.97,
                    'clouds_mid': 42,
                    'snow_depth': 0,
                    'valid_date': '2018-06-13',
                    'pres': 997.752,
                    'clouds_low': 27,
                    'dewpt': 16.1,
                    'snow': 0,
                    'uv': 3.41179,
                    'wind_dir': 156,
                    'ozone': 336.016,
                    'weather': {'icon': 'c04d', 'code': 804, 'description': 'Overcast clouds'},
                    'clouds_hi': 87,
                    'precip': 0.702148,
                    'max_dhi': null,
                    'max_temp': 28,
                    'ts': 1528837260,
                    'datetime': '2018-06-13',
                    'temp': 25.2,
                    'min_temp': 21.6,
                    'clouds': 95,
                    'vis': 0
                }, {
                    'wind_cdir': 'SE',
                    'app_min_temp': 19.6,
                    'wind_gust_spd': 6.55963,
                    'rh': 64,
                    'wind_spd': 1.30197,
                    'pop': 15,
                    'wind_cdir_full': 'southeast',
                    'app_max_temp': 30.9,
                    'slp': 1006.31,
                    'clouds_mid': 12,
                    'snow_depth': 0,
                    'valid_date': '2018-06-14',
                    'pres': 999.064,
                    'clouds_low': 28,
                    'dewpt': 16.8,
                    'snow': 0,
                    'uv': 5.8092,
                    'wind_dir': 124,
                    'ozone': 335.669,
                    'weather': {'icon': 'c03d', 'code': 803, 'description': 'Broken clouds'},
                    'clouds_hi': 33,
                    'precip': 0.234375,
                    'max_dhi': null,
                    'max_temp': 31.2,
                    'ts': 1528923660,
                    'datetime': '2018-06-14',
                    'temp': 25.2,
                    'min_temp': 19.2,
                    'clouds': 60,
                    'vis': 0
                }, {
                    'wind_cdir': 'E',
                    'app_min_temp': 20.9,
                    'wind_gust_spd': 12.5037,
                    'rh': 58,
                    'wind_spd': 3.43923,
                    'pop': 10,
                    'wind_cdir_full': 'east',
                    'app_max_temp': 29.2,
                    'slp': 1009.6,
                    'clouds_mid': 28,
                    'snow_depth': 0,
                    'valid_date': '2018-06-15',
                    'pres': 1002.32,
                    'clouds_low': 6,
                    'dewpt': 15.7,
                    'snow': 0,
                    'uv': 6.03636,
                    'wind_dir': 97,
                    'ozone': 341.609,
                    'weather': {'icon': 'c03d', 'code': 803, 'description': 'Broken clouds'},
                    'clouds_hi': 42,
                    'precip': 0.566406,
                    'max_dhi': null,
                    'max_temp': 29.7,
                    'ts': 1529010060,
                    'datetime': '2018-06-15',
                    'temp': 25.1,
                    'min_temp': 20.7,
                    'clouds': 57,
                    'vis': 0
                }, {
                    'wind_cdir': 'ENE',
                    'app_min_temp': 15.4,
                    'wind_gust_spd': 13.2292,
                    'rh': 56,
                    'wind_spd': 4.855,
                    'pop': 0,
                    'wind_cdir_full': 'east-northeast',
                    'app_max_temp': 24.6,
                    'slp': 1016.74,
                    'clouds_mid': 0,
                    'snow_depth': 0,
                    'valid_date': '2018-06-16',
                    'pres': 1009.33,
                    'clouds_low': 0,
                    'dewpt': 9.2,
                    'snow': 0,
                    'uv': 9.9466,
                    'wind_dir': 66,
                    'ozone': 330.154,
                    'weather': {'icon': 'c01d', 'code': 800, 'description': 'Clear Sky'},
                    'clouds_hi': 0,
                    'precip': 0,
                    'max_dhi': null,
                    'max_temp': 25.3,
                    'ts': 1529096460,
                    'datetime': '2018-06-16',
                    'temp': 19.1,
                    'min_temp': 15.4,
                    'clouds': 0,
                    'vis': 0
                }, {
                    'wind_cdir': 'ENE',
                    'app_min_temp': 14,
                    'wind_gust_spd': 11.4172,
                    'rh': 40,
                    'wind_spd': 3.51385,
                    'pop': 0,
                    'wind_cdir_full': 'east-northeast',
                    'app_max_temp': 24.9,
                    'slp': 1017.9,
                    'clouds_mid': 0,
                    'snow_depth': 0,
                    'valid_date': '2018-06-17',
                    'pres': 1010.49,
                    'clouds_low': 0,
                    'dewpt': 5,
                    'snow': 0,
                    'uv': 9.14067,
                    'wind_dir': 72,
                    'ozone': 331.641,
                    'weather': {'icon': 'c02d', 'code': 801, 'description': 'Few clouds'},
                    'clouds_hi': 12,
                    'precip': 0,
                    'max_dhi': null,
                    'max_temp': 25.7,
                    'ts': 1529182860,
                    'datetime': '2018-06-17',
                    'temp': 20.1,
                    'min_temp': 14,
                    'clouds': 12,
                    'vis': 0
                }, {
                    'wind_cdir': 'ENE',
                    'app_min_temp': 16.3,
                    'wind_gust_spd': 11.0151,
                    'rh': 56,
                    'wind_spd': 5.15891,
                    'pop': 0,
                    'wind_cdir_full': 'east-northeast',
                    'app_max_temp': 27.1,
                    'slp': 1013.4,
                    'clouds_mid': 0,
                    'snow_depth': 0,
                    'valid_date': '2018-06-18',
                    'pres': 1001.86,
                    'clouds_low': 0,
                    'dewpt': 11.2,
                    'snow': 0,
                    'uv': 3.60001,
                    'wind_dir': 76,
                    'ozone': 322.13,
                    'weather': {'icon': 'c03d', 'code': 803, 'description': 'Broken clouds'},
                    'clouds_hi': 52,
                    'precip': 0,
                    'max_dhi': null,
                    'max_temp': 27.9,
                    'ts': 1529269260,
                    'datetime': '2018-06-18',
                    'temp': 21.1,
                    'min_temp': 15.7,
                    'clouds': 52,
                    'vis': 24.1
                }, {
                    'wind_cdir': 'ENE',
                    'app_min_temp': 18.3,
                    'wind_gust_spd': 10.0215,
                    'rh': 53,
                    'wind_spd': 5.12866,
                    'pop': 0,
                    'wind_cdir_full': 'east-northeast',
                    'app_max_temp': 28.1,
                    'slp': 1012.28,
                    'clouds_mid': 34,
                    'snow_depth': 0,
                    'valid_date': '2018-06-19',
                    'pres': 1000.72,
                    'clouds_low': 7,
                    'dewpt': 13,
                    'snow': 0,
                    'uv': 7.2089,
                    'wind_dir': 71,
                    'ozone': 320.032,
                    'weather': {'icon': 'c03d', 'code': 803, 'description': 'Broken clouds'},
                    'clouds_hi': 42,
                    'precip': 0,
                    'max_dhi': null,
                    'max_temp': 29.1,
                    'ts': 1529355660,
                    'datetime': '2018-06-19',
                    'temp': 23.9,
                    'min_temp': 17.6,
                    'clouds': 60,
                    'vis': 24.1
                }, {
                    'wind_cdir': 'ENE',
                    'app_min_temp': 21.3,
                    'wind_gust_spd': 11.2265,
                    'rh': 51,
                    'wind_spd': 4.81512,
                    'pop': 0,
                    'wind_cdir_full': 'east-northeast',
                    'app_max_temp': 30.9,
                    'slp': 1011.99,
                    'clouds_mid': 51,
                    'snow_depth': 0,
                    'valid_date': '2018-06-20',
                    'pres': 1000.47,
                    'clouds_low': 24,
                    'dewpt': 14.6,
                    'snow': 0,
                    'uv': 6.97628,
                    'wind_dir': 67,
                    'ozone': 327.621,
                    'weather': {'icon': 'c03d', 'code': 803, 'description': 'Broken clouds'},
                    'clouds_hi': 0,
                    'precip': 0,
                    'max_dhi': null,
                    'max_temp': 32.1,
                    'ts': 1529442060,
                    'datetime': '2018-06-20',
                    'temp': 26.3,
                    'min_temp': 21.3,
                    'clouds': 60,
                    'vis': 24.1
                }, {
                    'wind_cdir': 'ENE',
                    'app_min_temp': 21.2,
                    'wind_gust_spd': 10.0134,
                    'rh': 50,
                    'wind_spd': 3.83241,
                    'pop': 0,
                    'wind_cdir_full': 'east-northeast',
                    'app_max_temp': 31.5,
                    'slp': 1011.67,
                    'clouds_mid': 1,
                    'snow_depth': 0,
                    'valid_date': '2018-06-21',
                    'pres': 1000.25,
                    'clouds_low': 18,
                    'dewpt': 15,
                    'snow': 0,
                    'uv': 8.83296,
                    'wind_dir': 76,
                    'ozone': 328.47,
                    'weather': {'icon': 'c03d', 'code': 803, 'description': 'Broken clouds'},
                    'clouds_hi': 30,
                    'precip': 0,
                    'max_dhi': null,
                    'max_temp': 32.1,
                    'ts': 1529528460,
                    'datetime': '2018-06-21',
                    'temp': 27.1,
                    'min_temp': 20.6,
                    'clouds': 48,
                    'vis': 24.1
                }, {
                    'wind_cdir': 'ENE',
                    'app_min_temp': 22.6,
                    'wind_gust_spd': 4.8611,
                    'rh': 50,
                    'wind_spd': 2.42986,
                    'pop': 25,
                    'wind_cdir_full': 'east-northeast',
                    'app_max_temp': 30.8,
                    'slp': 1008.25,
                    'clouds_mid': 0,
                    'snow_depth': 0,
                    'valid_date': '2018-06-22',
                    'pres': 996.67,
                    'clouds_low': 18,
                    'dewpt': 15.5,
                    'snow': 0,
                    'uv': 9.37489,
                    'wind_dir': 57,
                    'ozone': 329.904,
                    'weather': {'icon': 'c02d', 'code': 802, 'description': 'Scattered clouds'},
                    'clouds_hi': 34,
                    'precip': 2.25,
                    'max_dhi': null,
                    'max_temp': 32,
                    'ts': 1529614860,
                    'datetime': '2018-06-22',
                    'temp': 27.1,
                    'min_temp': 22.1,
                    'clouds': 39,
                    'vis': 23.025
                }, {
                    'wind_cdir': 'SW',
                    'app_min_temp': 21.8,
                    'wind_gust_spd': 5.22978,
                    'rh': 69,
                    'wind_spd': 2.96505,
                    'pop': 65,
                    'wind_cdir_full': 'southwest',
                    'app_max_temp': 27.6,
                    'slp': 1006.32,
                    'clouds_mid': 10,
                    'snow_depth': 0,
                    'valid_date': '2018-06-23',
                    'pres': 994.765,
                    'clouds_low': 0,
                    'dewpt': 17.5,
                    'snow': 0,
                    'uv': 3.66773,
                    'wind_dir': 232,
                    'ozone': 322.305,
                    'weather': {'icon': 'r01d', 'code': 500, 'description': 'Light rain'},
                    'clouds_hi': 85,
                    'precip': 12.25,
                    'max_dhi': null,
                    'max_temp': 26.2,
                    'ts': 1529701260,
                    'datetime': '2018-06-23',
                    'temp': 23.8,
                    'min_temp': 19.6,
                    'clouds': 85,
                    'vis': 13.2667
                }, {
                    'wind_cdir': 'NNW',
                    'app_min_temp': 17.7,
                    'wind_gust_spd': 5.1286,
                    'rh': 66,
                    'wind_spd': 3.14274,
                    'pop': 15,
                    'wind_cdir_full': 'north-northwest',
                    'app_max_temp': 24.8,
                    'slp': 1008.18,
                    'clouds_mid': 10,
                    'snow_depth': 0,
                    'valid_date': '2018-06-24',
                    'pres': 996.063,
                    'clouds_low': 8,
                    'dewpt': 14.3,
                    'snow': 0,
                    'uv': 7.63753,
                    'wind_dir': 333,
                    'ozone': 326.55,
                    'weather': {'icon': 'c02d', 'code': 802, 'description': 'Scattered clouds'},
                    'clouds_hi': 14,
                    'precip': 0.1875,
                    'max_dhi': null,
                    'max_temp': 24.8,
                    'ts': 1529787660,
                    'datetime': '2018-06-24',
                    'temp': 21.3,
                    'min_temp': 16.6,
                    'clouds': 22,
                    'vis': 24.1
                }, {
                    'wind_cdir': 'NW',
                    'app_min_temp': 14.7,
                    'wind_gust_spd': 7.05624,
                    'rh': 61,
                    'wind_spd': 4.28919,
                    'pop': 10,
                    'wind_cdir_full': 'northwest',
                    'app_max_temp': 24.5,
                    'slp': 1012.02,
                    'clouds_mid': 0,
                    'snow_depth': 0,
                    'valid_date': '2018-06-25',
                    'pres': 999.871,
                    'clouds_low': 12,
                    'dewpt': 11.1,
                    'snow': 0,
                    'uv': 7.99401,
                    'wind_dir': 307,
                    'ozone': 346.024,
                    'weather': {'icon': 'c02d', 'code': 801, 'description': 'Few clouds'},
                    'clouds_hi': 4,
                    'precip': 0.5,
                    'max_dhi': null,
                    'max_temp': 24.9,
                    'ts': 1529874060,
                    'datetime': '2018-06-25',
                    'temp': 19.8,
                    'min_temp': 13.7,
                    'clouds': 15,
                    'vis': 24.1089
                }, {
                    'wind_cdir': 'NW',
                    'app_min_temp': 15,
                    'wind_gust_spd': 4.35202,
                    'rh': 54,
                    'wind_spd': 3.50322,
                    'pop': 0,
                    'wind_cdir_full': 'northwest',
                    'app_max_temp': 26,
                    'slp': 1015.98,
                    'clouds_mid': 0,
                    'snow_depth': 0,
                    'valid_date': '2018-06-26',
                    'pres': 1003.97,
                    'clouds_low': 4,
                    'dewpt': 9.8,
                    'snow': 0,
                    'uv': 8.58684,
                    'wind_dir': 320,
                    'ozone': 329.474,
                    'weather': {'icon': 'c02d', 'code': 801, 'description': 'Few clouds'},
                    'clouds_hi': 0,
                    'precip': 0,
                    'max_dhi': null,
                    'max_temp': 26.6,
                    'ts': 1529960460,
                    'datetime': '2018-06-26',
                    'temp': 20.7,
                    'min_temp': 13.8,
                    'clouds': 4,
                    'vis': 24.1
                }, {
                    'wind_cdir': 'SSE',
                    'app_min_temp': 16.1,
                    'wind_gust_spd': 3.7069,
                    'rh': 50,
                    'wind_spd': 1.96473,
                    'pop': 0,
                    'wind_cdir_full': 'south-southeast',
                    'app_max_temp': 29,
                    'slp': 1014.38,
                    'clouds_mid': 0,
                    'snow_depth': 0,
                    'valid_date': '2018-06-27',
                    'pres': 1002.46,
                    'clouds_low': 0,
                    'dewpt': 11.3,
                    'snow': 0,
                    'uv': 8.58646,
                    'wind_dir': 168,
                    'ozone': 329.297,
                    'weather': {'icon': 'c01d', 'code': 800, 'description': 'Clear Sky'},
                    'clouds_hi': 0,
                    'precip': 0,
                    'max_dhi': null,
                    'max_temp': 30,
                    'ts': 1530046860,
                    'datetime': '2018-06-27',
                    'temp': 22.9,
                    'min_temp': 15.5,
                    'clouds': 0,
                    'vis': 24.1
                }, {
                    'wind_cdir': 'WNW',
                    'app_min_temp': 20.6,
                    'wind_gust_spd': 4.50013,
                    'rh': 56,
                    'wind_spd': 2.74588,
                    'pop': 0,
                    'wind_cdir_full': 'west-northwest',
                    'app_max_temp': 31.7,
                    'slp': 1011.68,
                    'clouds_mid': 2,
                    'snow_depth': 0,
                    'valid_date': '2018-06-28',
                    'pres': 999.805,
                    'clouds_low': 2,
                    'dewpt': 16.3,
                    'snow': 0,
                    'uv': 7.10436,
                    'wind_dir': 289,
                    'ozone': 318.487,
                    'weather': {'icon': 'c02d', 'code': 801, 'description': 'Few clouds'},
                    'clouds_hi': 12,
                    'precip': 0,
                    'max_dhi': null,
                    'max_temp': 30.7,
                    'ts': 1530133260,
                    'datetime': '2018-06-28',
                    'temp': 25.8,
                    'min_temp': 20.2,
                    'clouds': 12,
                    'vis': 24.1029
                }],
                'city_name': 'Dnipro',
                'lon': 35.04,
                'timezone': 'Europe\/Kiev',
                'lat': 48.46, 'country_code': 'UA',
                'state_code': '04'
            }


        dispatch({
            type: FETCH_FORECAST_SUCCESS,
            payload: data
        })


        /* const processRequest = e => {
             if (xhr.readyState === 4 && xhr.status === 200) {
                 const result = JSON.parse(xhr.responseText);
                 console.log('dispatch');
                 console.log('result', xhr.responseText);
                 dispatch({
                     type: FETCH_FORECAST_SUCCESS,
                     payload: result
                 })
             }
         }
         xhr.onreadystatechange = processRequest;*/
    }
    catch
        (err) {
        dispatch({
            type: FETCH_FORECAST_FAILURE,
            payload: err,
            error: true
        })
    }
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
