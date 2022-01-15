<template>
    <q-card square flat>
          <q-card-section align="center">
            <div class="text-h5 text-bold text-primary">Crear remitente</div>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-primary text-weight-medium">
              Tipo de identificación*
            </div>
                <q-select :options="tipoIdentificacion" filled >
                  <template v-slot:prepend>
                    <q-avatar color="primary" size="sm" font-size="17px" text-color="white" icon="badge" />
                  </template>
                </q-select>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-primary text-weight-medium">
              Teléfono*
            </div>
                <q-select filled >
                  <template v-slot:prepend>
                    <q-avatar color="primary" size="sm" font-size="17px" text-color="white" icon="phone" />
                  </template>
                </q-select>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-primary text-weight-medium">
              Ciudad
            </div>
                <q-select filled >
                  <template v-slot:prepend>
                    <q-avatar color="primary" size="sm" font-size="17px" text-color="white" icon="location_city" />
                  </template>
                </q-select>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-primary text-weight-medium">
              Barrio
            </div>
                <q-input filled >
                  <template v-slot:prepend>
                    <q-avatar color="primary" size="sm" font-size="17px" text-color="white" icon="public" />
                  </template>
                </q-input>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-primary text-weight-medium">
              Dirección
            </div>
                <q-input filled >
                  <template v-slot:prepend>
                    <q-avatar color="primary" size="sm" font-size="17px" text-color="white" icon="map" />
                  </template>
                </q-input>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-primary text-weight-medium">
              Correo
            </div>
                <q-input filled >
                  <template v-slot:prepend>
                    <q-avatar color="primary" size="sm" font-size="17px" text-color="white" icon="email" />
                  </template>
                </q-input>
          </q-card-section>
          <q-card-section class="q-pa-md" align="right">
                 <q-btn class="text-white" color="secondary" label="Limpiar" no-caps/>
                 <q-btn class="q-ml-sm" color="primary" label="Crear" no-caps/>
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
  },
  data() {
    return {
      tipoIdentificacion: [
        'NIT', 'Cédula de ciudadanía'
      ]
    }
  }
}
</script>