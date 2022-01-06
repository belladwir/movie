<template>
  <div id="app">
    <p class="text-start fw-bold m-3">{{ msg }}</p>
    <div class="row">
      <div class="col-sm-6" v-for="movie in movies" :key="movie.imdbID">
        <div class="card m-1 rounded-3">
          <img
            :src="movie.Poster"
            class="card-img-top"
            :alt="movie.Title"
            style="cursor: pointer"
            @click="showModal(movie.Poster)"
          />
          <router-link :to="{ name: 'Detail', params: { id: movie.imdbID } }">
            <div class="card-body">
              <p class="text-start card-title fw-bold" style="font-size: 16px">
                {{ movie.Title }}
              </p>
              <p class="text-start" style="font-size: 12px">{{ movie.Year }}</p>
            </div>
          </router-link>
        </div>
      </div>
      <Modal v-show="isModalVisible" v-bind:poster="poster" />
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  name: "Home",
  components: {
    Modal,
  },
  data() {
    return {
      msg: "Movies List From OMDB API",
      isModalVisible: false,
      poster: null,
    };
  },
  methods: {
    showModal(poster) {
      this.isModalVisible = true;
      this.poster = poster;
    },
    closeModal() {
      this.isModalVisible = false;
      this.poster = null;
    },
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
