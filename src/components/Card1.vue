<template>

      <q-card square
      class="my-card text-white bg-purple-10 shadow-7"
    >
      <q-card-section>
        <div class="text-h5 text-bold" vertical>First Card</div>
      </q-card-section>
     <q-card-section class="q-pt-none" align="center">
         <div class="text-h5">
           300
         </div>
      </q-card-section>
     <q-card-actions align="right">
          <select name="" id="" style="width: 60px" class="q-mb-sm q-mr-sm">
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
