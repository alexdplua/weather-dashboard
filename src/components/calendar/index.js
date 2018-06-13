import React from 'react';
import {connect} from 'react-redux';
import Calendar from 'rc-calendar';
import moment from 'moment';

class CalendarContainer extends React.Component {

    componentDidMount() {

    }

    onDateSelect(date) {
        console.log('date', date.date());
    }

    setDisabledDate(current) {
        if (!current) return false
        const today = moment()
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
            <div className='row'>
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
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer)
