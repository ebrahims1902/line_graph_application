import { Chart } from "react-google-charts";
import * as React from "react";


function Charts() {
    return (
        <Chart
        width={'800px'}
        height={'400px'}
          chartType="LineChart"
          spreadSheetUrl="https://docs.google.com/spreadsheets/d/1XsvTNTjPr0nNC1g3xkE_8G2R-6M-wYI4eTSsPwE9Z9w/edit?usp=sharing"
  options={{
    hAxis: {
      format: 'short',
      title: 'Date',
    },
    vAxis: {
      
      title: 'Sold',
      // format:'scientific',
      format:'long',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
    );
  }
  
  export default Charts;
  