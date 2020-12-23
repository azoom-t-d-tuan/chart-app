<template>
  <div id="app">
    <div>
      <canvas id="json-chart"></canvas>
    </div>
    <div>
      <canvas id="db-chart"></canvas>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js'
import dataTest from './data-test.json'
import chartConfig from './chart-config'

export default {
  name: 'App',
  computed: {
    dataFromJson() {
      return {
        labels: chartConfig.labels,
        datasets: [
          {
            label: 'Data from json file',
            data: dataTest.data,
          },
        ],
      }
    },
  },
  async mounted() {
    const result = await axios.get(process.env.VUE_APP_API_URL)
    const dataFromDb = {
      labels: chartConfig.labels,
      datasets: [
        {
          label: 'Data from database',
          data: result.data.map((x) => x.value),
        },
      ],
    }
    this.createChart('json-chart', this.dataFromJson)
    this.createChart('db-chart', dataFromDb)
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId)
      new Chart(ctx, {
        type: chartConfig.type,
        options: chartConfig.options,
        data: chartData,
      })
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
