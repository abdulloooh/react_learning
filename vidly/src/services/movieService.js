import http from "./httpService";
import config from "../config.json";

export function getMovies() {
  return http.get(config.movieEndPoint);
}

export function getMovie(id) {
  return http.get(config.movieEndPoint + "/" + id);
}

export function saveMovie(movie) {
  let movieInDb = {};
  movieInDb.title = movie.title;
  movieInDb.genreId = movie.genreId;
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  return movie._id
    ? http.put(config.movieEndPoint + "/" + movie._id, movieInDb)
    : http.post(config.movieEndPoint, movieInDb);
}

export function deleteMovie(id) {
  http.delete(config.movieEndPoint + "/" + id);
}
