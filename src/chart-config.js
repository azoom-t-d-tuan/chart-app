export const chartConfig = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  type: 'horizontalBar',
  options: {
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
            stepSize: 50,
          },
        },
      ],
    },
  },
}

export default chartConfig
