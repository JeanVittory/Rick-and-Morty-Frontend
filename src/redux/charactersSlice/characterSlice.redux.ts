import { createSlice } from "@reduxjs/toolkit";
import { characters } from "../../models/characters.models";

const initialState: characters[] = [];
export const allCharacterSlice = createSlice({
  name: "AllCharacters",
  initialState: { data: initialState },
  reducers: {
    getAllCharacters: (state, action) => {
      state.data = action.payload;
    },
  },
});


export const { getAllCharacters } = allCharacterSlice.actions;
export default allCharacterSlice.reducer;
