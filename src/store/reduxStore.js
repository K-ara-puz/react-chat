import { configureStore } from '@reduxjs/toolkit'
import friendsPanelReducer from './features/friendsPanel';
import postsReducer from './features/posts';
import usersReducer from './features/users';
import authReducer from './features/auth';
import popupsReducer from './features/popups';
import formsReducer from './features/forms';
import globalStateReducer from './features/globalState';

export const store = configureStore({
  reducer: {
    friendsPanel: friendsPanelReducer,
    posts: postsReducer,
    users: usersReducer,
    auth: authReducer,
    popups: popupsReducer,
    forms: formsReducer,
    globalState: globalStateReducer
  },
})