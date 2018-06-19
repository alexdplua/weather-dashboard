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

        this.state = {
            loading: true,
            data: []
        }

        this.onClickChart = this.onClickChart.bind(this)
    }

    componentDidMount() {
        this.props.fetchForecast()
        this.setState({
            loading: false
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.forecast.data
        })
    }

    onClickChart(evt, item){
        console.log ('legend onClick', evt);
        // console.log('legd item', item[0]._index);
        console.log('this.props', this.props);
        console.log('this.state', this.state);
        this.props.chartWidget(moment(this.props.forecast.data[item[0]._index].valid_date))
    }

    render() {
        if (this.state.loading) return null
        console.log('this.state', this.state);
        return (
                <div className={'col-lg-6'}>
                    <ChartElement onClickEvent={this.onClickChart} chartSettings={this.props.chartSettings} title={'7 Day Weather Forecast'}/>
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
