<template>
 
      <q-card square
      class="my-card text-white bg-purple-10 shadow-7"
    >
      <q-card-section>
        <div class="text-h5 text-bold" vertical>Pedidos</div>
      </q-card-section>
     <q-card-section class="q-pt-none" align="center">
         <div class="text-h5">
           1200
         </div>
      </q-card-section>
     <q-card-actions align="right">
        <q-btn flat>
          <select name="" id="">
            <option value="">Dia</option>
          </select>
        </q-btn>
     </q-card-actions>
    </q-card>
    
</template>

<script>
export default {
  name: 'Card3',
  data () {
    return {
    }
  }
}
</script>
