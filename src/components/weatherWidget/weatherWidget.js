import React from 'react';
import PropTypes from 'prop-types';

const WeatherWidget = ({
                    data
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
                        <div className="city">{`${city_name}, ${country_code}`}</div>
                        <div className="currently">{weather.description}</div>
                        <div className="celcious">{temp}°C</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherWidget

WeatherWidget.propTypes = {
    data: PropTypes.object.isRequired
}
