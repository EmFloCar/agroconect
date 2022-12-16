<script setup>
import formulario from "../components/formulario.vue"
</script>

<template>
<formulario
:isEditable="false"/>

</template>

<script>
export default {
  mounted() {
    if(!localStorage.token){
      return this.$router.replace('/login')
    }  
  },
}
</script>

<style scoped>
</style>
