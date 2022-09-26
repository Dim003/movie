import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTE3YTFmYTViM2UxZjQyNDI3ZjVkZjFlMTI2NjlkYyIsInN1YiI6IjYyZWJmOWYyMjIzYThiMDA1OGE1NzRiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UtJoMoQmAklgiw_aIH6nebBWA0nqg2ZtKr2oJV5UDeY";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    authorization: `Bearer ${token}`
  }
})