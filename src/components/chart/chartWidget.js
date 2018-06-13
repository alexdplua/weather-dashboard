import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {
    chartWidget as chartWidgetApi
} from '../../actions';
import {
    getChartWidgetData
} from '../../selectors';

import WeatherWidget from '../weatherWidget/weatherWidget';

class ChartWidget extends React.Component {

    componentDidMount() {
        this.props.chartWidgetApi(getChartWidgetData(this.props.forecast, moment()))
    }

    render() {
        if (!this.props.chartWidgetData.data) return null
        return (
            <div className={'col-lg-6'}>
                <WeatherWidget data={this.props.chartWidgetData}/>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    // chartWidgetData: getChartWidgetData(state.forecast, moment()),
    forecast: state.forecast,
    chartWidgetData: state.chartWidget
})

const mapDispatchToProps = {
    chartWidgetApi
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartWidget)
