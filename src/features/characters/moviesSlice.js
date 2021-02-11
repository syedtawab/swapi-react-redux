import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    lstMovies: [],
  },
  reducers: {
    moviesLoaded: (state, action) => {
        state.lstMovies = action.payload;
    },
  },
});

export const { moviesLoaded } = moviesSlice.actions;

export const loadMoviesAsync = (lstMovies) => async dispatch => {
  console.log(lstMovies);
    const movies = [];
    for (let i=0; i<lstMovies.length; i++){
        var movie = await axios.get(lstMovies[i]);
        movies.push(movie.data);
      }
    dispatch(moviesLoaded(movies));

};

export const selectMovies = state => state.movies.lstMovies;

export default moviesSlice.reducer;
