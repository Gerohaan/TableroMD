<template>
  <q-page class="container" style="background: #FFFFFF;">
    <div
      class="row q-col-gutter-md q-px-md q-pt-md q-pa-none justify-center"
    >
       <q-tabs shrink>
         <q-card flat align="center">
          <q-card-section>
          <q-btn outline round color="purple-10" size="xl" icon="system_security_update_good" />
            <div class="text-subtitle2">Ventas Online</div>
          </q-card-section>
        </q-card>
        <q-card  flat align="center">
            <q-card-section>
            <q-btn outline round color="purple-10" size="xl" icon="point_of_sale" />
              <div class="text-subtitle2">Ventas POS</div>
            </q-card-section>
          </q-card>
        <q-card  flat align="center">
          <q-card-section>
          <q-btn outline round color="purple-10" size="xl" icon="person_add_alt" />
            <div class="text-subtitle2">Crear tercero</div>
          </q-card-section>
        </q-card>
        <q-card  flat align="center">
          <q-card-section>
          <q-btn outline round color="purple-10" size="xl" icon="inventory_2" />
            <div class="text-subtitle2">Producto</div>
          </q-card-section>
        </q-card>
        <q-card  flat align="center">
          <q-card-section>
          <q-btn outline round color="purple-10" size="xl" icon="local_shipping" />
            <div class="text-subtitle2">Gestionar envío</div>
          </q-card-section>
        </q-card>
        <q-card flat align="center">
          <q-card-section>
          <q-btn outline round color="purple-10" size="xl" icon="pivot_table_chart" />
            <div class="text-subtitle2">Reportes</div>
          </q-card-section>
        </q-card>
        <q-card  flat align="center">
          <q-card-section>
          <q-btn outline round color="purple-10" size="xl" icon="card_giftcard" />
            <div class="text-subtitle2">Acceso #7</div>
          </q-card-section>
        </q-card>
        <q-card  flat align="center">
          <q-card-section>
          <q-btn outline round color="purple-10" size="xl" icon="person_outline" />
            <div class="text-subtitle2">Perfil</div>
          </q-card-section>
        </q-card>
      </q-tabs>
    </div>
    <div
      class="row q-col-gutter-md q-px-md q-pt-md q-pa-none justify-center"
    >
      <div class="col-md-3 col-lg-3 col-sm-3 col-xs-12">
        <Card1></Card1>
      </div>
      <div class="col-md-3 col-lg-3 col-sm-3 col-xs-12">
        <Card2></Card2>
      </div>
      <div class="col-md-3 col-lg-3 col-sm-3 col-xs-12">
        <Card3></Card3>
      </div>
      <div class="col-md-3 col-lg-3 col-sm-3 col-xs-12">
        <Card4></Card4>
      </div>
    </div>
    <div
      class="row q-col-gutter-md q-px-md q-py-md"
      key="allCharts"
    >
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-multiple-yaxis></apex-multiple-yaxis>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-simple-pie-chart></apex-simple-pie-chart>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-donut></apex-donut>
        </card-base>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <apex-bar-charts-grouped></apex-bar-charts-grouped>
        </card-base>
      </div>
    
    </div>
  </q-page>
</template>

<script>
import CardBase from 'components/CardBase'
export default {
  name: 'PageIndex',
  components: {
    CardBase,
    ApexDonut: () => import('components/ApexDonut'),
    Card1: () => import('components/Card1'),
    Card2: () => import('components/Card2'),
    Card3: () => import('components/Card3'),
    Card4: () => import('components/Card4'),
    ApexBarChartsGrouped: () => import('components/ApexBarChartsGrouped'),
    ApexMultipleYaxis: () => import('components/ApexMultipleYaxis'),
    ApexSimplePieChart: () => import('components/ApexSimplePieChart')
  },
  data () {
    return {
      loading: true,
      dialog: true,
      colors: [
        'linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)',
        'linear-gradient( 135deg, #2AFADF 10%, #4C83FF 100%)',
        'linear-gradient( 135deg, #FFD3A5 10%, #FD6585 100%)',
        'linear-gradient( 135deg, #EE9AE5 10%, #5961F9 100%)'
      ]
    }
  },
  created () {
    this.$q.loading.show({
      backgroundColor: 'purple-10',
      delay: 0
    })
    setTimeout(() => {
      this.$q.loading.hide()
    }, 1300)
  }
}
</script>
