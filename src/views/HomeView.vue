<script setup>
import post from '../components/post.vue'
</script>

<template>
  <div class="mt-5 mb-5">
    <div class="d-grid gap-5" >
      <post 
        v-for="(post, index) in posts" :key="index"        
        :titulo="this.posts[index].titulo"
        :area="this.posts[index].area"
        :variedad="this.posts[index].variedad"
        :fSiembra="this.posts[index].fSiembra"
        :fCosecha="this.posts[index].fCosecha"
        :prodEstimada="this.posts[index].prodEstimada"
        :numCelular="this.posts[index].numCelular"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default{
  data(){
    return{
      posts:[]
    }
  },

  async mounted() {
    if(!localStorage.token){
      return this.$router.replace('/login')
    }  
    let response = await axios.get('http://localhost:3000/post/getPosts');
    this.posts = response.data
    console.log(this.posts)
  },
}

</script>