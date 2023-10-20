import { createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../../api/api";
import { setLoginErrors, deleteLoginErrors } from '../../store/features/forms';
import { setIsFetching } from "./globalState";

const initialState = {
  isAuth: false,
  userId: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData(state, action) {
      state.userId = action.payload.id;
      state.isAuth = action.payload.isAuth;
      return state;
    },
  },
});
export const authUser = () => (dispatch) => {
    authAPI.authMe().then((res) => {
        if (res.data.resultCode === 0) {
          let id = res.data.data.id;
          dispatch(setAuthData({id: id, isAuth: true}));
        }
      });
};
export const login = (values) => (dispatch) => {
  dispatch(setIsFetching(true))
  authAPI.login(values.email, values.password, values.rememberMe).then(res => {
    if (res.data.resultCode === 0) {
      let id = res.data.data.userId;
      dispatch(setAuthData({id: id, isAuth: true}));
      dispatch(deleteLoginErrors());
      dispatch(setIsFetching(false))
      return true;
    }
    if (res.data.messages.length > 0) {
      dispatch(setLoginErrors([...res.data.messages]));
      dispatch(setIsFetching(false));
      return false;
    }
  })
}
export const logout = () => (dispatch) => {
  authAPI.logout().then(res => {
    if (res.data.resultCode === 0) {
      dispatch(setAuthData({id: null, isAuth: false}));
    }
  })
}
// Action creators are generated for each case reducer function
export const { setAuthData } = authSlice.actions;

export default authSlice.reducer;
