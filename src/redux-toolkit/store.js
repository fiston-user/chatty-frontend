import chatReducer from '@redux/reducers/chat/chat.reducer';
import modalReducer from '@redux/reducers/modal/modal.reducer';
import notificationReducer from '@redux/reducers/notifications/notification.reducer';
import postReducer from '@redux/reducers/post/post.reducer';
import postsReducer from '@redux/reducers/post/posts.reducer';
import userPostReactionReducer from '@redux/reducers/post/user-post-reaction.reducer';
import suggestionsReducer from '@redux/reducers/suggestions/suggestions.reducer';
import userReducer from '@redux/reducers/user/user.reducer';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: userReducer,
    suggestions: suggestionsReducer,
    notifications: notificationReducer,
    modal: modalReducer,
    post: postReducer,
    allPosts: postsReducer,
    userPostReactions: userPostReactionReducer,
    chat: chatReducer
  }
});
