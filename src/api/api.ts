import {API_KEY, API_BASE_URL} from './config';

export const nowPlayingMovies: string = `${API_BASE_URL}/movie/now_playing?api_key=${API_KEY}`;
export const upcomingMovies: string = `${API_BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
export const popularMovies: string = `${API_BASE_URL}/movie/popular?api_key=${API_KEY}`;

export const searchMovie = (keyword: string) =>
  `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyword}`;

export const movieDetails = (id: number) =>
  `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}`;

export const movieCastDetails = (id: number) =>
  `${API_BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;

export const baseImagePath = (size: string, path: string) => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
