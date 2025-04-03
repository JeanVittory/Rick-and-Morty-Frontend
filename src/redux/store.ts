import { configureStore } from '@reduxjs/toolkit';
import allCharacters from './charactersSlice/characterSlice.redux';
import paginationState from './paginationSlice/paginationSlice.redux';
import singleCharacterState from './singleCharacterSlice/singleCharacterSlice.redux';
import favoritesReducer from './favoriteCharacteresSlice/favoriteCharacters.slice';

export const reduxStore = configureStore({
  reducer: {
    allCharacters: allCharacters,
    pagination: paginationState,
    singleCharacter: singleCharacterState,
    favoritesCharacters: favoritesReducer,
  },
});
