<template>
  <q-page class="container" style="background: #EFEFEF;">
    <div
      class="row q-col-gutter-md q-px-md q-pt-md q-pa-none justify-center"
    >
     <p class="text-h4 text-bold text-purple-10 q-pt-xl">
       Agregar Nuevo Pedido
      </p> 
    </div>
    <div
      class="row q-col-gutter-md q-px-md q-py-md"
    >
      <!-- Cliente inicio -->
      <div class="col-md-6 col-sm-12 col-lg-6 col-xs-12 col-xl-6">
        <q-card square flat>
          <q-card-section class="q-pa-md">
            <div class="text-h6 text-bold text-purple-10">Cliente</div>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Documento de identidad
            </div>
                <q-input filled >
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="branding_watermark" />
                  </template>
                </q-input>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Nombre del cliente
            </div>
            <q-select filled >
              <template v-slot:prepend>
                <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="person" />
              </template>
            </q-select>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Celular
            </div>
            <q-input filled >
              <template v-slot:prepend>
                <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="phone" />
              </template>
            </q-input>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Correo
            </div>
            <q-input filled >
              <template v-slot:prepend>
                <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="email" />
              </template>
            </q-input>
          </q-card-section>
        </q-card>
      </div>
      <!-- Cliente fin -->
      <!-- Informacion Inicio -->
      <div class="col-md-6 col-sm-12 col-lg-6 col-xs-12 col-xl-6">
        <q-card square flat>
          <q-card-section>
            <div class="text-h6 text-bold text-purple-10">Información</div>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Ciudad
            </div>
                <q-select filled >
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="location_city" />
                  </template>
                </q-select>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Barrio
            </div>
                <q-input filled >
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="local_convenience_store" />
                  </template>
                </q-input>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Dirección
            </div>
                <q-select filled >
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="map" />
                  </template>
                </q-select>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium">
              Nota dirección
            </div>
                <q-input filled autogrow />
          </q-card-section>
        </q-card>
      </div>
      <!-- Informacion Fin -->

    
        

    <div class="row col-12">
      <!-- Producto Inicio -->
        <q-card square flat class="col col-md-12 col-lg-12 col-xs-12 col-sm-12 col-xl-12 q-pa-none">
          <q-card-section>
              <q-card-section class="q-pa-none">
                <div class="text-h6 text-bold text-purple-10">Producto</div>
              </q-card-section>
          </q-card-section>
        </q-card>
        <q-card square flat class="col col-md-4 col-lg-4 col-xs-12 col-sm-12 col-xl-4">
          <q-card-section class="q-pa-md">
              <div class="text-left text-purple-10 text-weight-medium">
                Bodega
              </div>
                <q-select filled>
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="store_mall_directory" />
                  </template>
                </q-select>
           
          </q-card-section>
        </q-card>
        <q-card square flat class="col col-md-4 col-lg-4 col-xs-12 col-sm-12 col-xl-4">
          <q-card-section class="q-pa-md">
              <div class="text-left text-purple-10 text-weight-medium">
                Precio
              </div>
                <q-input filled>
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="attach_money" />
                  </template>
                </q-input>
           
          </q-card-section>
        </q-card>
        <q-card square flat class="col col-md-4 col-lg-4 col-xs-12 col-sm-12 col-xl-4">
          <q-card-section class="q-pa-md">
              <div class="text-left text-purple-10 text-weight-medium">
                Impuesto
              </div>
                <q-input filled>
                  <template v-slot:prepend>
                    <q-avatar color="purple-10" size="sm" font-size="17px" text-color="white" icon="receipt" />
                  </template>
                </q-input>
           
          </q-card-section>
        </q-card>
        <!-- Carrusel Vendedor inicio -->
        <q-card square flat class="col col-md-6 col-lg-6 col-xs-12 col-sm-12 col-xl-6">
          <q-card-section class="q-pa-md">
              <div class="text-left text-purple-10 text-weight-medium">
                Vendedor
              </div>
               <carousel navigationClickTargetSize="0" paginationSize="5" perPage="3" speed="300" :paginationEnabled="false" :navigationEnabled="true">
                <slide class="q-pa-md">
                   <q-card square>
                    <q-card-section class="bg-white tex-purple-10" align="center">
                      <q-avatar color="purple-10" size="xl" font-size="30px" text-color="white" icon="person"/>
                      <div class="text-center text-purple-10 text-caption q-pa-md">
                        Nombre Vendedor
                      </div>
                    </q-card-section>
                  </q-card>
                </slide>
                <slide class="q-pa-md">
                  <q-card square>
                      <q-card-section class="bg-purple-10" align="center">
                        <q-avatar color="white" size="xl" font-size="30px" text-color="purple-10" icon="person"/>
                        <div class="text-center text-white text-caption q-pa-md">
                          Nombre vendedor
                        </div>
                      </q-card-section>
                    </q-card>
                </slide>
                <slide class="q-pa-md">
                  <q-card square>
                    <q-card-section class="bg-white tex-purple-10" align="center">
                      <q-avatar color="purple-10" size="xl" font-size="30px" text-color="white" icon="person"/>
                      <div class="text-center text-purple-10 text-caption q-pa-md">
                        Nombre Vendedor
                      </div>
                    </q-card-section>
                  </q-card>
                </slide>
                <slide class="q-pa-md">
                  <q-card square>
                    <q-card-section class="bg-white tex-purple-10" align="center">
                      <q-avatar color="purple-10" size="xl" font-size="30px" text-color="white" icon="person"/>
                      <div class="text-center text-purple-10 text-caption q-pa-md">
                        Nombre Vendedor
                      </div>
                    </q-card-section>
                  </q-card>
                </slide>
               </carousel>
          </q-card-section>
        </q-card>
        <!-- Carrusel Vendedor fin --> 
        <!-- Carrusel Domiciliario/Transportadora inicio -->
        <q-card square flat class="col col-md-6 col-lg-6 col-xs-12 col-sm-12 col-xl-6">
          <q-card-section class="q-pa-md">
              <div class="text-left text-purple-10 text-weight-medium">
                Domiciliario/Transportadora
              </div>
                <carousel navigationClickTargetSize="0" paginationSize="5" perPage="3" speed="300" :paginationEnabled="false" :navigationEnabled="true">
                <slide class="q-pa-md">
                  <q-card square>
                    <q-card-section class="bg-white tex-purple-10" align="center">
                      <q-avatar color="purple-10" size="xl" font-size="30px" text-color="white" icon="person"/>
                      <div class="text-center text-purple-10 text-caption q-pa-md">
                        Nombre Domiciliario
                      </div>
                    </q-card-section>
                  </q-card>
                </slide>
                <slide class="q-pa-md">
                   <q-card square>
                    <q-card-section class="bg-purple-10" align="center">
                      <q-avatar color="white" size="xl" font-size="30px" text-color="purple-10" icon="person"/>
                      <div class="text-center text-white text-caption q-pa-md">
                        Nombre Domiciliario
                      </div>
                    </q-card-section>
                  </q-card>
                </slide>
                <slide class="q-pa-md">
                    <q-card square>
                    <q-card-section class="bg-white tex-purple-10" align="center">
                      <q-avatar color="purple-10" size="xl" font-size="30px" text-color="white" icon="person"/>
                      <div class="text-center text-purple-10 text-caption q-pa-md">
                        Nombre Domiciliario
                      </div>
                    </q-card-section>
                  </q-card>
                </slide>
                <slide class="q-pa-md">
                  
                </slide>
               </carousel>
           
          </q-card-section>
        </q-card>
        <!-- Carrusel Domiciliario/Transportadora fin -->
        <q-card square flat class="col col-md-2 col-lg-2 col-xs-12 col-sm-12 col-xl-2">
          <q-card-section class="q-pa-sm">
              <div class="text-left text-purple-10 text-weight-medium">
                Código
              </div>
                <q-input filled>
                  <template v-slot:prepend>
                    <q-icon name="search" />
                  </template>
                </q-input>
          </q-card-section>
        </q-card>
        <q-card square flat class="col col-md-2 col-lg-2 col-xs-12 col-sm-12 col-xl-2">
          <q-card-section class="q-pa-sm">
              <div class="text-left text-purple-10 text-weight-medium">
                Producto
              </div>
                <q-input filled/>
          </q-card-section>
        </q-card>
        <q-card square flat class="col col-md-2 col-lg-2 col-xs-12 col-sm-12 col-xl-2">
          <q-card-section class="q-pa-sm">
              <div class="text-left text-purple-10 text-weight-medium">
                Precio
              </div>
              <q-input filled/>
           </q-card-section>
        </q-card>
        <q-card square flat class="col col-md-1 col-lg-1 col-xs-12 col-sm-12 col-xl-1">
          <q-card-section class="q-pa-sm">
              <div class="text-left text-purple-10 text-weight-medium">
                Cantidad
              </div>
              <q-input filled/>
          </q-card-section>
        </q-card>
        <q-card square flat class="col col-md-2 col-lg-2 col-xs-12 col-sm-12 col-xl-2">
          <q-card-section class="q-pa-sm">
              <div class="text-left text-purple-10 text-weight-medium">
                Impuesto
              </div>
              <q-input filled/>
          </q-card-section>
        </q-card>
        <q-card square flat class="col col-md-1 col-lg-1 col-xs-12 col-sm-12 col-xl-1">
          <q-card-section class="q-pa-sm">
              <div class="text-left text-purple-10 text-weight-medium">
                Descuento
              </div>
              <q-input filled/>
          </q-card-section>
        </q-card>
         <q-card square flat class="col col-md-2 col-lg-2 col-xs-12 col-sm-12 col-xl-2">
          <q-card-section class="q-pa-sm">
              <div class="text-left text-purple-10 text-weight-medium">
                Total
              </div>
              <q-input filled/>
          </q-card-section>
        </q-card>

        <q-card square flat class="col col-md-12 col-lg-12 col-xs-12 col-sm-12 col-xl-12">
          <q-card-section class="q-pa-sm" align="center">
            <q-btn color="purple-10" no-caps>
              <div class="text-left text-white text-weight-medium">
                Agregar Producto
              </div>
            </q-btn>
          </q-card-section>
        </q-card>


        <q-card square flat class="col col-md-6 col-lg-6 col-xs-12 col-sm-12 col-xl-6">
          <q-card-section class="q-pa-sm">
            <div class="text-left text-purple-10 text-weight-medium">
                Observaciones
            </div>
            <q-input type="textarea" rows="11" filled></q-input>
          </q-card-section>
        </q-card>

        
        <q-card square flat class="col col-md-4 col-lg-4 col-xs-12 col-sm-12 col-xl-4 q-pa-md">
          <q-card-section>
            <q-card>
              <q-card-section>
                  <div class="row q-pa-sm">
                    <div class="col text-purple-10 text-weight-medium">Subtotal</div>
                    <input input-style="" type="text" class="outlinenone" />
                  </div>
                  <div class="row q-pa-sm">
                    <div class="col text-purple-10 text-weight-medium">Descuentos</div>
                    <div><input type="text" class="outlinenone"/></div>
                  </div>
                  <div class="row q-pa-sm">
                    <div class="col text-purple-10 text-weight-medium">Impuesto</div>
                    <div><input input-style="" type="text" class="outlinenone" /></div>
                  </div>
                  <div class="row q-pa-sm">
                    <div class="col text-purple-10 text-weight-medium">Envío</div>
                    <div><input input-style="" type="text" class="outlinenone" /></div>
                  </div>
                  <div class="row q-pa-sm">
                    <div class="col text-purple-10 text-weight-medium">Total</div>
                    <div><input input-style="" type="text" class="outlinenone" /></div>
                  </div>
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>

        

        <q-card square flat class="col col-md-2 col-lg-2 col-xs-12 col-sm-12 col-xl-2">
          <q-card-section class="q-pa-sm q-mt-lg" align="center">
             <q-card square flat bordered class="bg-purple-10 text-white">
                <q-card-section>
                  <q-avatar color="white" size="xl" text-color="purple-10" icon="credit_card"/>
                  <div class="text-body1">Credito</div>
                </q-card-section>
              </q-card>
          </q-card-section>
          <q-card-section class="q-pa-sm q-mt-none" align="center">
             <q-card square flat bordered class="bg-white text-purple-10">
                <q-card-section>
                  <q-avatar color="purple-10" size="xl" text-color="white" icon="verified"/>
                  <div class="text-body1">Garantía</div>
                </q-card-section>
              </q-card>
          </q-card-section>
        </q-card>
        
        <q-card square flat class="col col-md-5 col-lg-5 col-xs-12 col-sm-12 col-xl-5">
           <q-card-section class="q-pa-md">
              <div class="text-left text-purple-10 text-weight-medium">
                Medio de pago
              </div>
                <carousel navigationClickTargetSize="0" paginationSize="5" perPage="3" speed="300" :paginationEnabled="false" :navigationEnabled="true">
                <slide class="q-pa-md">
                   <q-card square>
                    <q-card-section class="bg-white tex-purple-10" align="center">
                      <q-avatar color="purple-10" size="xl" font-size="30px" text-color="white" icon="person"/>
                      <div class="text-center text-purple-10 text-caption q-pa-md">
                        Medio pago
                      </div>
                    </q-card-section>
                  </q-card>
                </slide>
                <slide class="q-pa-md">
                  <q-card square>
                      <q-card-section class="bg-purple-10" align="center">
                        <q-avatar color="white" size="xl" font-size="30px" text-color="purple-10" icon="person"/>
                        <div class="text-center text-white text-caption q-pa-md">
                          Medio pago
                        </div>
                      </q-card-section>
                    </q-card>
                </slide>
                <slide class="q-pa-md">
                  <q-card square>
                    <q-card-section class="bg-white tex-purple-10" align="center">
                      <q-avatar color="purple-10" size="xl" font-size="30px" text-color="white" icon="person"/>
                      <div class="text-center text-purple-10 text-caption q-pa-md">
                        Medio pago
                      </div>
                    </q-card-section>
                  </q-card>
                </slide>
                <slide class="q-pa-md">
                  <q-card square>
                    <q-card-section class="bg-white tex-purple-10" align="center">
                      <q-avatar color="purple-10" size="xl" font-size="30px" text-color="white" icon="person"/>
                      <div class="text-center text-purple-10 text-caption q-pa-md">
                        Medio pago
                      </div>
                    </q-card-section>
                  </q-card>
                </slide>
               </carousel>
          </q-card-section>
        </q-card>

        <q-card square flat class="col col-md-5 col-lg-5 col-xs-12 col-sm-12 col-xl-5">
           <q-card-section class="q-pa-md">
              <div class="text-left text-purple-10 text-weight-medium">
                Canal
              </div>
                <carousel navigationClickTargetSize="0" paginationSize="5" perPage="3" speed="300" :paginationEnabled="false" :navigationEnabled="true">
                <slide class="q-pa-md">
                   <q-card square>
                    <q-card-section class="bg-white tex-purple-10" align="center">
                      <q-avatar color="purple-10" size="xl" font-size="30px" text-color="white" icon="person"/>
                      <div class="text-center text-purple-10 text-caption q-pa-md">
                        Nombre canal
                      </div>
                    </q-card-section>
                  </q-card>
                </slide>
                <slide class="q-pa-md">
                  <q-card square>
                      <q-card-section class="bg-purple-10" align="center">
                        <q-avatar color="white" size="xl" font-size="30px" text-color="purple-10" icon="person"/>
                        <div class="text-center text-white text-caption q-pa-md">
                          Nombre canal
                        </div>
                      </q-card-section>
                    </q-card>
                </slide>
                <slide class="q-pa-md">
                  <q-card square>
                    <q-card-section class="bg-white tex-purple-10" align="center">
                      <q-avatar color="purple-10" size="xl" font-size="30px" text-color="white" icon="person"/>
                      <div class="text-center text-purple-10 text-caption q-pa-md">
                        Nombre canal
                      </div>
                    </q-card-section>
                  </q-card>
                </slide>
                <slide class="q-pa-md">
                  <q-card square>
                    <q-card-section class="bg-white tex-purple-10" align="center">
                      <q-avatar color="purple-10" size="xl" font-size="30px" text-color="white" icon="person"/>
                      <div class="text-center text-purple-10 text-caption q-pa-md">
                        Nombre canal
                      </div>
                    </q-card-section>
                  </q-card>
                </slide>
               </carousel>
          </q-card-section>
        </q-card>

        <q-card square flat class="col col-md-2 col-lg-2 col-xs-12 col-sm-12 col-xl-2">
          <q-card-section class="q-pa-md">
            <div class="text-left text-purple-10 text-weight-medium q-pa-xs q-mt-none">
                Pago / No pago
            </div>
            <q-card-section horizontal class="q-mt-md">
              <q-btn 
                outline
                padding="md"
                color="purple-10" 
                class="q-ml-none q-mr-sm">
              <q-avatar color="white" size="lg" font-size="20px" text-color="purple-10" icon="person"/>Si
              </q-btn>
              <q-btn
                outline
                padding="md"
                color="white" 
                class="text-purple-10 q-ml-none q-mr-sm">
              <q-avatar color="purple-10" size="lg" font-size="20px" text-color="white" icon="person"/>No
              </q-btn>
            </q-card-section>
            
            
          </q-card-section>
        </q-card>

        <q-card square flat class="col col-md-12 col-lg-12 col-xs-12 col-sm-12 col-xl-12">
          <q-card-section class="q-pa-sm" align="right">
            <q-btn color="purple-10" no-caps>
              <div class="text-left text-white text-weight-medium">
                Guardar
              </div>
            </q-btn>
          </q-card-section>
        </q-card>   

        
        <!-- Producto fin -->

    </div>

  </div>
       
      <div>
    
  </div>
      
  </q-page>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
//import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
//import 'swiper/swiper-bundle.css'
//import { Carousel3d, Slide } from 'vue-carousel-3d';
//import VueSlickCarousel from 'vue-slick-carousel'
//import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
//import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import CardBase from 'components/CardBase'
export default {
  name: 'AddPedido',
  components: {
    CardBase,
    Carousel,
    Slide
    //VueSlickCarousel,
    //Swiper,
    //SwiperSlide
  },
  data () {
    return {
      loading: true,
      dialog: true,
      slide1: 1,
      slide2: 2,
    }
  },
  created () {
    this.$q.loading.show({
      backgroundColor: 'purple-10',
      delay: 0
    })
    setTimeout(() => {
      this.$q.loading.hide()
    }, 1300)
  }
}
</script>
<style>
.outlinenone {
    outline: none;
    background-color: #E6E6E6;
    border: 0;
  }
</style>
