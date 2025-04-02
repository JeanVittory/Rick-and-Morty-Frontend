import { createSlice } from "@reduxjs/toolkit";
import { singleCharacterModel } from "../../models/singleCharacter.models";

const initialState  = {} as singleCharacterModel ;

export const singleCharacterSlice = createSlice({
  name: "singleCharacter",
  initialState: { value: initialState },
  reducers: {
    updateSingleCharacter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {updateSingleCharacter} = singleCharacterSlice.actions
export default singleCharacterSlice.reducer