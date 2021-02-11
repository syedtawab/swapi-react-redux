import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    lstCharacters: [],
  },
  reducers: {
    charactersLoaded: (state, action) => {
        state.lstCharacters = action.payload;
    },
  },
});

export const { charactersLoaded } = charactersSlice.actions;

export const loadCharactersAsync = () => dispatch => {
    axios.get('https://swapi.dev/api/people/')
        .then(res => {
        dispatch(charactersLoaded(res.data.results));
    })

};

export const selectCharacters = state => state.characters.lstCharacters;

export default charactersSlice.reducer;
