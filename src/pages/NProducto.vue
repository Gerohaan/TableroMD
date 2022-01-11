<template>
  <q-page class="container" style="background: #EFEFEF;">
    <div class="row q-pa-lg">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <q-card flat square class="q-ma-md q-pa-md">
                    <q-card-section>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" align="left">
                                <p class="text-h4 text-weight-bold text-purple-10">Nombre del producto</p>
                               <q-card-section horizontal class="q-mt-xs" style="margin-top:-15px;">
                                    <div class="text-h5 text-weight-bold">
                                         Ref:
                                    </div>
                                     <div class="text-h5 q-ml-sm text-purple-10">
                                          1892      
                                    </div>
                               </q-card-section>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" align="right">
                                <q-btn padding="xs lg" style="background-color: #4D3C6B;" class="text-white text-weight-light" label="Editar" no-caps/>
                            </div>
                        </div>
                        <div class="row q-pa-lg q-ma-xs" align="center">
                            <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 q-ml-none q-mr-lg" align="center">
                                <div class="text-h5 text-weight-bold text-deep-purple-5">
                                    Costo
                                </div>
                                <div class="text-h6 q-ml-sm q-mt-sm">
                                          $40.000      
                                </div>
                            </div>
                            <q-separator size="xl" vertical/>
                            <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 q-ml-none q-mr-lg" align="center">
                                <div class="text-h5 text-weight-bold text-deep-purple-5">
                                    Precio
                                </div>
                                <div class="text-h6 q-ml-sm q-mt-sm">
                                          $120.000      
                                </div>
                            </div>
                            <q-separator size="xl" vertical/>
                            <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 q-ml-none q-mr-lg" align="center">
                                <div class="text-h5 text-weight-bold text-deep-purple-5">
                                    Inventario
                                </div>
                                <div class="text-h6 q-ml-sm q-mt-sm">
                                          14      
                                </div>
                            </div>
                            <q-separator size="xl" vertical/>
                            <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 q-ml-none q-mr-lg" align="center">
                                <div class="text-h5 text-weight-bold text-deep-purple-5">
                                    Categorías
                                </div>
                                <div class="text-h6 q-ml-sm q-mt-sm">
                                          Falda, Short      
                                </div>
                            </div>
                            <q-separator size="xl" vertical/>
                            <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 q-ml-none q-ml-lg " align="center">
                                <div class="text-h5 text-weight-bold text-deep-purple-5">
                                    Estado
                                </div>
                                <div class="text-h6 q-ml-sm q-mt-sm" style="color: #9FE032;">
                                          Publicado      
                                </div>
                            </div>
                        </div>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <q-card flat square class="q-ma-xs q-ml-md">
                        <q-card-section>
                            <q-card-section horizontal>
                                <q-card-section class="q-pt-md">
                                <q-avatar rounded>
                                    <img src="../../public\icons\bodega.svg">
                                </q-avatar>
                                </q-card-section>
                                <q-card-section class="q-pt-none q-mt-sm q-pl-none" align="left">
                                <div class="text-h6 text-bold text-purple-10" align="left">Nombre de bodega</div>
                                <div style="margin-top:-5px;" class="text-h6 text-purple-10" align="left">15 Und.</div>
                                </q-card-section>
                            </q-card-section>
                        </q-card-section>
                </q-card>
            </div>
             <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <q-card flat square class="q-ma-xs">
                        <q-card-section>
                            <q-card-section horizontal>
                                <q-card-section class="q-pt-md">
                                <q-avatar rounded>
                                    <img src="../../public\icons\bodega.svg">
                                </q-avatar>
                                </q-card-section>
                                <q-card-section class="q-pt-none q-mt-sm q-pl-none" align="left">
                                 <div class="text-h6 text-bold text-purple-10" align="left">Nombre de bodega</div>
                                 <div style="margin-top:-5px;" class="text-h6 text-purple-10" align="left">3 Und.</div>
                                </q-card-section>
                            </q-card-section>
                        </q-card-section>
                </q-card>
            </div>
             <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <q-card flat square class="q-ma-xs q-mr-md">
                        <q-card-section>
                            <q-card-section horizontal>
                                <q-card-section class="q-pt-md">
                                <q-avatar rounded>
                                    <img src="../../public\icons\bodega.svg">
                                </q-avatar>
                                </q-card-section>
                                <q-card-section class="q-pt-none q-mt-sm q-pl-none" align="left">
                                 <div class="text-h6 text-bold text-purple-10" align="left">Nombre de bodega</div>
                                 <div style="margin-top:-5px;" class="text-h6 text-purple-10" align="left">12 Und.</div>
                                </q-card-section>
                            </q-card-section>
                        </q-card-section>
                </q-card>
            </div>
        </div>
    
  </q-page>
</template>

<script>

export default {
  name: 'NProducto',
  components: {
    
  }
}
</script>
