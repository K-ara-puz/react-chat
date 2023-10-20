import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoginPopupOpen: false,
};

export const popupsSlice = createSlice({
  name: "popups",
  initialState,
  reducers: {
    showLoginPopup(state, action) {
        state.isLoginPopupOpen = true;
        return state
    },
    unshowLoginPopup(state, action) {
      state.isLoginPopupOpen = false;
      return state
    }
  },
});
export const openLoginPopup = () => (dispatch) => {
    dispatch(showLoginPopup())
}
export const closeLoginPopup = () => (dispatch) => {
  dispatch(unshowLoginPopup())
}
// Action creators are generated for each case reducer function
export const { showLoginPopup, unshowLoginPopup } = popupsSlice.actions;

export default popupsSlice.reducer;
