import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUsers(state, action) {
      let users = action.payload;
      state = [...users];
      return state;
    }
  },
});

// Action creators are generated for each case reducer function
export const { loadUsers, increment } = usersSlice.actions;

export default usersSlice.reducer;
