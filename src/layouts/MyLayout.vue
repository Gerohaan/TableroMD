<template>
  <q-layout view="lHh LpR fFf">

    <q-header class="bg-white text-purple-10" elevated>
      <q-toolbar>

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      
      <q-btn 
        flat 
        round 
        dense 
        @click="leftDrawerOpen = !leftDrawerOpen"
        aria-label="Menu" color="purple-10"
        icon="menu" size="lg" />
        <q-space></q-space>
        <q-tabs shrink align="right"> 
        <q-btn
            rounded 
            no-caps
            color="purple-10"
            size="md"
            label="Inicio"
            class="q-mr-sm text-weight-regular"
        />
        <q-btn
            rounded 
            no-caps
            color="purple-10"
            size="md"
            label="Centro de ayuda" 
            class="q-mr-sm text-weight-regular"
        />
        <q-btn outline flat round icon="notifications" size="lg" class="q-mr-sm">
          <div class="q-mt-md">
              <q-badge rounded floating color="purple-10" class="q-mt-md q-ml-xs">4</q-badge>
          </div>
        </q-btn>
        <q-btn class="q-ml-sm" size="sm" no-caps outline color="purple-10">
          <div class="text-subtitle1">Nombre de usuario</div>
          <q-icon class="q-ml-sm q-mr-none" left size="3em" name="account_circle" />
        </q-btn>
      </q-tabs>
    </q-toolbar>
      </q-header>

     <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        side="left"
        :width="220"
        :breakpoint="400" 
        class="bg-purple-10 text-black absolute-top"
      >
        <q-scroll-area class="bg-purple-10" style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list class="bg-purple-10 text-white absolute-top q-pt-lg"> 
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
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="scss">
.my-menu-link {
 color: white;
 background: #F78812;
}
</style>
<style>
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