import React from 'react';
import {connect} from 'react-redux';

import {
    chartWidget
} from '../../actions';
import {
    getWidgetData
} from '../../selectors';

import WeatherWidget from '../weatherWidget/weatherWidget';

class ChartWidget extends React.Component {



    render() {
        if (!this.props.chartWidgetData) return null
        console.log('here');
        return (
            <div className={'col-lg-6'}>
                <WeatherWidget date={this.props.currentDate} data={this.props.chartWidgetData}/>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    chartWidgetData: getWidgetData(state.forecast, state.chartWidget),
    currentDate: state.chartWidget
})

const mapDispatchToProps = {
    chartWidget
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartWidget)
