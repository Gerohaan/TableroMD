<template>
  <apexchart type="line" height="230" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
export default {
  name: 'ApexMultipleYaxis',
  data () {
    return {
      series: [{
        name: 'Income',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
        color: "#6532BA"
      }, {
        name: 'Cashflow',
        type: 'column',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
        color: "#212121"
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
          toolbar: {
            show: false,
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1, 1, 4]
        },
        title: {
          text: 'Grafica 1',
          align: 'left',
          style: {
            color: '#6532BA'
          }
        },
        xaxis: {
          categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
          labels: {
            style: {
              colors: '#6532BA'
            }
          }
        },
        yaxis: [
          {
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: '#6532BA'
            },
            labels: {
              style: {
                colors: '#6532BA'
              }
            },
            tooltip: {
              enabled: true
            }
          },
          {
            seriesName: 'Income',
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: '#6532BA'
            },
            labels: {
              style: {
                colors: '#6532BA'
              }
            }
          },
          {
            seriesName: 'Revenue',
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: '#6532BA'
            },
            labels: {
              style: {
                colors: '#6532BA'
              }
            }
          }
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
          }
        },
        legend: {
          horizontalAlign: 'left',
          offsetX: 40,
          labels: {
            colors: '#6532BA'
          }
        }
      }
    }
  }
}
</script>
