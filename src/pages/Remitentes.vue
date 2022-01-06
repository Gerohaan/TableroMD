<template>
  <q-page class="container" style="background: #EFEFEF;">
    <div
      class="row q-col-gutter-md q-px-md q-py-md q-ma-xs"
    >
      <!-- Lista de Proveedores inicio -->
      <div class="col-md-8 col-sm-12 col-lg-8 col-xs-12 col-xl-8 q-mt-md">
          <ListaRemitentes/>
      </div>
      <!-- Lista de Proveedores fin -->
      <!-- Crear Proveedor Inicio -->
      <div class="col-md-4 col-sm-12 col-lg-4 col-xs-12 col-xl-4 q-mt-md">
        <CrearRemitente/>
      </div>
      <!-- Crear Proveedor Fin -->

  </div>
       
      <div>
    
  </div>
      
  </q-page>
</template>

<script>
import ListaRemitentes from 'components/ListaRemitentes'
import CrearRemitente from 'components/CrearRemitente'
export default {
  name: 'remitentes',
  components: {
    ListaRemitentes,
    CrearRemitente
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
<style>
.outlinenone {
    outline: none;
    background-color: #E6E6E6;
    border: 0;
  }
</style>
