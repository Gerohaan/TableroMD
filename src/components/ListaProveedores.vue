<template>
    <q-card square flat>
          <q-card-section class="q-pa-md" align="center">
            <div class="text-h5 text-bold text-primary">Proveedores</div>
          </q-card-section>
          <q-card-section>
              <q-markup-table flat>
      <thead>
        <tr class="text-bold text-primary">
          <th class="text-left">#</th>
          <th class="text-left">Tipo de ID</th>
          <th class="text-left">ID</th>
          <th class="text-left">Nombre</th>
          <th class="text-left">Teléfono</th>
          <th class="text-left">Dirección</th>
          <th class="text-left">Detalles</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(n, index) in 10" :key="index">
          <td class="text-left">{{ index }}</td>
          <td class="text-left">C.C</td>
          <td class="text-left">10739457366</td>
          <td class="text-left">Carlos Duran</td>
          <td class="text-left">3108462844</td>
          <td class="text-left">Calle 10 #87-3</td>
          <td class="text-left"><a href="#">Ver más</a></td>
        </tr>
      </tbody>
    </q-markup-table>
          </q-card-section>
    </q-card>
</template>
<script>
export default {
  name: 'ListaProveedores',
  props: {
    bgColor: {
      default: 'linear-gradient( 135deg, #FFFFFF 10%, #FFFFFF 40%)'
    }
  }
}
</script>