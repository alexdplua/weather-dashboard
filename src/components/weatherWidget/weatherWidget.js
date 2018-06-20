import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
    getMonth
} from '../../selectors';

const WeatherWidget = ({
                    data,
                    date
                       }) => {
    const {
        city_name,
        country_code,
        weather,
        temp
    } = data

    const celToFareng = cel => {
        return ((cel * 1.8) + 32).toFixed(0)
    }


    return (
        <div className="card bg-primary">
            <div className="card-body">
                <div className="weather-widget">
                    <div id="weather-one" className="weather-one">
                        <div
                            style={{backgroundImage: `url(' https://www.weatherbit.io/static/img/icons/${weather.icon}.png')`}}
                            className="icon-weather-img"/>
                        <h2>{celToFareng(temp)} °F</h2>
                        {date ? <div className="city">{`${date.date()}.${getMonth(date)}`}</div> : null}
                        <div className="city">{`${city_name}, ${country_code}`}</div>
                        <div className="currently">{weather.description}</div>
                        <div className="celcious">{temp.toFixed(0)}°C</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherWidget

WeatherWidget.propTypes = {
    data: PropTypes.object.isRequired,
    date: PropTypes.object
}

WeatherWidget.defaultProps = {
    date : null
}
