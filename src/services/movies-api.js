const baseUrl = 'https://api.themoviedb.org/3/';
const keyApi = `?api_key=${process.env.REACT_APP_APIKEY}`;
const imgSource = 'https://image.tmdb.org/t/p/w300';
const MissingImg =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/No_picture_available.png/401px-No_picture_available.png';
const trending = 'trending/movie/day';
const movie = 'movie/';
const credits = '/credits';
const reviews = '/reviews';
const search = 'search/movie';
const query = '&query=';

const errMsg = 'Error loading! Please tray again.';

const getTrending = () =>
  fetch(baseUrl + trending + keyApi)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(errMsg);
    })
    .then(data => data.results)
    .catch(err => {
      throw err;
    });

const getMovieDetails = movieId =>
  fetch(baseUrl + movie + movieId + keyApi)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(errMsg);
    })
    .catch(err => {
      throw err;
    });

const getMovieCredits = movieId =>
  fetch(baseUrl + movie + movieId + credits + keyApi)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(errMsg);
    })
    .then(data => data.cast)
    .catch(err => {
      throw err;
    });

const getMovieReviews = movieId =>
  fetch(baseUrl + movie + movieId + reviews + keyApi)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(errMsg);
    })
    .then(data => data.results)
    .catch(err => {
      throw err;
    });

const searchMovies = queryValue =>
  fetch(baseUrl + search + keyApi + query + queryValue)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(errMsg);
    })
    .then(data => data.results)
    .catch(err => {
      throw err;
    });

export default {
  imgSource,
  MissingImg,
  getTrending,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
  searchMovies,
};
