import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import filmsAPI from '../../api/api';

const genresFetchAsync = createAsyncThunk(
  'genresFetchAsync',
  async () => {
    return { data: await filmsAPI.getGeneres() };
  }
);

const genresSlice = createSlice({
  name: 'genresSlice',
  initialState: {
    genres: [],
    isLoaded: false,
  },
  extraReducers: {
    [genresFetchAsync.fulfilled]: (state, {payload}) => {
      state.isLoaded = true;
      state.genres = payload.data.genres;
    },
  }
});

export { genresFetchAsync };
export default genresSlice.reducer;