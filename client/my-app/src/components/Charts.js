import React, { useState, useEffect } from "react";
import axios from 'axios';
import Chart from "react-google-charts";



function Charts() {

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

  const [posts, setPosts] = useState({})
  useEffect(() => {
    axios.get('http://localhost:3000/api').then(res => {
      console.log(res)
      setPosts(res.data)
    })
  },[])
  
  return (
    <div>
      <Chart
        chartType="LineChart"
        width="100%"
        height="600px"
        spreadSheetUrl={posts.message}
        options={options}
      />
    </div>
  );
}


export default Charts;