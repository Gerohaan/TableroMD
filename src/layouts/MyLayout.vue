<template>
  <q-layout class="app-font" view="lHh LpR fFf">
<q-header elevated class="bg-white" height-hint="64">
      <q-toolbar style="height: 64px">
        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          color="primary"
          icon="menu"
          class="q-mx-md" size="lg"
        />
        <q-space />
        <q-tabs shrink align="right">
        <q-btn
           
            no-caps 
            no-wrap
            color="primary"
            size="md"
            label="Inicio"
            class="q-mr-sm text-weight-regular"
        />
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
           
            no-caps 
            no-wrap
            color="primary"
            size="md" 
            label="Centro de ayuda"
            class="q-mr-sm text-weight-regular"
        />
          <q-btn flat>
          <q-avatar square size="md">
            <img src="../../public\IconosMenu\campana.svg">
              <div class="q-mt-md">
                <q-badge rounded floating color="primary" class="">4</q-badge>
              </div>
          </q-avatar>
        </q-btn>
        <q-btn class="q-ml-sm" size="sm" no-caps no-wrap outline color="primary">
          <div class="text-subtitle1">Nombre de usuario</div>
          <q-icon class="q-ml-sm q-mr-none" left size="3em" name="account_circle" />
        </q-btn>
        </div>
        </q-tabs>
      </q-toolbar>
    </q-header>
    

       <q-drawer 
        v-model="leftDrawerOpen"
        show-if-above 
        mini-to-overlay
        bordered
        class="bg-purple text-white"
        :width="220"
        :breakpoint="400" 
        :mini="miniState" 
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        
      > 
      
       <q-scroll-area class="bg-primary" style="height: calc(100% - -25px); margin-top: -25px; z-index:2;"> 
          <q-list padding> 
          <div align="center" class="bg-white q-pa-none q-pt-sm q-pb-sm">
                  <br>
                  <img class="q-pa-sm"  src="../../public\logo-onex.svg">
          </div>
           

           <q-item clickable v-ripple class="q-mt-md">
              <q-item-section avatar>
                  <img  width="22px" height="22px" src="../../public\IconosMenu\inicio_2.svg">
              </q-item-section>

              <q-item-section>
                Inicio
              </q-item-section>
            </q-item>
           
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <img width="22px" height="22px" src="../../public\IconosMenu\administracion_1.svg">
              </q-item-section>

              <q-item-section>
                Administración
              <q-menu anchor="center right" self="top start">
                <q-item clickable>
                  <q-item-section>Ajustes de inventario</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Productos</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Auditoria</q-item-section>
                </q-item>
              </q-menu>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <img width="22px" height="22px" src="../../public\IconosMenu\inventario_1.svg">
              </q-item-section>

              <q-item-section>
                Inventario
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <img width="22px" height="22px" src="../../public\IconosMenu\logistica_1.svg">
              </q-item-section>
              <q-item-section>
                Logistica
              <q-menu anchor="center right" self="top start">
                <q-item clickable>
                  <q-item-section>Atributos</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Bodegas</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Categorias</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Canales</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Formas de Pago</q-item-section>
                </q-item>
                </q-menu>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <img width="22px" height="22px" src="../../public\IconosMenu\ordenes_1.svg">
              </q-item-section>

              <q-item-section>
                Ordenes
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <img width="22px" height="22px" src="../../public\IconosMenu\pedidos_1.svg">
              </q-item-section>

              <q-item-section>
                Pedidos
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <img width="22px" height="22px" src="../../public\IconosMenu\reportes_1.svg">
              </q-item-section>

              <q-item-section>
                Reportes
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <img width="22px" height="22px" src="../../public\IconosMenu\Terceros.svg">
              </q-item-section>

              <q-item-section>
                Terceros
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <img width="22px" height="22px" src="../../public\IconosMenu\salir_1.svg">
              </q-item-section>

              <q-item-section>
                Salir
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area> 
        
        

        <!--
          aqui puede ir un avatar o identificacion de usuario
          -->
          
          
      </q-drawer>

    <q-page-container>
      <transition name="fade">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>


<script>
export default {
  name: 'MyLayout',
  components: {
    
  },
  data () {
    return {
      leftDrawerOpen: false,
      miniState: true,
    }
  },
  methods: {
    navBarView() {
      //this.leftDrawerOpen = !this.leftDrawerOpen
      //this.miniState = !this.miniState
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;400;500;600;700;800;900&display=swap');
.app-font {
 font-family: 'Work Sans', sans-serif;
}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
} 
.fade-enter-active {
  transition-delay: .25s;
}
 
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
<style>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  top: 50%;
  right: 100%; /* To the left of the tooltip */
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent black transparent transparent;
}
</style>