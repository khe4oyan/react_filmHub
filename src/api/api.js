const API_KEY = 'f36f23edf6e10fd2ddcf939916b1f67a';
const LANG = 'en-US';
const REQUARE_INFO = `api_key=${ API_KEY }&language=${ LANG }`;

const fetcher = (endpoint) => {
	const baseURL = 'https://api.themoviedb.org';
	const version = '3';

	return (
		fetch(`${ baseURL }/${ version }/${ endpoint }`)
		.then(r => r.json())
	)
}

const filmsAPI = {
	getMovieById(movieId) { 
		return fetcher(`movie/${ movieId }?${ REQUARE_INFO }`); 
	},
	getMovieByGenre(genreId, page) { 
		return fetcher(`discover/movie?${ REQUARE_INFO }&with_genres=${ genreId }&page=${ page }`)
	},
	getMovieByPage(page) {
		return fetcher(`discover/movie?${ REQUARE_INFO }&page=${ page }`);
	},
	getGeneres() {
		return fetcher(`genre/movie/list?${ REQUARE_INFO }`);
	},
	getSearchMovies(movieName, page) {
		return fetcher(`search/movie?${ REQUARE_INFO }&query=${ movieName }&page=${ page }`);
	}
};

export default filmsAPI;