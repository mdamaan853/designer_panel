import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
    labels: [
        'Women',
      'Men'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [100, 50],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const SalesByGenderChart = () => (
  <>
  <div className="container"> 
    <div className='header'>
      <h1 className='title fw-bold'>Sales by Gender</h1>
      <div className='links'>
      <div className="card shadow p-3">
        <div className="">
        <Pie data={data} options={options} />
        </div>
    </div>
    
          </div>
      </div>
  </div>
   
    
   
  </>
);

export default SalesByGenderChart;