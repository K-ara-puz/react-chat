import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  users: [],
  currentPage: 1,
  pagesCount: 0,
  elemsOnPage: 3,
  isFetching: false
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUsers(state, action) {
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
    },
    followUser(state, action) {
      let userId = action.payload.userId;
      let toDo = action.payload.action;
      if (toDo === 'follow') {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
          headers: {
            'API-KEY': '7ad0e3af-5c84-49d8-a35d-4a430857aed1'
          },
          withCredentials: true
        });
      } else {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
          headers: {
            'API-KEY': '7ad0e3af-5c84-49d8-a35d-4a430857aed1'
          },
          withCredentials: true
        });
      }
      return state
    },
    authUser() {
      let email = 'mis.viktoriya@hotmail.com';
      let password = 'root';
      axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login?email=${email}&password=${password}`).then(res => {
      })
    },
    setIsFetching(state, action) {
      if (action.payload === true) {
        state.isFetching = true;
      } else state.isFetching = false;
      return state;
    }
  },
});

// Action creators are generated for each case reducer function
export const { loadUsers, setPagesCount, setCurrentPage, followUser, authUser, setIsFetching } = usersSlice.actions;

export default usersSlice.reducer;
