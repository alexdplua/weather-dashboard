import React from 'react';
import {connect} from 'react-redux';

import WeatherWidget from '../weatherWidget/weatherWidget';

import {
    getWidgetData
} from '../../selectors';

import {
    calendarWidget
} from '../../actions';
class CalendarWidget extends React.Component {

    render() {
        if(!this.props.calendarWidgetData) return null
         console.log('calendarWidgetData', this.props.calendarWidgetData);
        return (
            <div className={'col-lg-8'}>
                <WeatherWidget date={this.props.currentDate} data={this.props.calendarWidgetData}/>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    calendarWidgetData: getWidgetData(state.forecast, state.calendarWidget),
    currentDate: state.calendarWidget
})

const mapDispatchToProps = {
    calendarWidget
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarWidget)
