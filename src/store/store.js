import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import postsReducer from "./slices/postsSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postsReducer,
  },
});
