<template>
  <div>
  <div class="card col-sm-7 mx-auto m-3" >
    <div class="card-body">

      <div class="form-floating mb-3">
        <input type="text" class="form-control" placeholder="ej: yuca" v-model="data.titulo">
        <label>Producto</label>
      </div>

      <div class="form-floating mb-3">
        <input type="number" class="form-control" placeholder="ingresa el area en m2" v-model="data.area">
        <label>Área m2</label>
      </div>

      <div class="form-floating mb-3">
        <input type="text" class="form-control" placeholder="ej: yuca" v-model="data.variedad">
        <label>Variedad</label>
      </div>

      <div class="mb-3">
        <label class="form-label" >Fecha de siembra</label>
        <input type="date" class="form-control" v-model="data.fSiembra" >
      </div>

      <div class="mb-3">
        <label class="form-label" >Fecha de cosecha</label>
        <input type="date" class="form-control" v-model="data.fCosecha">
      </div>

      <div class="form-floating mb-3">
        <input type="number" class="form-control" placeholder="ej: yuca" v-model="data.prodEstimada">
        <label>producción estimada</label>
      </div>

      
      <!-- <div class="mb-3">
        <input type="file" class="form-control" placeholder="ej: yuca">
      </div> -->

      <div class="d-flex">

        <div class="col d-flex justify-content-center" v-if="isEditable == false">
          <button type="button" class="btn btn-primary" v-on:click="guardar()">Guardar</button>
        </div>

        <div class="col d-flex justify-content-center" v-else-if="isEditable == true">
          <button type="button" class="btn btn-primary" >Editar</button>
        </div>
        
        <div class="col d-flex justify-content-center">
        <button type="button" class="btn btn-danger">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
  {{$data}}
</div>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    isEditable: Boolean,
      },
  data() {
    return {
      data: {
        titulo: "",
        area: "",
        variedad: "",
        fSiembra: "",
        fCosecha: "",
        prodEstimada: ""
      }
    }
  },
  methods: {
    guardar(){
      axios.post("http://localhost:3000/post/newPost", this.data)
      .then((response)=>{
        console.log(response)
      })
    },
    editar(){
      
    }
  },
}
</script>

<style scoped>

</style>