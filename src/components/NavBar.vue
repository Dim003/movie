<template>
  <nav class="navbar navbar-expand-lg bg-indigo pb-0 pt-0">
    <div class="container-fluid">
      <a class="navbar-brand pb-0 pt-0" href="/"><img src="../assets/MySeriesLogo.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Filmes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/actors">Atores</a>
          </li>
        </ul>
        <v-spacer></v-spacer>
        <v-autocomplete
          clearable
          hide-no-data
          hide-selected
          color="white"
          prepend-inner-icon="search"
          flat
          :items="movies"
          item-text="title"
          item-value="id"
          id="search"
        >
        <template v-slot:item="{item}">
          <v-btn text :to="`/movie/${item.id}`">{{item.title}}</v-btn>
        </template>
        </v-autocomplete>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data:()=>({
    drawer:null,
    model:'',
    search:null,
    movies: []
  }),
  mounted(){
    this.loadMovies();
  },
  methods: {
    loadMovies: async function() {
      try{
        const response = await this.$http.get("/movie/popular");
        this.movies = response.data.results;
          
      }catch(error){
        console.log(error);
      }
    }
  }
}
</script>

<style>
nav {
  background: rgb(3, 37, 65) !important;
  color: #f8f9fa !important;
}
nav a {
  color: #f8f9fa !important;
}
home {
  color: #f8f9fa !important;
}
img {
  width: 100px;
  margin: 0px;
}
</style>