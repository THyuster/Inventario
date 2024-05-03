<template>

  <navbar></navbar>
  <div>
    <p class="me-auto mb-3 mb-lg-2  text-movimientos" id="textoProveedor">Estadisticas</p>
 </div>
 <div class=" ">
  <p class="me-auto mb-3 mb-lg-2" id="Texto_3">Productos con el precio mas alto</p>
</div>
  
 <div class="row">
    <div class="col-12">
      <div class="container shadow mt-5 mb-4 border" style="border-radius: 10px;">
        <DataTable
          class="table table-striped table-bordered display custom-datatable"
          :options="{
            responsive: true,
            autoWidth: false,
            scrollX: false,
            language: {
              emptyTable: 'No hay información disponible',
              info: 'Mostrando _START_ a _END_ de _TOTAL_ Entradas',
              infoEmpty: 'Mostrando 0 to 0 de 0 Entradas',
              infoFiltered: '(Filtrado de _MAX_ total entradas)',
              infoPostFix: '',
              thousands: ',', 
              lengthMenu: 'Mostrar _MENU_ Entradas',
              loadingRecords: 'Cargando...',
              processing: 'Procesando...',
              search: 'Buscar',
              zeroRecords: 'Sin resultados encontrados',
              paginate: {
                first: 'Primero',
                last: 'Último',
                next: 'Siguiente',
                previous: 'Anterior'
              }
            }
          }"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>NOMBRE</th>
              <th>DESCRIPCION</th>  
              <th>PRECIO</th>
            </tr>
          </thead>
        </DataTable>
      </div>
    </div>
   </div><br>

   <p class="me-auto mb-3 mb-lg-2" id="Texto_3">Productos con mayor precio</p>
   
   <div class="row">
    <div class="col-12">
      <div class="container shadow mt-5 mb-4 border" style="border-radius: 10px;">
        <DataTable
          class="table table-striped table-bordered display custom-datatable"
          :options="{
            responsive: true,
            autoWidth: false,
            scrollX: false,
            language: {
              emptyTable: 'No hay información disponible',
              info: 'Mostrando _START_ a _END_ de _TOTAL_ Entradas',
              infoEmpty: 'Mostrando 0 to 0 de 0 Entradas',
              infoFiltered: '(Filtrado de _MAX_ total entradas)',
              infoPostFix: '',
              thousands: ',', 
              lengthMenu: 'Mostrar _MENU_ Entradas',
              loadingRecords: 'Cargando...',
              processing: 'Procesando...',
              search: 'Buscar',
              zeroRecords: 'Sin resultados encontrados',
              paginate: {
                first: 'Primero',
                last: 'Último',
                next: 'Siguiente',
                previous: 'Anterior'
              }
            }
          }"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>NOMBRE</th>
              <th>DESCRIPCION</th>
              <th>PRECIO</th>
            </tr>
          </thead>
        </DataTable>
      </div>
    </div>
   </div><br><br>
</template>


<script setup lang="ts">

import navbar from '@/components/navbar.vue';

import DataTable from 'datatables.net-vue3';
import DataTableLib from 'datatables.net-bs5';
import 'datatables.net-responsive';

DataTable.use(DataTableLib);

</script>

<style scoped>

@import 'datatables.net-bs5';
@import 'datatables.net-responsive-bs5/css/responsive.bootstrap5.css';
@import './src/assets/estilosComponentes.css';




#Texto_2{
    position: relative;
    justify-content: center;
    top: 40%;
    font-style: solid;
    font-size: 25px;
    right: 7%;
}
#Texto_3{
    display: flex;
    justify-content: center;
    font-style: solid;
    font-size: 25px;
}
</style>
