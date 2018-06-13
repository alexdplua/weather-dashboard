import React from 'react';
import {connect} from 'react-redux';

import Row from '../row';
import WeatherWidget from './weatherWidget';

class WeatherWidgetContainer extends React.Component {


    render() {
        const data = this.props.weather.data[0]
        return (
            <Row classOfChild={'col-12'}>
                <WeatherWidget data={data}/>
            </Row>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    weather: state.weather,
})


export default connect(mapStateToProps)(WeatherWidgetContainer)
