import React, { Component } from 'react';
import { Bar} from 'react-chartjs-2';
import './style.css';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      options: {
        scaleBeginAtZero : true,
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(108,56,183,0.4)",
        scaleGridLineWidth : 1,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
        barShowStroke : true,
        barStrokeWidth : 2,
        barValueSpacing : 5,
        barDatasetSpacing : 1,
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
        }
      }
    }
  }
  render() {
    let data = {
      labels: this.props.label,
      datasets: [
        {
          label: "Result",
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1,
          data: this.props.data
        }
      ]
    };
    return (
        <div>
            <Bar 
              data={data} 
              width={100}
              height={100}  
              options= {this.state.options}
              redraw={true}
            />
        </div>
      );
  }
}

export default Chart;
