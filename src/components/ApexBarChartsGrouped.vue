<template>
  <apexchart type="bar" height="230" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
export default {
  name: 'ApexBarChartsGrouped',
  data () {
    return {
      series: [{
        data: [44, 55, 41],
        name: 'Bogota'
      }, {
        data: [53, 32, 33],
        name: 'Caracas'
      }],
      chartOptions: {
        colors: ['#6532BA', '#212121'],
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 1000
        },
        title: {
          text: 'Ciudades',
          align: 'left',
          style: {
            color: '#6532BA'
          }
        },
        legend: {
          labels: {
            colors: '#6532BA'
          }
        },
        chart: {
          type: 'bar',
          height: 430,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top'
            }
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#6532BA']
        },
        xaxis: {
          categories: [2001, 2002, 2003],
          labels: {
            style: {
              colors: '#6532BA'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: '#6532BA'
            }
          }
        }
      }
    }
  }
}
</script>
