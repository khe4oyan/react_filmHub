import { configureStore } from '@reduxjs/toolkit'
import genresSlice from './slices/genresSlice';
import showedMoviesSlice from './slices/showedMoviesSlice';

const store = configureStore({
  reducer: {
    genresData: genresSlice,
    showedMovies: showedMoviesSlice,
  }
});

export default store;