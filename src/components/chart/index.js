import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import ChartElement from './chart';

import {
    fetchForecast,
    chartWidget
} from '../../actions';

import {
    getChartSettings
} from '../../selectors';

class ChartContainer extends React.Component {

    constructor(props) {
        super(props)


        this.onClickChart = this.onClickChart.bind(this)
    }

    componentDidMount() {
        this.props.fetchForecast()

    }

    onClickChart(evt, item) {
            this.props.chartWidget(moment(this.props.forecast.data.data[item[0]._index].valid_date))
    }

    render() {
        if (!this.props.forecast.data) return null
        if (this.props.forecast.fetch) return null
        return (
            <div className={'col-lg-6'}>
                <ChartElement onClickEvent={this.onClickChart} chartSettings={this.props.chartSettings}
                              title={'7 Day Weather Forecast'}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    chartSettings: getChartSettings(state.forecast),
    forecast: state.forecast
})

const mapDispatchToProps = {
    fetchForecast,
    chartWidget
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer)
