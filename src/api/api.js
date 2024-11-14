// src/api/api.js
import axios from 'axios';

const BASE_URL = 'https://api.rapidmock.com/api/vikuman/v1';

export const fetchMovies = () => axios.get(`${BASE_URL}/movies/all`);
export const fetchMovieDetails = (id) => axios.get(`${BASE_URL}/movies?id=${id}`);
export const fetchMyList = () => axios.get(`${BASE_URL}/mylist`);
export const addToList = (movieId, status) =>
  axios.post(`${BASE_URL}/mylist/add`, { movieId, status });
