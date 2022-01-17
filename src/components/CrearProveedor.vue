<template>
    <q-card square flat>
          <q-card-section align="center" class="q-pb-xs">
            <div class="text-h5 text-bold text-primary">Crear proveedor</div>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-primary text-weight-medium">
              Tipo de identificación
            </div>
                <q-select :options="tipoIdentificacion" filled >
                  <template v-slot:prepend>
                    <q-avatar color="primary" size="sm" font-size="17px" text-color="white" icon="badge" />
                  </template>
                </q-select>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-primary text-weight-medium">
              Pais
            </div>
                <q-select filled >
                  <template v-slot:prepend>
                    <q-avatar color="primary" size="sm" font-size="17px" text-color="white" icon="local_convenience_store" />
                  </template>
                </q-select>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-primary text-weight-medium">
              Departamento
            </div>
                <q-select filled >
                  <template v-slot:prepend>
                    <q-avatar color="primary" size="sm" font-size="17px" text-color="white" icon="map" />
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
              Dirección
            </div>
                <q-input filled >
                  <template v-slot:prepend>
                    <q-avatar color="primary" size="sm" font-size="17px" text-color="white" icon="map" />
                  </template>
                </q-input>
          </q-card-section>
          <div align="right" class="q-mb-none q-pb-none" style="margin-top:-5.5px; margin-bottom:-4px;">
              <q-btn
                color="grey"
                round
                flat
                dense
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded" 
                class="q-mb-none q-pb-none"
              />
          </div>
         <q-slide-transition>
           <div v-show="expanded">
            <q-separator color="primary" class="q-ma-md" />
              <q-card-section class="q-pa-md">
                <div class="text-left text-primary text-weight-medium">
                  Regimen de IVA*
                </div>
                    <q-select filled >
                      <template v-slot:prepend>
                        <q-avatar color="primary" size="sm" font-size="17px" text-color="white" icon="receipt_long" />
                      </template>
                    </q-select>
              </q-card-section>
              <q-card-section class="q-pa-md">
                <div class="text-left text-primary text-weight-medium">
                  Tipo de persona*
                </div>
                    <q-select filled >
                      <template v-slot:prepend>
                        <q-avatar color="primary" size="sm" font-size="17px" text-color="white" icon="group" />
                      </template>
                    </q-select>
              </q-card-section>
              <q-card-section class="q-pa-md" align="right">
                    <q-btn class="text-white" color="secondary" label="Limpiar" no-caps/>
                    <q-btn class="q-ml-sm" color="primary" label="Crear" no-caps/>
              </q-card-section>
           </div>
         </q-slide-transition>
        </q-card>
</template>
<script>
export default {
  name: 'CrearProveedor',
  props: {
    bgColor: {
      default: 'linear-gradient( 135deg, #FFFFFF 10%, #FFFFFF 40%)'
    }
  },
  data() {
    return {
      tipoIdentificacion: [
        'NIT', 'Cédula de ciudadanía', 'Pasaporte', 'Cédula de extranjería', 'Permiso de permanecia', 'Tarjeta de identidad', 'Registro cicil'
      ],
      expanded: false
    }
  }
}
</script>