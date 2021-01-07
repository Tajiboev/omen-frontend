import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const data = {
  labels: ['Black', 'Green', 'Yellow'],
  datasets: [
    {
      data: [19, 12, 4],
      backgroundColor: [
        'rgba(17,17,17, 1)',
        'rgb(0, 210, 91, 1)',
        'rgba(255, 171, 0, 1)',
      ],
      borderColor: [
        'rgba(17,17,17, 1)',
        'rgb(0, 210, 91, 1)',
        'rgba(255, 171, 0, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

const DoughnutChart = () => (
  <>
    <Doughnut data={data} options={{legend: {display: false}}}/>
  </>
)

export default DoughnutChart