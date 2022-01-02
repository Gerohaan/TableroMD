<template>
      <q-card square style="cursor:pointer;" 
      class="my-card text-purple-10 bg-white shadow-7"
    >
      <q-card-section>
        <div class="text-h5 text-bold">Cartera</div>
      </q-card-section>

      <q-card-section class="q-pt-none" align="center">
         <div class="text-h5">
           6'272.633
         </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat>
          <select class="bg-purple-10 text-white" name="" id="">
            <option value="">Dia</option>
          </select>
        </q-btn>
      </q-card-actions>
    </q-card>
    
</template>

<script>
export default {
  name: 'Card4',
  data () {
    return {
    }
  }
}
</script>
