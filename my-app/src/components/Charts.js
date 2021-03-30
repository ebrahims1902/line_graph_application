import React, { Component } from "react";
import Chart from "react-google-charts";

const options = {
  title: "Company Performance",
  curveType: "function",
  legend: {
    position: 'bottom',
  },
  hAxis: {
    format: 'short',
    title: 'Date',              
  },
  vAxis: {
    title: 'Sold',
    format:'long',
    viewWindow: { min: 0, max: 700 },
  },
  series: {
    0: { color: '#e2431e' },
  },
  backgroundColor: '#f1f8e9',
  lineWidth: 4,
};

class Charts extends Component {
  render() {
    return (
      <div>
        <Chart
          chartType="LineChart"
          width="100%"
          height="600px"
          spreadSheetUrl="https://docs.google.com/spreadsheets/d/1XsvTNTjPr0nNC1g3xkE_8G2R-6M-wYI4eTSsPwE9Z9w/edit?usp=sharing"
          options={options}
        />
      </div>
    );
  }
}

export default Charts;