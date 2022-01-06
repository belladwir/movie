<template>
  <div class="vstack m-3 lh-sm">
    <router-link :to="{ name: 'Home' }"
      ><p class="text-start">Back</p></router-link
    >
    <p class="text-start fw-bold">{{ movie.Title }}</p>
    <img :src="movie.Poster" :alt="movie.Title" style="width: 350px" />
    <div class="hstack m-3 ms-0">
      <p class="badge bg-info text-dark m-2">{{ movie.Genre }}</p>
      <p class="badge bg-purple text-dark m-2">{{ movie.Runtime }}</p>
      <p class="badge bg-warning text-dark m-2">{{ movie.Language }}</p>
    </div>
    <div class="vstack m-3 mb-0 ms-0">
      <p class="text-start mb-0 lh-1">Director: {{ movie.Director }}</p>
      <p class="text-start lh-1">Starring: {{ movie.Actors }}</p>
    </div>
    <p class="text-start">{{ movie.Plot }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Detail",
  data() {
    return {
      id: this.$route.params.id,
      movie: Array,
    };
  },
  mounted() {
    axios
      .get("http://www.omdbapi.com/?apikey=715289b&i=" + this.id)
      .then((response) => (this.movie = response.data));
  },
};
</script>

<style scoped>
.bg-purple {
  background: rgb(189, 78, 240) !important;
}
</style>
