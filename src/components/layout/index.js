import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Preloader from '../preloader';
import Header from '../header';

import {
    fetchWeather
} from '../../actions';

class Layout extends React.Component {

    constructor(props){
        super(props)

        this.state ={
            loading: true
        }
    }

    componentDidMount(){
        this.props.fetchWeather()
        this.setState({
            loading:false
        })
    }

    render() {
        if (this.state.loading) return <Preloader/>
        const weather = this.props.weather
        console.log('weather', weather);
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
})

const mapDispatchToProps = {
    fetchWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
