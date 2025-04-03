import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Characters } from '../../models/characters.models';

const initialState: Characters[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    data: initialState,
  },
  reducers: {
    addFavorite: (state, action: PayloadAction<Characters>) => {
      if (!state.data.some((character) => character.id === action.payload.id)) {
        state.data.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((character) => character.id !== action.payload);
    },
    clearFavorites: (state) => {
      state.data = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
