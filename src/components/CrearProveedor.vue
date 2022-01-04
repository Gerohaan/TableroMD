<template>
    <q-card square flat>
          <q-card-section align="center">
            <div class="text-h5 text-bold text-purple-10">Crear proveedor</div>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Tipo de identifiación
            </div>
                <q-select filled >
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="location_city" />
                  </template>
                </q-select>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Pais
            </div>
                <q-input filled >
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="local_convenience_store" />
                  </template>
                </q-input>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Departamento
            </div>
                <q-select filled >
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="map" />
                  </template>
                </q-select>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Ciudad
            </div>
                <q-select filled >
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="map" />
                  </template>
                </q-select>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Dirección
            </div>
                <q-select filled >
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="map" />
                  </template>
                </q-select>
          </q-card-section>
          <q-separator color="purple-10" class="q-ma-md" />
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Regimen de IVA*
            </div>
                <q-select filled >
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="map" />
                  </template>
                </q-select>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Tipo de persona*
            </div>
                <q-select filled >
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="map" />
                  </template>
                </q-select>
          </q-card-section>
          <q-card-section class="q-pa-md" align="right">
                 <q-btn style="background-color: #2e0742;" class="text-white" label="Limpiar" no-caps/>
                 <q-btn class="q-ml-sm" color="purple-10" label="Crear" no-caps/>
          </q-card-section>
        </q-card>
</template>
<script>
export default {
  name: 'CrearProveedor',
  props: {
    bgColor: {
      default: 'linear-gradient( 135deg, #FFFFFF 10%, #FFFFFF 40%)'
    }
  }
}
</script>