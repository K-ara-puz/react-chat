import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginForm: {
        errors: []
    }
};

export const formsSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    pushLoginErrors(state, action) {
      let errors = action.payload;
      state.loginForm.errors = [];
      errors.forEach(error => {
        if (!state.loginForm.errors.includes(error)) {
          state.loginForm.errors.push(error);
        }
      });
      return state;
    },
    clearLoginErrors(state, action) {
      state.loginForm.errors = [];
      return state;
    }
  },
});

export const setLoginErrors = (errors) => (dispatch) => {
  dispatch(pushLoginErrors(errors))
}
export const deleteLoginErrors = () => (dispatch) => {
  dispatch(clearLoginErrors())
}

// Action creators are generated for each case reducer function
export const { pushLoginErrors, clearLoginErrors } = formsSlice.actions;

export default formsSlice.reducer;
