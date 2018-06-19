import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Preloader from '../preloader';
import Header from '../header';

import {
    fetchWeather,
    fetchWeatherApi
} from '../../actions';

class Layout extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            data: {}
        }
    }

    componentDidMount() {
        /*this.props.fetchWeather()
        this.setState({
            loading:false
        })*/
        /*fetch('https://api.weatherbit.io/v2.0/current?city=Dnipro&country=Ukraine&key=a307fa0bd54941f284d9c148bc173892')
            .then(response => response.json())
            .then(data => {
                this.props.fetchWeatherApi(data)
                this.setState({data: data, isLoading: false})
            });*/

        this.props.fetchWeatherApi()
    }

    render() {
        if (this.props.weather.fetch) return <Preloader/>
        console.log('weather', this.props.weather);
        // const weather = this.props.weather
        // console.log('weather', weather);
        return (

            <div>
                <div id="main-wrapper">
                    <Header/>
                    <div className="page-wrapper">
                        <div className="container-fluid">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


Layout.propTypes = {}

const mapStateToProps = (state, ownProps) => ({
    weather: state.weather,
    // forecast: state.forecast
})

const mapDispatchToProps = {
    fetchWeather,
    fetchWeatherApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
