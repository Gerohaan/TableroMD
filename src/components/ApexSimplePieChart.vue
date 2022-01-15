<template>
  <apexchart type="pie" height="230" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
export default {
  name: 'ApexSimplePieChart',
  data () {
    return {
      series: [44, 55, 13, 43, 22, 22],
      chartOptions: {
        chart: {
          type: 'pie',
          toolbar: {
            show: false
          }
        },
        title: {
          text: 'Categorias mas vendidas',
          align: 'left',
          style: {
            color: '#6532BA'
          }
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E', 'Team F'],
        colors: ['#6532BA','#212121','#6532BA','#212121','#6532BA', '#212121'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 250
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        legend: {
          labels: {
            colors: '#6532BA'
          }
        }
      }
    }
  }
}
</script>
