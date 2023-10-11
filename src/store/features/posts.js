import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    authorAvatar: 'user5',
    message: 'Hello! This is my first post',
  },
  {
    authorAvatar: 'user5',
    message: 'This is second post',
  }
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost() {
      console.log('ADD_POST!!))')
    }
  },
})

// Action creators are generated for each case reducer function
export const { addPost } = postsSlice.actions

export default postsSlice.reducer