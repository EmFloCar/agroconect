<template>
  <div class="d-flex justify-content-center">
    <div class="col-sm-5">
      <div class="card">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
          <h5 class="card-title">{{ titulo }}</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ultricies tellus.
            Mauris nec nulla in urna vulputate feugiat.</p>
        </div>

        <ul class="list-group list-group-flush">
          <li class="list-group-item">Área: {{ area }}m²</li>
          <li class="list-group-item">Variedad: {{ variedad }}</li>
          <li class="list-group-item">Fecha de siembra: {{ fSiembra }}</li>
          <li class="list-group-item">Fecha de cosecha: {{ fCosecha }}</li>
          <li class="list-group-item">producción estimada: {{ prodEstimada }}</li>
          <li class="list-group-item">contacto: {{ numCelular }}</li>
        </ul>

        <!-- <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
        titulo: String,
        area: Number,
        variedad: String,
        fSiembra: String,
        fCosecha: String,
        prodEstimada: String,
        numCelular: String
      },
  data() {
    return {

    }
  }
}
</script>