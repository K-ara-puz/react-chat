import { configureStore } from '@reduxjs/toolkit'
import friendsPanelReducer from './features/friendsPanel';
import postsReducer from './features/posts';
import usersReducer from './features/users';

export const store = configureStore({
  reducer: {
    friendsPanel: friendsPanelReducer,
    posts: postsReducer,
    users: usersReducer
  },
})