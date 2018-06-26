import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Preloader from '../preloader';
import Header from '../header';

import {
    fetchWeatherApi
} from '../../actions';

class Layout extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {


        this.props.fetchWeatherApi()
    }

    render() {
        if (!this.props.weather.data) return <Preloader/>
        if (this.props.weather.fetch) return <Preloader/>
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
    fetchWeatherApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
