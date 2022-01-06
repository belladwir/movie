<template>
  <div id="app">
    <h3>{{ msg }}</h3>
    <div class="row">
      <div class="col-sm-4" v-for="movie in movies" :key="movie.imdbID">
        <div class="card m-3 rounded-3">
          <img :src="movie.Poster" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ movie.Title }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Movies List From OMDB API",
    };
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
  mounted() {
    this.$store.dispatch("getMovies");
  },
};
</script>
