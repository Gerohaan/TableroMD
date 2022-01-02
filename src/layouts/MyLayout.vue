<template>
  <q-layout view="lHh LpR fFf">

    <q-header class="bg-white text-purple-10">
      <q-toolbar  class="row q-col-gutter-md q-px-md q-pt-md q-pa-none justify-center responsive"
      key="lineSmall">

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-btn 
        flat 
        round 
        dense 
        @click="leftDrawerOpen = !leftDrawerOpen"
        aria-label="Menu"
        icon="menu" />
        <q-space></q-space>
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
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list class="bg-purple-10 text-white absolute-top"> 
           <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home"/>
              </q-item-section>

              <q-item-section>
                Inicio
              </q-item-section>
            </q-item>
           
            <!------------------------------------------->

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="manage_accounts"/>
              </q-item-section>

              <q-item-section>
                Administración
              <q-menu anchor="center right" self="center start">
                <q-item clickable>
                  <q-item-section>Ajustes de inventario</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Productos</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Otros</q-item-section>
                </q-item>
              </q-menu>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="receipt_long" />
              </q-item-section>

              <q-item-section>
                Auditoria
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="view_in_ar" />
              </q-item-section>

              <q-item-section>
                Inventario
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="subject" />
              </q-item-section>

              <q-item-section>
                Logistica
                <q-menu anchor="center right" self="center start">
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
                <q-icon name="offline_pin" />
              </q-item-section>

              <q-item-section>
                Ordenes
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fact_check" />
              </q-item-section>

              <q-item-section>
                Pedidos
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="event_available" />
              </q-item-section>

              <q-item-section>
                Reportes
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="people_alt" />
              </q-item-section>

              <q-item-section>
                Terceros
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="logout" />
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
          <q-img class="absolute-top" src="https://img.freepik.com/foto-gratis/resumen-superficie-texturas-muro-piedra-hormigon-blanco_74190-8189.jpg?size=626&ext=jpg">
          </q-img>
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
</style>