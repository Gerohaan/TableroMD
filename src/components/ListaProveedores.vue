<template>
    <q-card square flat>
          <q-card-section class="q-pa-md" align="center">
            <div class="text-h5 text-bold text-purple-10">Proveedores</div>
          </q-card-section>
          <q-card-section>
              <q-markup-table flat>
      <thead>
        <tr class="text-bold text-purple-10">
          <th class="text-left">#</th>
          <th class="text-right">Tipo de ID</th>
          <th class="text-right">ID</th>
          <th class="text-right">Nombre</th>
          <th class="text-right">Teléfono</th>
          <th class="text-right">Dirección</th>
          <th class="text-right">Detalles</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(n, index) in 10" :key="index">
          <td class="text-left">{{ index }}</td>
          <td class="text-right">C.C</td>
          <td class="text-right">10739457366</td>
          <td class="text-right">Carlos Duran</td>
          <td class="text-right">3108462844</td>
          <td class="text-right">Calle 10 #87-3</td>
          <td class="text-right"><a href="#">Ver más</a></td>
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