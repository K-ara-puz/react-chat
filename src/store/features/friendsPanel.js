import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  friends: [
    {name: 'Alexandr', userId: '1', avatar: 'user1'},
    {name: 'Svetlana', userId: '2', avatar: 'user2'},
    {name: 'Egor', userId: '6', avatar: 'user6'},
    {name: 'Stella', userId: '3', avatar: 'user3'},
  ]
}

export const friendsPanelSlice = createSlice({
  name: 'friendsPanel',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = friendsPanelSlice.actions

export default friendsPanelSlice.reducer