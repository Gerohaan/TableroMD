<template>
    <q-card square flat>
          <q-card-section align="center">
            <div class="text-h5 text-bold text-purple-10">Crear remitente</div>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Tipo de identificación*
            </div>
                <q-select filled >
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="badge" />
                  </template>
                </q-select>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Teléfono*
            </div>
                <q-select filled >
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="phone" />
                  </template>
                </q-select>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Ciudad
            </div>
                <q-select filled >
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="location_city" />
                  </template>
                </q-select>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Barrio
            </div>
                <q-input filled >
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="public" />
                  </template>
                </q-input>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Dirección
            </div>
                <q-input filled >
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="map" />
                  </template>
                </q-input>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Correo
            </div>
                <q-input filled >
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="email" />
                  </template>
                </q-input>
          </q-card-section>
          <q-card-section class="q-pa-md" align="right">
                 <q-btn style="background-color: #2e0742;" class="text-white" label="Limpiar" no-caps/>
                 <q-btn class="q-ml-sm" color="purple-10" label="Crear" no-caps/>
          </q-card-section>
        </q-card>
</template>
<script>
export default {
  name: 'CrearRemitente',
  props: {
    bgColor: {
      default: 'linear-gradient( 135deg, #FFFFFF 10%, #FFFFFF 40%)'
    }
  }
}
</script>