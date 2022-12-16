<script setup>
import profileIcon from "../components/profileIcon.vue";
</script>

<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">icon</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <!-- <a class="nav-link active" aria-current="page" to="/">Inicio</a> -->
          <RouterLink class="nav-link active" to="/">Inicio</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/publicar">Publicar</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link active" to="/about">about</RouterLink>
        </li>
      </ul>
        <profileIcon/>
    </div>
  </div>
</nav>
</template>
