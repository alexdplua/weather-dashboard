import React from 'react';
import {connect} from 'react-redux';

import ChartElement from './chart';

import {
    fetchForecast
} from '../../actions';

import {
    getChartSettings
} from '../../selectors';

class ChartContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.props.fetchForecast()
        this.setState({
            loading: false
        })
    }

    render() {
        if (this.state.loading) return null
        return (
                <div className={'col-lg-6'}>
                    <ChartElement chartSettings={this.props.chartSettings} title={'7 Day Weather Forecast'}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    chartSettings: getChartSettings(state.forecast)
})

const mapDispatchToProps = {
    fetchForecast
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer)
