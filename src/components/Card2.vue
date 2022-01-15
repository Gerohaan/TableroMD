<template>
  
      <q-card square style="cursor:pointer;" 
      class="my-card text-primary bg-white shadow-7"
    >
      <q-card-section>
        <div class="text-h5 text-bold">Utilidades</div>
      </q-card-section>

      <q-card-section class="q-pt-none" align="center">
         <div class="text-h5">
           1'200.864
         </div>
      </q-card-section>
      <q-card-actions align="right">
          <select class="bg-primary text-white q-mb-sm q-mr-sm" name="" id="" style="width: 60px">
            <option value="">Dia</option>
          </select>
      </q-card-actions>
    </q-card>
    
</template>

<script>
export default {
  name: 'Card2',
  data () {
    return {
    }
  }
}
</script>
