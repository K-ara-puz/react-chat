import { createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../../api/api";
const initialState = {
  isAuth: false,
  userId: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData(state, action) {
      state.userId = action.payload.userId;
      state.isAuth = true;
      return state;
    },
  },
});
export const authUser = () => (dispatch) => {
    authAPI.authMe().then((res) => {
        if (res.data.resultCode === 0) {
          dispatch(setAuthData(res.data.data));
        }
      });
};
// Action creators are generated for each case reducer function
export const { setAuthData } = authSlice.actions;

export default authSlice.reducer;
