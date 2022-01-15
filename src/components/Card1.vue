<template>

      <q-card square
      class="my-card text-white bg-primary shadow-7"
    >
      <q-card-section>
        <div class="text-h5 text-bold" vertical>Ventas</div>
      </q-card-section>
     <q-card-section class="q-pt-none" align="center">
         <div class="text-h5">
           300
         </div>
      </q-card-section>
     <q-card-actions align="right">
          <button class="q-mb-xs q-mr-sm q-pa-none">Ver más</button>
          <q-space />
           <select name="" id="" style="width: 60px" class="q-mb-xs q-mr-sm">
            <option value="">Dia</option>
          </select>
        
     </q-card-actions>
    </q-card>
    
</template>

<script>
export default {
  name: 'Card1',
  data () {
    return {
    }
  }
}
</script>
