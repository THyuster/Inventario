<template>
    <div  aria-label="Basic mixed styles example">
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
            <label for="nameCreate" class="col-form-label">Nombre</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>

          <div class="modal-body">
            <label for="DescipcionCreate" class="col-form-label">Telefono</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>

          <div class="modal-body">
            <label for="PrecioCreate" class="col-form-label">Correo Electronico</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-success">Guardar</button>
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
  data() {
    return {
      modalCrear: null as Modal | null,
      modalModificar: null as Modal | null,
      modalEliminar: null as Modal | null
    }
  },
  mounted() {
    this.modalCrear = new Modal(this.$refs.modalCrear as HTMLElement);
    this.modalModificar = new Modal(this.$refs.modalModificar as HTMLElement);
    this.modalEliminar = new Modal(this.$refs.modalEliminar as HTMLElement);
  },
  methods: {
    openModal(tipo: string) {
      switch (tipo) {
        case 'crear':
          (this.modalCrear as Modal).show();
          break;
        case 'modificar':
          (this.modalModificar as Modal).show();
          break;
        case 'eliminar':
          (this.modalEliminar as Modal).show();
          break;
      }
    }
  }
}
</script>