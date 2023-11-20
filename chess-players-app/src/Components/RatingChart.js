import React from 'react';
import { Line } from 'react-chartjs-2';

const RatingChart = ({ data }) => {
  // Format your data appropriately for the chart library
  const chartData = {
    labels: data.map((entry) => entry.date),
    datasets: [
      {
        label: 'Rating',
        data: data.map((entry) => entry.rating),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default RatingChart;
