<template>
  <q-layout class="app-font" view="lHh LpR fFf">
<q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GPL__toolbar" style="height: 64px">
        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          color="purple-10"
          icon="menu"
          class="q-mx-md"
        />
        <q-space />
        <q-tabs shrink align="right">
        <q-btn
            rounded 
            no-caps 
            no-wrap
            color="purple-10"
            size="md"
            label="Inicio"
            class="q-mr-sm text-weight-regular"
        />
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            rounded 
            no-caps 
            no-wrap
            color="purple-10"
            size="md" 
            label="Centro de ayuda"
            class="q-mr-sm text-weight-regular"
        />
          <q-btn flat rounded>
          <q-avatar square size="md">
            <img src="../../public\IconosMenu\campana.svg">
              <div class="q-mt-md">
                <q-badge rounded floating color="purple-10" class="">4</q-badge>
              </div>
          </q-avatar>
        </q-btn>
        <q-btn class="q-ml-sm" size="sm" no-caps no-wrap outline color="purple-10">
          <div class="text-subtitle1">Nombre de usuario</div>
          <q-icon class="q-ml-sm q-mr-none" left size="3em" name="account_circle" />
        </q-btn>
        </div>
        </q-tabs>
      </q-toolbar>
    </q-header>
    
     <q-drawer
        v-model="leftDrawerOpen"
        side="left"
        :width="220"
        :breakpoint="400" 
        class="bg-purple-10 text-black absolute-top" 
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
      >
        <q-scroll-area class="bg-purple-10" style="height: calc(100% - 150px); margin-top: 150px;">
          <q-list padding class="bg-purple-10 text-white absolute-top"> 
           <q-item clickable v-ripple>
              <q-item-section avatar>
                  <img  width="22px" height="22px" src="../../public\IconosMenu\inicio_2.svg">
              </q-item-section>

              <q-item-section>
                Inicio
              </q-item-section>
            </q-item>
           
            <!------------------------------------------->

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
import { openURL } from 'quasar'
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: true,
      miniState: true,
    }
  },
  methods: {
    
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
.select {
	background: #fff;
	width: 100%;
	box-shadow: 0px 0px 0px rgba(0, 0, 0, .16);
	border-radius: 10px;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: .2s ease all;
	margin-bottom: 30px;
	padding: 30px;
	position: relative;
	z-index: 200;
	border: 2px solid transparent;
}
</style>