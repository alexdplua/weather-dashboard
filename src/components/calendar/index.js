import React from 'react';
import {connect} from 'react-redux';
import Calendar from 'rc-calendar';
import moment from 'moment';

import {
    calendarWidget
} from '../../actions';

class CalendarContainer extends React.Component {

    constructor(props){
        super(props)

        this.onDateSelect = this.onDateSelect.bind(this)
    }


    onDateSelect(date) {
        this.props.calendarWidget(date)
    }

    setDisabledDate(current) {
        if (!current) return false
        const today = moment([2018, 5, 13])
        if (today.year() === current.year()
            && today.month() === current.month()
            && today.date() + 16 >= current.date()
            && today.date() <= current.date()) {
            return false;
        }
        return true
    }


    render() {
        return (
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="year-calendar">
                                <Calendar showDateInput={false} disabledDate={this.setDisabledDate}
                                          onSelect={this.onDateSelect}/>
                            </div>
                        </div>

                    </div>
                </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = {
    calendarWidget
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer)
