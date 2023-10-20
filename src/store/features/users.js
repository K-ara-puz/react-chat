import { createSlice } from "@reduxjs/toolkit";
import { usersAPI } from "../../api/api";
import { setIsFetching } from "./globalState";

const initialState = {
  users: [],
  currentPage: 1,
  pagesCount: 0,
  elemsOnPage: 4,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action) {
      let users = action.payload;
      state.users = [...users];
      return state;
    },
    setPagesCount(state, action) {
      let pagesCount = Math.ceil(action.payload);
      state.pagesCount = pagesCount;
      return state;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
      return state;
    },
  },
});

export const loadUsers = () => (dispatch, getState) => {
  dispatch(setIsFetching(true));
  usersAPI.getUsers().then((res) => {
    let elemsCount = res.data.items.length;
    let pagesCount = elemsCount / getState().users.elemsOnPage;
    let users = res.data.items.slice(0, getState().users.elemsOnPage);
    dispatch(setUsers(users));
    dispatch(setPagesCount(pagesCount));
    dispatch(setIsFetching(false));
  });
};
export const updateUsers = () => (dispatch, getState) => {
  dispatch(setIsFetching(true));
  usersAPI.getUsers(getState().users.elemsOnPage, getState().users.currentPage).then((res) => {
    dispatch(setUsers(res.data.items));
    dispatch(setIsFetching(false));
  });
}
export const followUser = (userId) => (dispatch, getState) => {
  usersAPI.followUser(userId)
  .then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(updateUsers());
    }
  })
}
export const unfollowUser = (userId) => (dispatch, getState) => {
  usersAPI.unfollowUser(userId).then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(updateUsers());
    }
  })
}
// Action creators are generated for each case reducer function
export const {
  setPagesCount,
  setCurrentPage,
  setUsers,
} = usersSlice.actions;

export default usersSlice.reducer;
