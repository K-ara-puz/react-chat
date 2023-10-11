import { configureStore } from '@reduxjs/toolkit'
import friendsPanelReducer from './features/friendsPanel';
import postsReducer from './features/posts';

export const store = configureStore({
  reducer: {
    friendsPanel: friendsPanelReducer,
    posts: postsReducer,
  },
})