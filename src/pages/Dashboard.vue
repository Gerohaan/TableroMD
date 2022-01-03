<template>
  <q-page class="container" style="background: #FFFFFF;">
    <div
      class="row q-col-gutter-md q-px-md q-pt-md q-pa-none justify-center"
    >
       <q-tabs shrink>
         <q-card flat align="center">
          <q-card-section>
            <q-btn outline round color="purple-10" size="25px">
              <q-avatar size="50px" rounded>
                <q-img src="../../public\IconosPrincipales\venta_online.svg"/>
              </q-avatar>
            </q-btn>
            <div class="text-subtitle2">Ventas Online</div>
          </q-card-section>
        </q-card>
        <q-card  flat align="center">
            <q-card-section>
            <q-btn outline round color="purple-10" size="25px">
              <q-avatar size="50px" rounded>
                <q-img height="50px" width="30px" src="../../public\IconosPrincipales\VentaPOS.svg"/>
              </q-avatar>
            </q-btn>
              <div class="text-subtitle2">Ventas POS</div>
            </q-card-section>
          </q-card>
        <q-card  flat align="center">
          <q-card-section>
          <q-btn outline round color="purple-10" size="25px">
              <q-avatar size="50px" rounded>
                <q-img src="../../public\IconosPrincipales\CrearTercero.svg"/>
              </q-avatar>
            </q-btn>
            <div class="text-subtitle2">Crear tercero</div>
          </q-card-section>
        </q-card>
        <q-card  flat align="center">
          <q-card-section>
          <q-btn outline round color="purple-10" size="25px">
              <q-avatar size="50px" rounded>
                <q-img height="40px" width="40px" src="../../public\IconosPrincipales\Producto.svg"/>
              </q-avatar>
            </q-btn>
            <div class="text-subtitle2">Producto</div>
          </q-card-section>
        </q-card>
        <q-card  flat align="center">
          <q-card-section>
          <q-btn outline round color="purple-10" size="25px">
              <q-avatar size="50px" rounded>
                <q-img src="../../public\IconosPrincipales\GestionarEnvio.svg"/>
              </q-avatar>
            </q-btn>
            <div class="text-subtitle2">Gestionar envío</div>
          </q-card-section>
        </q-card>
        <q-card flat align="center">
          <q-card-section>
          <q-btn outline round color="purple-10" size="25px">
              <q-avatar size="50px" rounded>
                <q-img height="40px" width="40px" src="../../public\IconosPrincipales\Reportes.svg"/>
              </q-avatar>
            </q-btn>
            <div class="text-subtitle2">Reportes</div>
          </q-card-section>
        </q-card>
        <q-card  flat align="center">
          <q-card-section>
          <q-btn outline round color="purple-10" size="xl" icon="" />
            <div class="text-subtitle2">Acceso #7</div>
          </q-card-section>
        </q-card>
        <q-card  flat align="center">
          <q-card-section>
          <q-btn outline round color="purple-10" size="25px">
              <q-avatar size="50px" rounded>
                <q-img height="55px" width="45px" src="../../public\IconosPrincipales\Perfil.svg"/>
              </q-avatar>
            </q-btn>
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
