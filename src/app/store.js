import { configureStore } from '@reduxjs/toolkit';
import  charactersReducer  from '../features/characters/charactersSlice.js';
import moviesReducer from '../features/characters/moviesSlice.js';

export default configureStore({
  reducer: {
    characters: charactersReducer,
    movies: moviesReducer,
  }
});
