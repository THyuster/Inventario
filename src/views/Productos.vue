<template>
 <navbar></navbar>
 <div class="d-flex justify-content-end">
  <p class="me-auto mb-3 mb-lg-2 text-movimientos"  id="textoProveedor">Productos</p>
</div>
  <div class="group-btn">
    <Buttons></Buttons>
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
   </div> 
</template>

<script setup lang="ts">

import Buttons from '@/components/Buttons.vue';
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

</style>
