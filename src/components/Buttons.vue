<template>
  <div aria-label="Basic mixed styles example">
    <button class="me-2 btn btn-outline-success" type="button" @click="openModal('crear')">Crear</button>
    <button class="me-2 btn btn-outline-primary" type="button" @click="openModal('modificar')">Modificar</button>
    <button class="me-2 btn btn-outline-danger" type="button" @click="openModal('eliminar')">Eliminar</button>

    <!-- Modal Crear -->
    <div ref="modalCrear" class="modal fade" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Nuevo Movimiento</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <label for="nameCreate" class="col-form-label">Nombre del Producto</label>
            <input type="text" class="form-control" id="recipient-name" v-model="nuevoRegistro.nombre" ref="nombreInput">
          </div>

          <div class="modal-body">
            <label for="DescipcionCreate" class="col-form-label">Precio</label>
            <input type="text" class="form-control" id="recipient-name" v-model="nuevoRegistro.descripcion" ref="descripcionInput">
          </div>

          <div class="modal-body">
            <label for="PrecioCreate" class="col-form-label">cantidad</label>
            <input type="text" class="form-control" id="recipient-name" v-model="nuevoRegistro.precio" ref="precioInput">
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-success" @click="guardarRegistro">Guardar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Modificar -->
    <div ref="modalModificar" class="modal fade" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modificar</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <div class="modal-body">
              <label for="nameCreate" class="col-form-label">Nombre</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>

            <div class="modal-body">
              <label for="DescipcionCreate" class="col-form-label">Descripcion</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>

            <div class="modal-body">
              <label for="PrecioCreate" class="col-form-label">Precio</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary">Guardar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Eliminar -->
    <div ref="modalEliminar" class="modal fade" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Eliminar</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            Seguro que quieres eliminar este registro?
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-danger">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Modal } from 'bootstrap';

export default {
  mounted() {
    this.modalCrear = new Modal(this.$refs.modalCrear);
    this.modalModificar = new Modal(this.$refs.modalModificar);
    this.modalEliminar = new Modal(this.$refs.modalEliminar);

    this.registros = JSON.parse(localStorage.getItem('registros') || '[]');
  },
  data() {
    return {
      nuevoRegistro: {
        nombre: '',
        descripcion: '',
        precio: ''
      },
      registros: [] 
        
    }
  },
  methods: {
    openModal(tipo) {
      switch (tipo) {
        case 'crear':
          this.modalCrear.show();
          break;
        case 'modificar':
          this.modalModificar.show();
          break;
        case 'eliminar':
          this.modalEliminar.show();
          break;
      }
    },
    guardarRegistro() {

      const nombre = this.$refs.nombreInput.value;
      const descripcion = this.$refs.descripcionInput.value;
      const precio = this.$refs.precioInput.value;

      const nuevoRegistro = { nombre, descripcion, precio };

      this.registros.push(nuevoRegistro);

      localStorage.setItem('registros', JSON.stringify(this.registros));

      this.modalCrear.hide();
      
      this.nuevoRegistro.nombre = '';
      this.nuevoRegistro.descripcion = '';
      this.nuevoRegistro.precio = '';
    }
  }
}
</script>