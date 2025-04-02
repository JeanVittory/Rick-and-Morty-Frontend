import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 1;
export const PaginationSlice = createSlice({
  name: "pagination",
  initialState: { value: initialState },
  reducers: {
    updatePaginationState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updatePaginationState } = PaginationSlice.actions;
export default PaginationSlice.reducer;
