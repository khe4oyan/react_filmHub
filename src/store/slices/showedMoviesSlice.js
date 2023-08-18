import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import filmsAPI from '../../api/api';

const showedGenreFetchAsync = createAsyncThunk(
	'showedGenreFetchAsync',
	async ({ genreId, page }) => {
		return await filmsAPI.getMovieByGenre(genreId, page)
		.then(data => ({ data, genreId }));
	}
);

const showedListFetchAsync = createAsyncThunk(
	'showedListFetchAsync',
	async (page) => {
		return await filmsAPI.getMovieByPage(page)
		.then(data => ({ data }));
	}
);

const showedSearchFetchAsync = createAsyncThunk(
	'showedSearchFetchAsync',
	async ({ movieName, page }) => {
		return await filmsAPI.getSearchMovies(movieName, page)
		.then(data => ({ data, page }));
	}
);

const showedMovieSlice = createSlice({
	name: 'showedMovieSlice',
	initialState: {
		showedMovies: [],
		genreId: null,
	},
	extraReducers: {
		[showedGenreFetchAsync.fulfilled]: (state, { payload }) => { 
			state.genreId = payload.genreId;
			state.showedMovies = payload.data.results; 
		},
		[showedGenreFetchAsync.rejected]: (state) => {
			state.showedMovies = [];
		},

		[showedListFetchAsync.fulfilled]: (state, { payload }) => { 
			state.genreId = null;
			state.showedMovies = payload.data.results; 
		},
		[showedListFetchAsync.rejected]: (state) => {
			state.showedMovies = [];
		},

		[showedSearchFetchAsync.fulfilled]: (state, { payload }) => {
			state.showedMovies = payload.data.results;
			state.genreId = 'search';
		},
		[showedSearchFetchAsync.rejected]: (state) => {
			state.showedMovies = [];
		},
	}
});

export { showedGenreFetchAsync, showedListFetchAsync, showedSearchFetchAsync };
export default showedMovieSlice.reducer;