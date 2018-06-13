import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-chartjs-2';

class ChartElement extends React.Component {

    static propTypes = {
        chartSettings: PropTypes.object,
        title: PropTypes.string
    }

   componentDidMount(){
//Sales chart
       const ctx = document.getElementById( "sales-chart" );
       ctx.height = 150;
       const myChart = new Chart( ctx, this.props.chartSettings)
   }

    render() {
        return (
            <div className="card">
                <div className="card-title">
                    <h4>{this.props.title}</h4>

                </div>
                <div className="sales-chart">
                    <canvas id="sales-chart"/>
                </div>
            </div>

        );
    }
}



export default ChartElement
