<template>
  <div class="dropdown dropstart ">
    <div class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" v-on:click="actualizar()">
            <i class="bi-person-circle" style="font-size: 1.8rem;"></i>
          </a>
          <ul class="dropdown-menu">
            <li><p class="m-1 d-flex justify-content-center">{{userData}}</p></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Perfil</a></li>
            <li><a class="dropdown-item" href="#">Mis publicaciones</a></li>
            <li><a class="dropdown-item" href="#" v-on:click="cerrarSesion()">Cerrar sesión</a></li>
          </ul>
        </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userData: null
    }
  },

  methods: {
    cerrarSesion(){
      // console.log(localStorage)
      localStorage.removeItem("token");
      localStorage.removeItem("nombre");
      localStorage.removeItem("id");
      this.$router.push("/login")
    },
    actualizar(){
    this.userData = localStorage.nombre

    }

  },
}
</script>