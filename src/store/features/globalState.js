import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
};

export const globalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    setIsFetching(state, action) {
      if (action.payload === true) {
        state.isFetching = true;
      } else state.isFetching = false;
      return state;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setIsFetching } = globalStateSlice.actions;

export default globalStateSlice.reducer;
