<template>
  <apexchart type="donut" height="211" :options="chartOptions" :series="series" />
</template>

<script>
export default {
  name: 'ApexDonut',
  data () {
    return {
      series: [44, 55, 41, 17],
      chartOptions: {
        colors: ['#212121', '#6532BA', '#212121', '#6532BA'],
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 1000
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0.05,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
        chart: {
          toolbar: {
            show: false
          }
        },
        title: {
          text: 'Canales de Venta',
          align: 'left',
          style: {
            color: '#6532BA'
          }
        },
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
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
